import { NYTimesApiTopStoriesDocument } from '../../models/ts/nytimes/NYTimesApiTopStoriesDocument';

const apiKey = process.env.NYT_API_KEY;

/**
 *
 */
export async function getNYTimesTopStories(): Promise<Array<NYTimesApiTopStoriesDocument>> {
    let res = await fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apiKey}`);
    if (res.status === 401) throw new Error("Unauthorized request. Make sure api-key is set.");
    if (res.status === 429) throw new Error("Too many requests. You reached your per minute or per day rate limit.")
    if (res.status !== 200) throw new Error();
    let resJson = await res.json();
    return resJson.results as Array<NYTimesApiTopStoriesDocument>;
}

/**
 *
 * @param byline
 */
function _parseAuthorsFromNYTimesByline(byline: string) {
    return byline
        .replace('By ', '')
        .replace(' and ', ',')
        .replace(', ', ',')
        .split(',')
        .map((author) => {
            const nameParts = author.split(/\s/);
            const first_name = nameParts[0];
            const last_name = nameParts[nameParts.length-1]
            const middle_name = author
                .replace(first_name, '')
                .replace(last_name, '');
            return {
                first_name: first_name,
                middle_name: middle_name,
                last_name: last_name,
            };
        });
}

/**
 *
 * @param topStory
 */
export function mapNYTimesTopStoryToArticle(topStory: NYTimesApiTopStoriesDocument) {
    return  {
        abstract: topStory.abstract,
        author: _parseAuthorsFromNYTimesByline(topStory.byline),
        distribution: [],
        mentions: [],
        comments: [],
        retrieved_url: topStory.url,
        // summary?: Maybe<Scalars['String']['output']>;
        title: topStory.title
    };
}

/**
 *
 * @param url
 */
export async function getNYTimesArticleByUrl(url: string) {
    let res = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=${url}\\?api-key\\=${apiKey}`)
}
