"use client";
import React, { useState, useEffect } from 'react';
import { gql, useLazyQuery } from "@apollo/client";
import {Entity, MediaChannel, Organization, Person} from "@/../ogm-types";

import bg from "@/public/lush_bg.png";
import useDebounce from "@/debounce";

const DEBOUNCE_DELAY = 250;
const IMG_PLACEHOLDER = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Larry_David_at_the_2009_Tribeca_Film_Festival_2.jpg/640px-Larry_David_at_the_2009_Tribeca_Film_Festival_2.jpg";

// noinspection GraphQLUnresolvedReference
const PEOPLE_WHERE_QUERY = gql`query People($peopleWhere: PersonWhere, $orgWhere: OrganizationWhere, $mediaWhere: MediaChannelWhere) {
    people(where: $peopleWhere, options: {
        sort: [
            {
                name: DESC
            }
        ]
        }) {
        id
        name
        emails
        employment {
            id
            name
        }
        user_accounts {
            id
            platform_user
            username
            platform {
                id
                name
                owners {
                    ... on Organization {
                        id
                        name
                    }
                    ... on Person {
                        id
                        name
                    }
                }
            }
        }
    }
    organizations(where: $orgWhere, options: {
        sort: [
            {
                name: DESC
            }
        ]
        }) {
        id
        name
        investments {
            ... on MediaChannel {
                id
                name
            }
            ... on Organization {
                id
                name
            }
        }
        investors {
            ... on Person {
                id
                name
                employment {
                    id
                    name
                }
            }
        }
    }
    mediaChannels(where: $mediaWhere, options: {
        sort: [
            {
                name: DESC
            }
        ]
    }) {
        id
        name
        category
        owners {
            ... on Person {
                id
                name
            }
            ... on Organization {
                id
                name
            }
        }
    }
}`;

/**
 *
 * @param input
 */
const getNameStartsWithWhereClause = (input: String) => {
    return {
        peopleWhere: {
            OR: [
                {
                    name_CONTAINS: input
                },
                {
                    employment_SOME: {
                        name_CONTAINS: input
                    }
                }
            ]
        },
        orgWhere: {
            name_CONTAINS: input
        },
        mediaWhere: {
            OR: [
                {
                    name_CONTAINS: input
                },
                {
                    owners_SOME: {
                        Organization: {
                            name_CONTAINS: input
                        },
                        Person: {
                            name_CONTAINS: input
                        }
                    }
                }
            ]
        }
    }
}

/**
 *
 * @param props
 * @constructor
 */
function Search(props: any) {
    const { searchText, setSearchText } = props;
    return (
        <div className="flex-none gap-2">
            <div className="form-control">
                <label className="input flex items-center gap-2">
                    <input type="text"
                           className="grow"
                           placeholder="Search"
                           value={searchText}
                           onChange={(event) => setSearchText(event.target.value)} />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                         className="w-4 h-4 opacity-70">
                        <path fillRule="evenodd"
                              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                              clipRule="evenodd"/>
                    </svg>
                </label>
            </div>
        </div>
    )
}

function PersonCard(props: any) {
    const { person } = props;
    return (
        <tr key={person.id}>
            <td>
                <div className="flex-auto items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={IMG_PLACEHOLDER}
                                 alt="Person Avatar"/>
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{person.name}</div>
                        <div className="text-sm opacity-50">{person.emails}</div>
                    </div>
                </div>
            </td>
            <td>
                {person.employment?.flatMap((o: Organization) => o.name)}
                <br/>
            </td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    )
}

/**
 *
 * @param props
 * @constructor
 */
function MediaCard(props: any) {
    const { mediaChannel } = props;
    return (
        <tr key={mediaChannel.id}>
            <td>
                <div className="flex-auto items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={IMG_PLACEHOLDER}
                                 alt="Avatar Tailwind CSS Component"/>
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{mediaChannel.name}</div>
                    </div>
                </div>
            </td>
            <td>
                {mediaChannel.owners.flatMap((e: Entity) => e.name)}
                <br/>
            </td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    )
}

/**
 *
 * @param props
 * @constructor
 */
function OrganizationCard(props: any) {
    const {organization} = props;
    return (
        <tr key={organization.id}>
            <td>
                <div className="flex-auto items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={IMG_PLACEHOLDER}
                                 alt="Avatar Tailwind CSS Component"/>
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{organization.name}</div>
                    </div>
                </div>
            </td>
            <td>
                {organization.investments.flatMap((i: Organization | MediaChannel) => i.name) }
                <br/>
            </td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    )
}

/**
 *
 * @param props
 * @constructor
 */
function ResultsList(props: any) {
    const {people, organizations, mediaChannels} = props;
    return (
        <div className="card flex bg-base-100 shadow-xl opacity-95">
            <div className="card-body">
                <div className="overflow-x-auto max-h-screen py-10">
                    <table className="table table-zebra overflow-y-auto overscroll-contain">
                        <tbody>
                        { organizations?.length > 0 &&
                            <tr>
                                <td className="text-xl">Organizations</td>
                            </tr>
                        }
                        { organizations?.map((org: Organization) => (
                            <OrganizationCard organization={org}/>
                        ))}
                        { mediaChannels?.length > 0 &&
                            <tr>
                                <td className="text-xl">Media Channels</td>
                            </tr>
                        }
                        { mediaChannels?.map((mc: MediaChannel) => (
                            <MediaCard mediaChannel={mc}/>
                        ))}
                        { people?.length > 0 &&
                            <tr>
                                <td className="text-xl">People</td>
                            </tr>
                        }
                        { people?.map((person: Person) => (
                            <PersonCard person={person}/>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

/**
 *
 * @constructor
 */
export default function Page() {
    const [searchText, setSearchText] = useState("");
    const [searchStatus, setSearchStatus] = useState(false);

    const debouncedSearchText = useDebounce(searchText, DEBOUNCE_DELAY);

    const [
        getFilteredPeople,
        {data},
    ] = useLazyQuery(PEOPLE_WHERE_QUERY);

    const searchPeople = (input: String) => {
        let filter: any = {};
        setSearchStatus(true);
        if (input !== "") {
            filter.name = input;
        }
        if (Object.keys(filter).length === 0) {
            setSearchStatus(false);
        }
        getFilteredPeople({
            variables: getNameStartsWithWhereClause(filter.name),
        });
    };

    useEffect(() => {
        if (debouncedSearchText) {
            searchPeople(searchText);
        }
    }, [debouncedSearchText]);

    const people = searchStatus && data ? data?.people ?? [] : [];
    const orgs = searchStatus && data ? data?.organizations ?? [] : [];
    const mediaChannels = searchStatus && data ? data?.mediaChannels ?? [] : []

    return (
        <div>
            <div className="hero min-h-screen bg-fixed" style={{backgroundImage: `url(${bg.src})`}}>
                <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content grid grid-flow-col grid-cols-3 gap-y-4">
                        <div className="px-12">
                            <Search searchText={searchText} setSearchText={setSearchText} />
                        </div>
                        { (orgs.length > 0 || people.length > 0 || mediaChannels.length > 0) &&
                            <div className="col-span-2">
                                <ResultsList people={people} organizations={orgs} mediaChannels={mediaChannels}/>
                            </div>
                        }
                </div>
            </div>
        </div>
    );
}
