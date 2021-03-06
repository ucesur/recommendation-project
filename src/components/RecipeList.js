import React from 'react';
import RecipeCard from './RecipeCard';

const RecipeList = ({recipeList=[]}) => {

  return (
    <div className="container-fluid d-flex">
      <div className="row">
      {
        recipeList.map(recipe => {
            return (
              <div className="col-md-4">
                <RecipeCard title={recipe.title} description={recipe.description}
                            tags={recipe.tags}/>
              </div>
            )
          })
      }
      </div>
    </div>
  );
}

export default RecipeList
