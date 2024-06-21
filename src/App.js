import "./App.css";
import { Searchbar } from "./Searchbar";
import Header from "./Header";
import { useState } from "react";
import { RecipesList } from "./RecipesList";

function App() {
  const [recipes, setRecipes] = useState([]);

  return (
    <div className="App">
      <Header />
      <Searchbar setRecipes={setRecipes} />
      <RecipesList recipes={recipes} />
    </div>
  );
}

export default App;