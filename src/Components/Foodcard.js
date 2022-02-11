import React, { useState } from "react";
import Ingredients from "./Ingredients";
import Button from "@material-ui/core/Button";

function Foodcard(props) {
  const { recipe } = props;
  console.log(recipe);

  const [open, setOpen] = useState(false);

  const handleClickToOpen = () => {
    setOpen(true);
  };

const ingredient = {
   
      fontSize: "10px",
      background: "none",
      border: "1px solid green",
      color: "green",
      height: "30px",
      width: "100%",
      borderRadius: "0",
      textTransform: "none",
      margin: "5px 0 5px 0"
  
}
  return (
    <div className="card">
      <img src={recipe.image} alt="..." />
      <div className="card-body">
        <h5 className="card-title">{recipe.label}</h5>
        <Button
          className="ingredient"
          variant="outlined"
          color="primary" style={ingredient}
          onClick={handleClickToOpen}
        >Ingredients
        </Button>
        <Ingredients open={open} setOpen={setOpen} recipe={recipe} />
        <a className="recipeUrl" href={recipe.url} className="btn btn-primary">
          See Complete Recipe
        </a>
      </div>
    </div>
  );
}

export default Foodcard;
