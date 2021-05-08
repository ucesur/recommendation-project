import React, { useState, useEffect } from 'react';
import RecipeList from './RecipeList';
import InputTag from './InputTag';
import db from "../config";

const SearchPage = (props) => {
  const [recipeListDefault, setRecipeListDefault] = useState();
  const [recipeList, setRecipeList] = useState();

  const fetchData = async () => {
    db.collection("recipes").onSnapshot(snapshot => {
      const data = snapshot.docs.map(doc => doc.data())
      setRecipeListDefault(data)
    })
  }

  const updateRecipes = async (recipes) => {
    if (recipes.length === 0) {
      setRecipeList([]);
      return true;
    }
    recipes = recipes.map(v => v.toLowerCase());
    const filtered = recipeListDefault.filter(recipe => {
      for (var i = 0; i < recipes.length; i++) {
        if (recipe.title.toLowerCase().includes(recipes[i]))
        {
          return true
        }
      }
      return false
    })
    setRecipeList(filtered);
  }

  useEffect( () => {fetchData()},[]);

  return (
    <>
      <h1>Recipe List</h1>
      <InputTag onChange={updateRecipes}/>
      <RecipeList recipeList={recipeList}/>
    </>
   );
}

export default SearchPage
