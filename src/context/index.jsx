import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favoriteList, setFavoriteList] = useState([]);

  function handleAddFavorites(getCurrentIndex) {
    console.log(getCurrentIndex);
    let copyFavoriteList = [...favoriteList];
    const index = copyFavoriteList.findIndex(
      (item) => item.id === getCurrentIndex.id
    );
    if (index === -1) {
      copyFavoriteList.push(getCurrentIndex);
    } else {
      copyFavoriteList.splice(index);
    }
    setFavoriteList(copyFavoriteList);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const responce = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );
      const data = await responce.json();
      console.log(data);
      if (data.data.recipes) {
        setRecipeList(data.data.recipes);
        setSearchParam("");
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setSearchParam("");
      setLoading(false);
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        favoriteList,
        searchParam,
        setSearchParam,
        handleSubmit,
        loading,
        recipeList,
        recipeDetailsData,
        setRecipeDetailsData,
        handleAddFavorites,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
