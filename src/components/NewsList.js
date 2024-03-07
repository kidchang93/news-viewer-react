import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import axios from '../../node_modules/axios/index';

const NewsList = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const query = category == 'all' ? '' : '&category=' + category;
      const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=kr&apiKey=0a533ac5123b410a94df7609ceb74ffb' +
          query,
      );
      setArticles(response.data.articles);
      setLoading(false);
    };
    fetchData();
  }, [category]);
  if (loading) {
    return <>대기중...</>;
  }
  if (!articles) {
    return null;
  }
  return (
    <>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </>
  );
};

export default NewsList;
