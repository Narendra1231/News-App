import { useState,useEffect } from "react";
import NewsItems from "./NewsItems";

const NewsBoard=({category})=>{
    const [data,setData]=useState([]);
    useEffect(()=>{
        let url=`http://api.mediastack.com/v1/news?access_key=20bebec29849b72717b04ed21e98ba89&categories=${category}`;
        fetch(url).then(res=>res.json()).then(res=>setData(res.data));
    },[category]);
    return(
        <div>
            <h4 class="text-center">Latest <span class="badge text-bg-secondary">News</span> </h4>
            {data.map((news,index)=>{
                return <NewsItems key={index} detail={news}/>
                })}
        </div>
    );
}
export default NewsBoard;
/*let url=`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=7d5a1fcc406e41469ba7d238970f889c`;
             fetch(url).then(res=>res.json()).then(data=>setArticles(data.articles));
               {articles.map((news,index)=>{
                return <NewsItems key={index} title={news.title} description={news.description} scr={news.urlToImage} url={news.url}/>
                })}*/
               //title={news.title} description={news.description} src={news.image} url={news.url}