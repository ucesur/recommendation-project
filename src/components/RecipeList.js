import React from 'react';
import Recipe from './Recipe';

const RecipeList = ({recipeList=[]}) => {
  return (
    <>
    <div className="container-fluid d-flex">
      <div className="row">
        <div className="col-md-4">
          <Recipe/>
        </div>
        <div className="col-md-4">
          <Recipe/>
        </div>
        <div className="col-md-4">
          <Recipe/>
        </div>
        <div className="col-md-4">
          <Recipe/>
        </div>
      </div>
    </div>
    {
      recipeList.map((data,index) => {
        if (data) {
          return (
            <div key={data.name}>
              <h1>{data.name}</h1>
            </div>
  	       )
        }
        return null
      }
      )
    }
    </>
  );
}

export default RecipeList
