import { useContext } from "react";
import { GlobalContext } from "../context";
import RecipeItem from "../components/RecipeItem";
function Favorite() {
  const { favoriteList } = useContext(GlobalContext);

  return (
    <div className="w-full mx-auto p-4">
      {favoriteList && favoriteList.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {favoriteList.map((item, index) => (
            <RecipeItem item={item} key={index} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center h-64 bg-gray-100 text-gray-600 rounded-lg shadow-md">
          <p className="text-2xl text-gray-500 italic flex items-center font-bold lg:text-4xl">
            <span className="mr-2 text-red-500">⚠️</span> Nothing is added to
            favorites.
          </p>
        </div>
      )}
    </div>
  );
}

export default Favorite;
