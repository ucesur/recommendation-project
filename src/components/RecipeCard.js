import React from 'react';

const RecipeCard = props => {

  return (
    <div className="card text-center">
      <div className="overflow">
        Image Area
      </div>
      <div className="card-body">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text text-secondary">{props.description}</p>
        <div className="ddd">
          <p>tags</p>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard
