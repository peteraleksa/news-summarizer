import { NYTimesApiTopStoriesDocument } from '../../models/ts/nytimes/NYTimesApiTopStoriesDocument';
import puppeteer from "puppeteer";

const apiKey = process.env.NYT_API_KEY;
const userAgentString = '--user-agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3312.0 Safari/537.36"';

/**
 *
 */
enum CONTACT_TYPES {
    EMAIL = 'Email',
    X = 'X',
    FB = 'Facebook',
    IG = 'Instagram',
    THREADS = 'Threads',
    WHATSAPP = 'WhatsApp',
    SIGNAL = 'Signal',
    LINKEDIN = 'LinkedIn'
}

/**
 *
 */
const SOCIAL_PLATFORMS = [
    CONTACT_TYPES.X.toString(),
    CONTACT_TYPES.FB.toString(),
    CONTACT_TYPES.IG.toString(),
    CONTACT_TYPES.THREADS.toString(),
    CONTACT_TYPES.WHATSAPP.toString(),
    CONTACT_TYPES.SIGNAL.toString(),
    CONTACT_TYPES.LINKEDIN.toString(),
]

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
            return {
                name: author.trim()
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

/**
 *
 * @param contactString
 */
export function getContact(contactString: string | null) {
    if (!contactString) return null;
    const splitContact = contactString?.split(':');
    return {
        channel: splitContact[0]?.trim(),
        account: splitContact[1]?.trim(),
    }
}

/**
 *
 * @param bylineTag
 */
export async function getNYTimesBylinePage(bylineTag: string): Promise<any> {
    const browser = await puppeteer.launch({ headless: true, args: [userAgentString] });
    const page = await browser.newPage();
    await page.goto(`https://www.nytimes.com/by/${bylineTag}`,{waitUntil: 'load', timeout: 90000});
    await page.waitForSelector('body', {timeout: 90000});
    const contacts = await page.$$eval('#contact ~ ul > li',
        (el) => el.map((e) => {
            if (!e) return null;
            const splitContact = e.textContent?.split(':') ?? [];
            return splitContact.length > 1 ? {
                channel: splitContact[0].trim(),
                account: splitContact[1].trim(),
            } : null
        }));
    const contactInfo = {
        'emails': contacts.filter((c) => c?.channel == CONTACT_TYPES.EMAIL.toString())
            ?.map(e => e?.account),
        'user_accounts': contacts.filter(c => SOCIAL_PLATFORMS.includes(c?.channel ?? ''))
    }
    // console.log(contactInfo);
    // console.log('closing browser...');
    await browser.close();
    return contactInfo;
}
