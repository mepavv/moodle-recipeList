import { TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState, useEffect, useCallback } from "react";

export const Searchbar = ({ setRecipes }) => {
  const [query, setQuery] = useState("Noodle");

  const fetchRecipes = useCallback(async () => {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2/?q=${query}&app_id=cb53e553&app_key=9fbe1651f2d159d155842398863f3763&type=public`
    );

    const data = await response.json();
    setRecipes(data.hits);
  }, [query, setRecipes]);

  useEffect(() => {
    fetchRecipes();
  }, [fetchRecipes]);

  function handleChange(event) {
    setQuery(event.target.value);
  }

  return (
    <TextField
      label=""
      value={query}
      onChange={handleChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={fetchRecipes}>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
      fullWidth
    />
  );
};