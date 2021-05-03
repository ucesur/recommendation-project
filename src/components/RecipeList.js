import React, { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard';
import db from "../config";

const RecipeList = ({recipeList=[]}) => {

  const [recipess, setRecipes] = useState([]);

  useEffect(() => {
    db.collection("recipes").onSnapshot(snapshot => {
      setRecipes(snapshot.docs.map(doc => doc.data()))
    })
  },[])

  return (
    <div className="container-fluid d-flex">
      <div className="row">
      {
        recipess.map(recipe => {
            return (
              <div className="col-md-4">
              {console.log(recipe.title)}
                <RecipeCard title={recipe.title} description={recipe.description}/>
              </div>
            )
          })
      }
      </div>
    </div>

    /*recipeList.map((data,index) => {
      if (data) {
        <div key={data.name}>
          <h1>{data.name}</h1>
        </div>
      }
      return null
      })
    }*/
  );
}

export default RecipeList
