import React from 'react';
import NewsList from './NewsList';

const News = () => {
  return (
    <section>
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
            <NewsList />
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
