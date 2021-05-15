import React, { useState, useEffect } from 'react';
import RecipeList from './RecipeList';
import InputTag from './InputTag';
import db from "../config";

const SearchPage = (props) => {
  const [recipeListDefault, setRecipeListDefault] = useState();
  const [recipeList, setRecipeList] = useState();

  const fetchData = async () => {
    db.collection("recipes").get()
      .then(response => {
        const fetchedRecipes = []
        response.docs.forEach(document => {

          const fetchedTags = [];
          db.collection("recipes").doc(document.id).collection('tags').get()
            .then(response2 => {
              response2.forEach(document2 => {
                const fetchedtag = {
                  ...document2.data()
                };
                fetchedTags.push(fetchedtag);
              })
            })

          const fetchedRecipe = {
              id: document.id,
              title: document.title,
              description: document.description,
              tags:fetchedTags,
              ...document.data()
            }
            fetchedRecipes.push(fetchedRecipe);
        })
        setRecipeListDefault(fetchedRecipes)
      })
/*    db.collection("recipes").onSnapshot(snapshot => {
      const data = snapshot.docs.map(doc => doc.data())
      setRecipeListDefault(data)
    })*/
  }

  const updateRecipesByTitle = async (recipes) => {
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

  const updateRecipesByTag = async (recipes) => {
    if (recipes.length === 0) {
      setRecipeList([]);
      return true;
    }
    recipes = recipes.map(v => v.toLowerCase());
    const filtered = recipeListDefault.filter(recipe => {
      for (var i = 0; i < recipes.length; i++) {
        for (var j = 0; j < recipe.tags.length; j++) {
          if (recipe.tags[j].name === recipes[i]) {
            return true
          }
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
      <InputTag onChange={updateRecipesByTag}/>
      <RecipeList recipeList={recipeList}/>
    </>
   );
}

export default SearchPage
