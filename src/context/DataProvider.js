import React, { createContext, useEffect, useState } from "react";

export const Datacontext = createContext();

export  const Dataprovider = (props) =>{
    const[productos, setPosts] = useState([])
    const[categories, setCats] = useState([])
    const[prodcategories, setPCats] = useState([])
    const[clothings, setCloth] = useState([])
    const[Electronics, setElec] = useState([])
    const[Miscelaneus, setMisc] = useState([])
    const[Groceries, setGros] = useState([])
    const[Skincare, setSkin] = useState([])
    const[Shoes, setShoe] = useState([])
    const[Watches, setWatch] = useState([])
    const[Vehicles, setVehicle] = useState([])

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
   fetch('https://joseph02mr-special-palm-tree-j9qq9gjrw7w3j5x-8000.preview.app.github.dev/api/v1/category/products/Accessories')
      .then((response) => response.json())
      .then((data) => {
         //console.log(data);
         setPCats(data);
      })
      .catch((err) => {
         console.log(err.message);
      });

},[])

useEffect(() => {
   fetch('https://joseph02mr-special-palm-tree-j9qq9gjrw7w3j5x-8000.preview.app.github.dev/api/v1/category/products/Clothing')
      .then((response) => response.json())
      .then((data) => {
         //console.log(data);
         setCloth(data);
      })
      .catch((err) => {
         console.log(err.message);
      });

},[])

useEffect(() => {
   fetch('https://joseph02mr-special-palm-tree-j9qq9gjrw7w3j5x-8000.preview.app.github.dev/api/v1/category/products/Electronics')
      .then((response) => response.json())
      .then((data) => {
         //console.log(data);
         setElec(data);
      })
      .catch((err) => {
         console.log(err.message);
      });

},[])

useEffect(() => {
   fetch('https://joseph02mr-special-palm-tree-j9qq9gjrw7w3j5x-8000.preview.app.github.dev/api/v1/category/products/Miscelaneus')
      .then((response) => response.json())
      .then((data) => {
         //console.log(data);
         setMisc(data);
      })
      .catch((err) => {
         console.log(err.message);
      });

},[])

useEffect(() => {
   fetch('https://joseph02mr-special-palm-tree-j9qq9gjrw7w3j5x-8000.preview.app.github.dev/api/v1/category/products/Skincare')
      .then((response) => response.json())
      .then((data) => {
         //console.log(data);
         setSkin(data);
      })
      .catch((err) => {
         console.log(err.message);
      });

},[])

useEffect(() => {
   fetch('https://joseph02mr-special-palm-tree-j9qq9gjrw7w3j5x-8000.preview.app.github.dev/api/v1/category/products/Groceries')
      .then((response) => response.json())
      .then((data) => {
         //console.log(data);
         setGros(data);
      })
      .catch((err) => {
         console.log(err.message);
      });

},[])

useEffect(() => {
   fetch('https://joseph02mr-special-palm-tree-j9qq9gjrw7w3j5x-8000.preview.app.github.dev/api/v1/category/products/Shoes')
      .then((response) => response.json())
      .then((data) => {
         //console.log(data);
         setShoe(data);
      })
      .catch((err) => {
         console.log(err.message);
      });

},[])

useEffect(() => {
   fetch('https://joseph02mr-special-palm-tree-j9qq9gjrw7w3j5x-8000.preview.app.github.dev/api/v1/category/products/Watches')
      .then((response) => response.json())
      .then((data) => {
         //console.log(data);
         setWatch(data);
      })
      .catch((err) => {
         console.log(err.message);
      });

},[])

useEffect(() => {
   fetch('https://joseph02mr-special-palm-tree-j9qq9gjrw7w3j5x-8000.preview.app.github.dev/api/v1/category/products/Vehicles')
      .then((response) => response.json())
      .then((data) => {
         //console.log(data);
         setVehicle(data);
      })
      .catch((err) => {
         console.log(err.message);
      });

},[])


    const value = {
      productos : [productos],
      categories : [categories],
      prodcategories : [prodcategories],
      clothings : [clothings],
      Electronics : [Electronics],
      Miscelaneus : [Miscelaneus],
      Skincare : [Skincare],
      Groceries : [Groceries],
      Shoes : [Shoes],
      Watches : [Watches],
      Vehicles : [Vehicles]
    }

    


    



    return (
      <Datacontext.Provider value={value}>
          {props.children}
       </Datacontext.Provider>
    )

 };
 
    
