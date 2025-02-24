import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../context";

function Details() {
  const { id } = useParams();
  const {
    recipeDetailsData,
    setRecipeDetailsData,
    favoriteList,
    handleAddFavorites,
  } = useContext(GlobalContext);

  useEffect(() => {
    try {
      async function fetchData() {
        const response = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
        ); ///information?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}
        const data = await response.json();
        console.log(data);
        if (data.data) {
          setRecipeDetailsData(data.data);
        }
      }
      fetchData();
    } catch (e) {
      console.error("Error fetching recipe data:", e);
      return;
    }
  }, []);

  return (
    <div className="w-full container mx-auto py-10 px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white shadow-lg rounded-lg items-center justify-center mt-10">
      <div className="relative">
        <img
          src={recipeDetailsData?.recipe.image_url}
          alt={recipeDetailsData?.recipe.title}
          className="w-full h-90 object-cover rounded-lg shadow-md"
        />
      </div>
      <div className="flex flex-col justify-center space-y-5">
        {/* Recipe Title */}
        <h1 className="text-3xl font-bold text-gray-900">
          {recipeDetailsData?.recipe.title}
        </h1>

        {/* Publisher */}
        <p className="text-xl font-bold text-green-900">
          By{" "}
          <span className="font-bold text-green-900">
            {recipeDetailsData?.recipe.publisher}
          </span>
        </p>

        {/* Ingredients List */}
        <div>
          <p className="text-xl font-semibold text-blue-950">Ingredients:</p>
          <ul className="mt-3 space-y-2 text-gray-600 text-lg">
            {recipeDetailsData?.recipe.ingredients
              .slice(0, 6)
              .map((ingredient, index) => (
                <li key={index} className="flex items-center">
                  <span className="mr-2 text-green-500">✔</span>
                  {ingredient.description}
                </li>
              ))}
          </ul>
        </div>

        {/* Save to Favorites Button */}
        <button
          onClick={() => handleAddFavorites(recipeDetailsData?.recipe)}
          className="self-start bg-blue-950 text-white px-3 py-2 rounded-lg font-semibold shadow-md transition-transform transform hover:scale-105 hover:bg-green-700"
        >
          {favoriteList &&
          favoriteList.length > 0 &&
          favoriteList.findIndex(
            (item) => item.id === recipeDetailsData.recipe.id
          ) !== -1
            ? "Remove from Favorites 💖"
            : "Add to Favorites 💖"}
        </button>
      </div>
    </div>
  );
}

export default Details;
