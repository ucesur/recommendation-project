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
      setRecipeList(data)
      setRecipeListDefault(data)
    })
  }

  const updateRecipes = async (recipes) => {
    if (recipes.length === 0) {
      setRecipeList(recipeListDefault);
      return true;
    }
    recipes = recipes.map(v => v.toLowerCase());
    const filtered = recipeListDefault.filter(recipe => {
      return recipes.includes(recipe.title.toLowerCase());
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
