import React from 'react';
import Tag from './Tag'

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
          {
            props.tags.map(tag => (
                <Tag text={tag.name} basic={true}/>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default RecipeCard
