import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../context";

function Details() {
  const { id } = useParams();
  const { recipeDetailsData, setRecipeDetailsData, handleAddFavorites } =
    useContext(GlobalContext);

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
    <div className="container mx-auto py-10 px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white shadow-lg rounded-lg items-center justify-center mt-10">
      <div className="relative">
        <img
          src={recipeDetailsData?.recipe.image_url}
          alt={recipeDetailsData?.recipe.title}
          className="w-full h-80 object-cover rounded-lg shadow-md"
        />
      </div>
      <div className="flex flex-col justify-center space-y-5">
        {/* Recipe Title */}
        <h1 className="text-3xl font-bold text-gray-900">
          {recipeDetailsData?.recipe.title}
        </h1>

        {/* Publisher */}
        <p className="text-lg text-gray-600 font-medium">
          By{" "}
          <span className="font-semibold text-gray-800">
            {recipeDetailsData?.recipe.publisher}
          </span>
        </p>

        {/* Ingredients List */}
        <div>
          <p className="text-xl font-semibold text-gray-700">Ingredients:</p>
          <ul className="mt-3 space-y-2 text-gray-600 text-lg">
            {recipeDetailsData?.recipe.ingredients.map((ingredient, index) => (
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
          className="self-start bg-green-600 text-white px-5 py-2 rounded-lg font-semibold shadow-md transition-transform transform hover:scale-105 hover:bg-green-700"
        >
          Save as Favorite ❤️
        </button>
      </div>
    </div>
  );
}

export default Details;
