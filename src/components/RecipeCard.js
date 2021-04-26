import React, { useState, useEffect } from 'react';
import firebase from "firebase/app";
import "firebase/database";
import {
  FirebaseDatabaseProvider,
  FirebaseDatabaseNode
} from "@react-firebase/database";
import { config } from "../config";

const RecipeCard = props => {
  const [limit, setLimit] = useState(1);
  const s = (a: any) => JSON.stringify(a, null, 2);
  return (
    <div>
      <FirebaseDatabaseProvider firebase={firebase} {...config}>
        <FirebaseDatabaseNode
          path="/"
          limitToFirst={limit}
          orderByKey
          // orderByValue={"created_on"}
        >
          {d => {
              return(
                <React.Fragment>
                  <pre>
                    <div className="card text-center">
                      <div className="overflow">
                        Image Area
                      </div>
                      <div className="card-body">
                        <h4 className="card-title">{s(d.value)}</h4>
                        <p className="card-text text-secondary">
                          Lorem Ipsum is simply dummy text of the printing and typesetting
                          industry.Lorem Ipsum has been the industry's standard dummy text ever
                          since the 1500s, when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.
                        </p>
                        <div className="ddd">
                          <p>tags</p>
                        </div>
                      </div>
                    </div>
                  </pre>
                </React.Fragment>
              );
            }
          }
        </FirebaseDatabaseNode>
      </FirebaseDatabaseProvider>
    </div>
  );
}

export default RecipeCard
