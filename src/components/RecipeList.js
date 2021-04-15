import React from 'react';
import Recipe from './Recipe';

const RecipeList = ({recipeList=[]}) => {
  return (
    <>
    <Recipe/>
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
