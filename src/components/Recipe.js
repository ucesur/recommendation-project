import React from 'react';

const Recipe = props => {
  return (
    <div className="card text-center">
      <div className="overflow">
        Image Area
      </div>
      <div className="card-body">
        <h4 className="card-title">Title</h4>
        <p className="card-text text-secondary">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div className="">
          <p>tags</p>
        </div>
      </div>
    </div>
  );
}

export default Recipe
