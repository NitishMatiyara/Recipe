import React, { useState, useEffect } from "react";
import "./App.css";
import Foodcard from "./Components/Foodcard";

function App() {
  const [food, setFood] = useState("");
  const [recipe, setRecipe] = useState([]);

  function apiGet() {
    fetch(`https://api.edamam.com/search?q=${food}&app_id=44d2a0c6&app_key=f43f9ca8331ee0a958444f39a5a59b4c`)
      .then((response) => response.json())
      .then((data) => setRecipe(data.hits))
      .catch((err) => {
        console.log(err.message);
      });
  }

  const Placeholder=()=>{
    return <div>
      <img style={{opacity:"0.3"}} src="images/bg.jpg"/>
    </div> 
  }
    
     
  
  // useEffect(() => {
  //   apiGet()
  // }, []);

  return (
    <div>
      <div className="head">
      <img className="logo" src="images/foodie.png" alt="" />
      <nav className="navbar navbar-light" >
      <div className="container-fluid">
          <a className="navbar-brand">Find Recipe</a>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
            
              onChange={(e) => setFood(e.target.value)}
              value={food}
            />
            <button
              className="btn btn-outline-success"
              type="button"
              onClick={apiGet}
            >
              Search
            </button>
          </form>
        </div>
      </nav>
      </div>
       <div className="container">
         {recipe.length ? 
         recipe.map( (recipeObj) => (
         
         <Foodcard recipe= {recipeObj.recipe}/>
          )): <Placeholder />}
        
        </div>
    </div>
  );
}

export default App;
