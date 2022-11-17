import React, { createContext, useEffect, useState } from "react";

export const Datacontext = createContext();

export  const Dataprovider = (props) =>{
    const[productos, setPosts] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/v1/products')
           .then((response) => response.json())
           .then((data) => {
              //console.log(data);
              setPosts(data);
           })
           .catch((err) => {
              console.log(err.message);
           });

    },[])

    const value = {
      productos : [productos]
    }

    return (
      <Datacontext.Provider value = {value}>
         {props.children}
      </Datacontext.Provider>
    )

   /*return (
    <div className="posts-container">
       {productos.map((product) => {
          return (
             <div className="post-card" key={product.id}>
                <h2>{product.title}</h2>
             </div>
          );
       })}
    </div>
    );*/
 };
 
    
