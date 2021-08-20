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
          return (
            <>
              {
                item?.type === 'header' &&
                  <Header key={item._id} content={item.content} level={item.level} />
              }
              {
                item?.type === 'text' &&
                  <Copy key={item._id} content={item.content} />
              }
            </>

          )
        })
      }
    </>
  );
}

export default IndexPage;
