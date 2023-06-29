import React from "react";
const RecipeCard = ({ recipe }) => {
  return (
    <div className="flex items-center justify-center px-2">
      <div className="w-full max-w-md mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="max-w-md mx-auto">
          <div className="h-[236px]">
            <img
              src={recipe.image}
              alt={recipe.label}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-4 sm:p-6" style={{ height: "300px" }}>
            <p className="h-[35px] w-[350px] font-bold text-gray-700 text-[22px] leading-7 mb-1">
              {recipe.label}
            </p>
            <p className="font-bold text-[#7C7C80] font-[15px] mt-6">
              Description:
            </p>
            <ul>
              <li>Cuisine Type: {recipe.cuisineType}</li>
              <li>Diet Labels: {recipe.dietLabels}</li>
              <li>Dish Type: {recipe.dishType}</li>
              <li>Total Weight: {recipe.totalWeight.toFixed(2)}</li>
            </ul>
            <a
              target="_blank"
              href={recipe.url}
              className="block mt-10 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-[#FFC933] rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
            >
              View for Details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
