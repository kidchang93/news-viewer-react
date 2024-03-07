import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import axios from '../../node_modules/axios/index';

const NewsList = () => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=kr&apiKey=0a533ac5123b410a94df7609ceb74ffb',
      );
      setArticles(response.data.articles);
      setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <>
      <NewsItem />
    </>
  );
};

export default NewsList;
