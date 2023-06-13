let news = [];


const getLatestNews = async () => {
    let url = new URL(
        `https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=sport&page_size=10`
    );
    let header =new Headers({
        "x-api-key":"haPQVwWMWcu0JJsF83k7H9Jrgmz1PFZGiZbwXfBktYw",
    });
    
    let response = await fetch(url,{headers:header}); //ajax ,axios ,fetch 
    // async와 await은 세트!
    let data = await response.json();
    //json : 서버통신에서 많이 쓰이는 데이터 타입 , 객체랑 똑같은데 text타입 
    //api문서가 json
    news = data.articles;
    console.log(news);
    
};
getLatestNews();

// setTimeout 함수  : ( 함수 , 시간 )  1초 :1000


