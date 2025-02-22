import { Link } from "react-router-dom";
function RecipeItem({ item }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-3 bg-white shadow-lg rounded-2xl overflow-hidden p-4 md:p-6 max-w-5xl mx-auto">
      {/* Image Section */}
      <div className="w-full">
        <img
          src={item.image_url}
          alt={item.title}
          className="w-full h-48 object-cover rounded-lg"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-center">
        <span className="text-sm text-gray-500">{item.publisher}</span>
        <h2 className="text-lg md:text-xl font-semibold text-gray-800 mt-1">
          {item.title}
        </h2>
        <Link
          to={`/recipe-item/${item.id}`}
          className="mt-3 inline-block text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm transition"
        >
          Recipe Details
        </Link>
      </div>
    </div>
  );
}

export default RecipeItem;
