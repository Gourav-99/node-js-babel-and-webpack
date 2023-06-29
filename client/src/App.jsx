import React, { useEffect, useState } from "react";
// import Header from "./components/Header";
import Navbar from "./layout/Navbar";
import Search from "./components/Search";
import axios from "axios";
import RecipeCard from "./components/RecipeCard";
import Footer from "./layout/Footer";
const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isInitial, setInitial] = useState(true);
  const handleSearch = async (query) => {
    try {
      setLoading(true);

      const res = await axios.get(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=0f649da1&app_key=d5b958521400fe4cde168701a8e19cc1`
      );
      setRecipes(res.data.hits);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    handleSearch("pizza");
    setInitial(false);
  }, []);
  return (
    <div>
      <Navbar />
      {/* <Header /> */}
      <Search handleSearch={handleSearch} />
      {loading ? (
        <div className="loader-container fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black z-[100] opacity-80">
          <div className="loader bg-white p-5 rounded-full flex space-x-3">
            <div className="w-5 h-5 bg-gray-800 rounded-full animate-bounce"></div>
            <div className="w-5 h-5 bg-gray-800 rounded-full animate-bounce"></div>
            <div className="w-5 h-5 bg-gray-800 rounded-full animate-bounce"></div>
          </div>
        </div>
      ) : null}
      {isInitial || (recipes && recipes.length > 0) ? (
        <div className="recipes-list flex flex-wrap items-center justify-evenly py-[5rem] gap-6">
          {recipes.map(({ recipe }, index) => {
            return <RecipeCard recipe={recipe} key={index} />;
          })}
        </div>
      ) : null}
      <Footer />
    </div>
  );
};

export default App;
