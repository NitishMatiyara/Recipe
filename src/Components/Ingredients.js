import React from 'react'
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";

const Ingredients = (props) => {
   const {open, setOpen, recipe} = props

    const handleToClose = () => {
        setOpen(false);
      };

       

    return (
        <div stlye={{}}>
          <Dialog open={open} onClose={handleToClose}>
            <DialogTitle>Ingredients</DialogTitle>
            <DialogContent>
              <DialogContentText>
              <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Ingredient</th>
      <th scope="col">Weight (gm)</th>
    </tr>
  </thead>
  <tbody>
      {recipe.ingredients.map((ingredientObj)=>
      <tr>
      <td>{ingredientObj.text}</td>
      <td>{ingredientObj.weight}</td>
    </tr>
    )}
    </tbody>
</table>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleToClose} 
                      color="primary" autoFocus>
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
}

export default Ingredients