import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import RecipeList from './RecipeList';
import InputTag from './InputTag';

const SearchPage = (props) => {
  const [recipeListDefault, setRecipeListDefault] = useState();
  const [recipeList, setRecipeList] = useState();

  const fetchData = async () => {
    return await fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then(data => {
         setRecipeList(data)
         setRecipeListDefault(data)
       });}

  const updateTag = async (recipes) => {
    recipes = recipes.map(v => v.toLowerCase());
    console.log(recipes);
    const filtered = recipeListDefault.filter(recipe => {
      return recipes.includes(recipe.name.toLowerCase());
    })
    setRecipeList(filtered);
  }

  useEffect( () => {fetchData()},[]);

  return (
    <>
      <h1>Recipe List</h1>
      <InputTag onChange={updateTag}/>
      <RecipeList recipeList={recipeList}/>
    </>
   );
}

export default SearchPage
