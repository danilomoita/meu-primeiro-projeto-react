import React, { useEffect, useState } from "react";


import "./styles/App.css";
import {Navbar} from "./components/Navbar/Navbar";
import { Article } from "./components/Article/Article";
import { Audio } from 'react-loader-spinner'


/*immport { } from 'react-loader-spinner'port article1Img from './assets/images/article-1.png'
import article2Img from './assets/images/article-2.png'
import article3Img from './assets/images/article-3.jpg'*/
import axios from "axios";
/*import { Counter } from "./components/Counter/Counter";*/






//componente em classe é uma classe que herda a classe component do React e retorna html dentro do método render

function App () {

  const [news, setNews] = useState ([])

  useEffect(() =>{
    async function loadNews(){
      const response = await axios.get ('https://api.spaceflightnewsapi.net/v3/articles');
      const newsData = response.data;

      
      setNews(newsData);
    }

    loadNews();

  }, [])
  //método responsável por renderizar o conteúdo html do nosso componente
  
  return (
    <>
      {/*<Counter/>*/}
        
      <Navbar/>
        
      

       

      <section id="articles">
        {news.length === 0 ? (
          <div style={{height: '400px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Audio 
              height="80"
              width="80"
              radius="9"
              color="white"
              ariaLabel="loading"
              wrapperStyle
              wrapperClass
            />


          </div>


        ) : (
          news.map((article)=>{
            return(
              <Article 
                key={article.id}
                title={article.title}
                provider={article.newsSite}
                description={article.summary}
                thumbnail={article.imageUrl}
              />
            );
          })
        )}

      </section>

        
      
    </>
  
  
    );
    
}

export default App;
