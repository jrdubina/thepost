import { useState, useEffect } from "react";
import { getArticle } from "../api/article";
import Header from '../components/header';
import Copy from '../components/text';

/**
 * Index Page
 * @returns
 */
function IndexPage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticle().then(res => setArticles(res));
  }, []);

  return (
    <>
      {
        articles?.map(item => {
          console.log(item)
          switch(item?.type) {
            case 'header': 
              return <Header key={item._id} content={item.content} level={item.level} />;
            case 'text':
              return  <Copy key={item._id} content={item.content} />;
            default: break;
          }
        })
      }
    </>
  );
}

export default IndexPage;
