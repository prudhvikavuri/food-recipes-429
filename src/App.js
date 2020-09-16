import React,{useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';


const App = () => {

   const APP_ID ="6a90baa7";
   const APP_KEY ="3ffc38ca12927550260cccaabd037c61";

   const [recipes, setRecipes] = useState([]);
   const [search, setSearch] = useState("");
   const [query, setQuery] = useState('chicken');

  //if you leave the second parameter as [] - effect only happens on page refresh
  useEffect(() => {
    const getRecipes = async () => {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
      const data = await response.json();
      setRecipes(data.hits);
      console.log(data.hits);
      }
      getRecipes();
  }, [query]);


    const updateSearch = e => {
      setSearch(e.target.value);
      console.log(search);
    }
    const getSearch = e =>{
      //below prevents page refresh
      e.preventDefault();
      setQuery(search);
      setSearch("");
    }

  return(
    <div className="App">
      <form onSubmit ={getSearch} className="search-form">
        <input className ="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className = "recipes">      
        {recipes.map(recipe =>(
        <Recipe 
        key={Math.random()}
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        timeTaken={recipe.recipe.totalTime}
        weight={recipe.recipe.totalWeight}
        url={recipe.recipe.url}
        ingredients ={recipe.recipe.ingredients}
        />
      ))}</div>
    </div>
  )
}

export default App;
