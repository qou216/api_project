let news = [];
let menu = document.querySelectorAll(".menu button");
menu.forEach(menu=> menu.addEventListener("click", (event)=>getNewByTopic(event)));

let searchButton = document.getElementById("search-button");
let url;

const getNews = async () => {
    let header =new Headers({
        "x-api-key":"-IX-U250Iafi6A_Dp0O9O7mN6wexFxlmFjLtvZRyp0M"
    });
    let response = await fetch(url,{headers:header}); 
    let data = await response.json();
    news = data.articles;
    render();
};

const getLatestNews = async () => {
    url = new URL(
        `https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=sport&page_size=10`
    );
    getNews();
};

const getNewByTopic = async (event) =>{
    console.log("클릭", event.target.textContent);
    let topic = event.target.textContent.toLowerCase();
    url =new URL(`https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&page_size=10&topic=${topic}`);
    console.log("url", url);
    getNews();
};

const getNewByKeyword = async () => {
    let keyword =document.getElementById("search-input").value;
    url = new URL(`https://api.newscatcherapi.com/v2/search?q=${keyword}&page_size=10`
    );
    getNews();
};

const render = () =>{
    let newsHTML = "";
    newsHTML = news.map((item)=>{
        return` <div class="row news">
        <div class="col-lg-4">
            <img class = "news-img-size" src="${item.media}"/>
        </div>
        <div class="col-lg-8">
            <h2>${item.title}</h2>
            <p>
            ${item.summary}
            </p>
            <div>
            ${item.rights} * ${item.published_date}
            </div>
        </div>
    </div>`;
    }).join('');

    console.log(newsHTML);
    document.getElementById("news-board").innerHTML=newsHTML;
}
searchButton.addEventListener("click",getNewByKeyword);
getLatestNews();

// setTimeout 함수  : ( 함수 , 시간 )  1초 :1000


