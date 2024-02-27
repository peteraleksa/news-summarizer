import * as cheerio from 'cheerio';
import {Cheerio} from "cheerio";

const wikiHeaders = {
    'accept': 'text/html; charset=utf-8; profile="https://www.mediawiki.org/wiki/Specs/HTML/2.1.0',
    'User-Agent': 'Peter Aleksa/1.0 (peter.aleksa@gmail.com) bot"',
}
const wikipediaApiUrl = 'https://en.wikipedia.org/api/rest_v1/page/html/';

export async function getWikipediaCategoryLists(category: string) {
    const response = await fetch(`${wikipediaApiUrl}${category}`, {
        method: 'GET',
        headers: wikiHeaders,
    })
}

export async function getWikipediaArticleHtml(title: string) {
    const response = await fetch (`${wikipediaApiUrl}${title}`, {
       method: 'GET',
       headers: wikiHeaders,
    });
    if (response.ok) {
        return response.text();
    } else {
        throw new Error(`Request failed with status ${response.status}: ${response.statusText}`)
    }
}

export function parseBodyTextFromWikipediaArticleHtml(html: string) {
    const $ = cheerio.load(html);
    return $('section[data-mw-section-id] p')
        .map((i, s) => {
            return $(s).text();
        })
        .get()
        .join('\n');
}
