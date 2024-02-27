import { ApolloClient, gql, HttpLink, InMemoryCache } from "@apollo/client";

import {scrapeNYTimesArticle, scrapeWikipediaArticle} from "../scrape";
import {getNYTimesTopStories, mapNYTimesTopStoryToArticle} from "../api/nytimes";

import {getWikipediaArticleHtml, parseBodyTextFromWikipediaArticleHtml} from "../api/wikipedia";

// import fetch from "cross-fetch";
//
// const ts = await getNYTimesTopStories();
// const articles = ts.map(mapNYTimesTopStoryToArticle);
// console.log(JSON.stringify(articles));
// // console.log(ts);
//
// const client = new ApolloClient({
//     link: new HttpLink({ uri: process.env.PRODUCTION_GRAPHQL_URL, fetch }),
//     cache: new InMemoryCache(),
// });

// client.mutate<InsertJob.AddCompany, InsertJob.Variables>({
//     mutation: gql`mutation insertJob($companyName: String!) {
//         addCompany(input: { displayName: $companyName } ) {
//             id
//         }
//     }`,
//     variables: {
//         companyName: "aaa"
//     }
// })
// .then(result => console.log(result));

// scrapeNYTimesArticle('https://www.nytimes.com/2024/02/13/technology/openai-gives-chatgpt-a-better-memory.html');

const articleHtml = await getWikipediaArticleHtml('Ian_Curtis');
const bodyText = parseBodyTextFromWikipediaArticleHtml(articleHtml);
console.log(bodyText);
