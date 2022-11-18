import React, { createContext, useEffect, useState } from "react";

export const Datacontext = createContext();

export  const Dataprovider = (props) =>{
    const[productos, setPosts] = useState([])
    const[categories, setCats] = useState([])
    const[prodcategories, setPCats] = useState([])

    useEffect(() => {
        fetch('https://joseph02mr-special-palm-tree-j9qq9gjrw7w3j5x-8000.preview.app.github.dev/api/v1/products')
           .then((response) => response.json())
           .then((data) => {
              //console.log(data);
              setPosts(data);
           })
           .catch((err) => {
              console.log(err.message);
           });

    },[])

    useEffect(() => {
      fetch('https://joseph02mr-special-palm-tree-j9qq9gjrw7w3j5x-8000.preview.app.github.dev/api/v1/category')
         .then((response) => response.json())
         .then((data) => {
            //console.log(data);
            setCats(data);
         })
         .catch((err) => {
            console.log(err.message);
         });

  },[])

  useEffect(() => {
   fetch('https://joseph02mr-special-palm-tree-j9qq9gjrw7w3j5x-8000.preview.app.github.dev/api/v1/products/:category')
      .then((response) => response.json())
      .then((data) => {
         //console.log(data);
         setPCats(data);
      })
      .catch((err) => {
         console.log(err.message);
      });

},[])

    const value = {
      productos : [productos],
      categories : [categories],
      prodcategories : [prodcategories]
    }

    


    



    return (
      <Datacontext.Provider value={value}>
          {props.children}
       </Datacontext.Provider>
    )

 };
 
    
