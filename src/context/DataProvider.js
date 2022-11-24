import React, { createContext, useEffect, useState } from "react";

export const Datacontext = createContext();

export  const Dataprovider = (props) =>{
    const[productos, setPosts] = useState([])
    const[categories, setCats] = useState([])

    useEffect(() => {
        fetch('https://jorgealvarez-itc-friendly-space-umbrella-rx5xvq9vp95hw5pj-8000.preview.app.github.dev/api/v1/products')
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
      fetch('https://jorgealvarez-itc-friendly-space-umbrella-rx5xvq9vp95hw5pj-8000.preview.app.github.dev/api/v1/products/categoria')
         .then((response) => response.json())
         .then((data) => {
            //console.log(data);
            setCats(data);
         })
         .catch((err) => {
            console.log(err.message);
         });

  },[])

    const value = {
      productos : [productos],
      categories : [categories]
    }

    


    



    return (
      <Datacontext.Provider value={value}>
          {props.children}
       </Datacontext.Provider>
    )

 };
 
    
