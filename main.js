let news = [];


const getLatestNews = async () => {
    let url = new URL(`https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=sport&page_size=7`);
    let header =new Headers({'x-api-key':'haPQVwWMWcu0JJsF83k7H9Jrgmz1PFZGiZbwXfBktYw'});
    let response = await fetch(url,{headers:header}); //ajax ,axios ,fetch 
    // async와 await은 세트!
    let data = await response.json();
    //json : 서버통신에서 많이 쓰이는 데이터 타입 , 객체랑 똑같은데 text타입 
    //api문서가 json
    news = data.articles;
    console.log(news);
    
    render();
};

const render = () =>{
    let newsHTML = '';
    newsHTML = news.map((item)=>{
        return` <div class="row news">
        <div class="col-lg-4">
            <img class = "news-img-size" src="${item.media}"/>
        </div>
        <div class="col-lg-8">
            <h2>${item.title}</h2>
            <p>${item.summary}</p>
            <div>${item.rights}*${item.published_date}</div>
        </div>
    </div>`;
    }).join('');

    console.log(newsHTML);
    document.getElementById("news-board").innerHTML=newsHTML;
}
getLatestNews();

// setTimeout 함수  : ( 함수 , 시간 )  1초 :1000


