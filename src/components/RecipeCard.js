import React, { useState, useEffect } from 'react';

import db from "../config";

const RecipeCard = props => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  useEffect(() => {
    db.collection("recipes").onSnapshot(snapshot => {
      setTitle(snapshot.docs.map(doc => doc.data().title));
      setDescription(snapshot.docs.map(doc => doc.data().description));
    })
  },[]);

  return (
    <div className="card text-center">
      <div className="overflow">
        Image Area
      </div>
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary">{description}</p>
        <div className="ddd">
          <p>tags</p>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard
