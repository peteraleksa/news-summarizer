import { ApolloClient, gql, HttpLink, InMemoryCache } from "@apollo/client/core";

import {scrapeNYTimesArticle, scrapeWikipediaArticle} from "../scrape";
import {getNYTimesBylinePage, getNYTimesTopStories, mapNYTimesTopStoryToArticle} from "../api/nytimes";

import {getWikipediaArticleHtml, parseBodyTextFromWikipediaArticleHtml} from "../api/wikipedia";
import {Person} from "../../models/ts/resolvers-types";

import { ModelMap } from "../../ogm-types";
import { PersonWhere, PersonUpdateInput } from "../../ogm-types";

// const Person = ogm.Model("Person");

// import fetch from "cross-fetch";
//

const MEDIA_CHANNEL_IDS: {[id:string]: string} = {
    X: "9570df17-b04d-4333-bb02-5a523e735472",
    Facebook: "2096802f-5063-4780-a09c-21e32e1e76b2",
    LinkedIn: "b1ab8e92-b66e-411b-9218-8f84a298a012",
    WhatsApp: "4f7dc944-af1d-4e29-bea3-38bf78029cc6",
    TikTok: "c4585bcc-967d-4762-a5d5-028d8b0ad801",
    Discord: "7e327249-c0c5-4604-9022-7a018b9a994e",
    Instagram: "1ca05976-9fac-41a3-bcf1-1b312ca17307",
    Threads: "741ecda8-f10b-4603-b3ec-86176a400eaf",
    Signal: "66bd5ebc-9429-447c-86b0-6b6cf7311424",
    Skype: "07adb9db-d448-44b1-8ee9-fedfa7b1fd04",
}

const NYTIMES_ORG_ID = "ab551038-9970-4bab-a1b3-a0e0b2cfb2b4";
const NYTIMES_AUTHORS_QUERY = {
    query: gql`query People($where: PersonWhere) {
        people(where: $where) {
            id
            name
        }
    }`,
    variables: {
        where: {
            employment: {
                id: NYTIMES_ORG_ID
            }
        }
    }
};
const UPDATE_PEOPLE_MUTATION = {
    mutation: gql`mutation UpdatePeople($where: PersonWhere, $update: PersonUpdateInput) {
        updatePeople(where: $where, update: $update) {
            people {
                id
                name
                emails
                user_accounts {
                    id
                    username
                    platform {
                        id
                        name
                        category
                    }
                }
            }
        }
    }`
}

const ts = await getNYTimesTopStories();
const articles = ts.map(mapNYTimesTopStoryToArticle);
// console.log(JSON.stringify(articles));

const authors = articles.flatMap((article) => {
    return article.author;
});

const uniqueAuthors = [...new Map(authors.map(v => [JSON.stringify(v), v])).values()]

const client = new ApolloClient({
    link: new HttpLink({ uri: process.env.GRAPHQL_URL, fetch }),
    cache: new InMemoryCache(),
});

let { data } = await client.query(NYTIMES_AUTHORS_QUERY);
const NYTimesAuthors = data?.people ? data.people : []
// console.log('logging NYTimesAuthors');
// console.log(NYTimesAuthors);

const authorsWithIds =  uniqueAuthors.map((item, row) => {
    const found = NYTimesAuthors.find((el: any) => item.name == el.name);
    console.log(found);
    return {
        ...item,
        id: found?.id ?? undefined,
    };
});
// console.log('logging authorsWithIds');
// console.log(JSON.stringify(authorsWithIds));

const people: any[] = await Promise.all(NYTimesAuthors.slice(25,50).map(async (p: any) => {
    const wiki_tag = p.name.replaceAll(' ', '_').replace('.', '');
    const byline_tag = p.name.toLowerCase().replaceAll(' ', '-');
    // const wikiHtml = await getWikipediaArticleHtml(wiki_tag);
    // const wikiText = parseBodyTextFromWikipediaArticleHtml(wikiHtml);
    const person = {
        id: p.id,
        name: p.name,
        wiki_tag: wiki_tag,
    }
    const contact = await getNYTimesBylinePage(byline_tag);
    const pp = {
        ...person,
        emails: contact.emails,
        user_accounts: contact.user_accounts,
    }
    // console.log(pp);
    return pp;
}));

function getUserAccountsSnippet(p: any) {
    return {
        connect: {
            create: {
                User: p.user_accounts.map((u: any) => {
                    let platform: string = u.platform;
                    return {
                        where: {
                            node: {
                                platform: {
                                    node: {
                                        name: u.platform
                                    }
                                }
                            }
                        },
                        onCreate: {
                            node: {
                                username: u.username
                            },
                            edge: {
                                weight: 1.0
                            }
                        }
                    }
                })
            }
        }
    }
}

function getUpdateInput(p: any) {
       //  let input: any = {
       //      update: {
       //         where: { id: p.id },
       //         update: {
       //             emails: p.emails
       //         }
       //     }
       // }
       // if (p.user_accounts) {
       //     input.update.update = {
       //         ...input.update.update,
       //         user_accounts: getUserAccountsSnippet(p),
       //     }
       // }
       // return input;

    let input: any =  {
        emails: p.emails,
        name: p.name,
        wiki_tag: p.wiki_tag,
    }


    if (p.user_accounts) {
        input = {
            ...input,
            user_accounts: p.user_accounts.map((u: any) => {
                console.log(u);
                let channel_id = MEDIA_CHANNEL_IDS[u.channel];
                console.log(`${u.channel}: ${channel_id}`);
                return {
                    connectOrCreate: [
                        {
                            where: {
                                node: {
                                    platform_user: `${u.channel}_${u.account}`
                                }
                            },
                            onCreate: {
                                node: {
                                    username: u.account,
                                    platform_user: `${u.channel}_${u.account}`,
                                    // platform: {
                                    //     connect: {
                                    //         node: {
                                    //             where: {
                                    //                 id: channel_id
                                    //             }
                                    //         },
                                    //         edge: { weight: 1.0 }
                                    //     }
                                    // }
                                },
                                edge: { weight: 1.0 }
                            }
                        }
                    ]
                }
            })
        }
    }
    return input;
}

const updates = people.filter((p) => p.id);
// const create = people.filter((p) => !(p.hasOwnProperty('id') && p.id));

console.log(updates);
if (updates) {
    const updateResponses = await Promise.all(
        updates
            .map(async (p: Person) => {
                const options = {
                    ...UPDATE_PEOPLE_MUTATION,
                    variables: {
                        where: {
                            id: p.id
                        },
                        update: getUpdateInput(p)
                    }
                };
                console.log(JSON.stringify(options));
                return await client.mutate(options);
            }));

    if (updateResponses.filter(r => r.errors)) {
        console.log(JSON.stringify(updateResponses.filter(r => r.errors)));
    }

    if (updateResponses.filter(r => r.data)) {
        console.log(JSON.stringify(updateResponses.filter(r => r.data)));
    }
} else {
    console.log('no updates')
}

// console.log('create array');
// console.log(JSON.stringify(create));
// if (create) {
//     const createResponse = await client.mutate({
//         mutation: gql`mutation CreatePeople($input: [PersonCreateInput!]!) {
//             createPeople(input: $input) {
//                 people {
//                     id
//                     name
//                     emails
//                     user_accounts {
//                         id
//                         username
//                         platform {
//                             id
//                             name
//                             category
//                         }
//                     }
//                 }
//             }
//         }`,
//         variables: {
//             input: create.map(p => {
//                 let input:any = {
//                     name: p.name,
//                     emails: p.emails,
//                     wiki_tag: p.wiki_tag,
//                     employment: {
//                         connect: {
//                             where: {
//                                 node: {
//                                     id: NYTIMES_ORG_ID
//                                 }
//                             }
//                         }
//                     }
//                 }
//                 if (p.user_accounts) {
//                     input = {
//                         ...input,
//                         user_accounts: getUserAccountsSnippet(p),
//                     }
//                 }
//                 return input;
//             })
//         }
//     });
//     console.log(JSON.stringify(createResponse));
// }

// async function getBylineHtml(byline: string) {
//     const response = await fetch (`https://nytimes.com/by/${byline}`, {
//         method: 'GET',
//     });
//     if (response.ok) {
//         return response;
//     }
//     return;
// }
//
