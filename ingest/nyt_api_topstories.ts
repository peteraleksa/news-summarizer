const apiKey = process.env.NYT_API_KEY;

async function getTopStories() {
    let res = await fetch(`https://api.nytimes.com/svc/topstories/v2/home.json\\?api-key\\=${apiKey}`);
    if (res.status === 401) throw new Error("Unauthorized request. Make sure api-key is set.");
    if (res.status === 429) throw new Error("Too many requests. You reached your per minute or per day rate limit.")
    if (res.status !== 200) throw new Error();
    let resJson = await res.json();
    return resJson.results;
}


export { getTopStories }
