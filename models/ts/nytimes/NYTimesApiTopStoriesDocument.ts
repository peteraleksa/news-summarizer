export interface NYTimesApiTopStoriesDocument {
	section: string;
	subsection?: null | undefined | string;
	title: string;
	abstract?: null | undefined | string;
	url: string;
	uri?: null | undefined | string;
	byline: string;
	item_type: string;
	updated_date: string;
	created_date: string;
	published_date: string;
	material_type_facet: string;
	kicker: string;
	des_facet: string[];
	org_facet: string[];
	per_facet: string[];
	geo_facet: string[];
	multimedia: { [index:string]:string }[];
	short_url?: null | undefined | string;
}
