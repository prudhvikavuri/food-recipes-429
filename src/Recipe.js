import React from 'react';
import style from './recipe.module.css';


const Recipe = ({title,calories,image, timeTaken, weight, url, ingredients}) => {
return(
    <div className ={style.recipe}>
        <h1>{title}</h1>
        <a href={url} target="_blank" rel="noopener noreferrer">
        <img src={image} alt="" className={style.image}/>
        <p>Recipe!</p>
        </a>
        <ul>
            {ingredients.map(ingredient =>(
                <li key={Math.random()}>{ingredient.text} - {ingredient.weight.toFixed(2)} gms</li>
            ))}
        </ul>
        <p>Calories : {calories}</p>
        <p>Time taken : {timeTaken} min(s)</p>
        <p>Weight : {weight.toFixed(2)} gms</p>
    </div>
);
};

export default Recipe;