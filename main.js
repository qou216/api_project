const getLatestNews = () => {
    let url = new URL(`https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=sport&page_size=2`);
    let header =new Headers({'x-api-key':'haPQVwWMWcu0JJsF83k7H9Jrgmz1PFZGiZbwXfBktYw'});
    let response =fetch(url,{headers:header});
};
getLatestNews();