import React from 'react';

const NewsItem = () => {
  return (
    <div className="col-md-6">
      <div className="card mb-4 box-shadow">
        <img
          className="card-img-top"
          src="https://placehold.co/160X80"
          alt="Card image cap"
        />
        <div className="card-body">
          <h4>title</h4>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
