import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RandomDrink = () => {
    const [randomDrink, setRandomDrink] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchRandomDrink = async () => {
        setLoading(true); // Set loading state to true
        try {
            const response = await axios.get(
                'https://www.thecocktaildb.com/api/json/v1/1/random.php'
                );
                setRandomDrink(response.data.drinks[0]);
        } catch (error) {
            console.error('Error fetching random drink:', error);
        }
    };

    if (!randomDrink) {
        return (
            <div>
                <button onClick={fetchRandomDrink}>Sauce me!</button>
            </div>
            );
        }

    const {
        strDrink,
        strDrinkThumb,
        strInstructions,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
        strMeasure1,
        strMeasure2,
        strMeasure3,
        strMeasure4,
        strMeasure5,
    } = randomDrink;

    return (
        <div>
            {strDrink && <h2>{strDrink}</h2>}
            {strDrinkThumb && <img src={strDrinkThumb} alt={strDrink} style={{ width: '200px' }} />}
            {strInstructions && <p>Instructions: {strInstructions}</p>}
            <h3>Ingredients:</h3>
            <ul>
                {strIngredient1 && (
                    <li>
                        {strMeasure1} {strIngredient1}
                    </li>
                )}
                {strIngredient2 && (
                    <li>
                        {strMeasure2} {strIngredient2}
                    </li>
                )}
                {strIngredient3 && (
                    <li>
                        {strMeasure3} {strIngredient3}
                    </li>
                )}
                {strIngredient4 && (
                    <li>
                        {strMeasure4} {strIngredient4}
                    </li>
                )}
                {strIngredient5 && (
                    <li>
                    {strMeasure5} {strIngredient5}
                    </li>
                )} 
            </ul>
        <button onClick={fetchRandomDrink}>Sauce me again!</button>
        </div>
  );
};

export default RandomDrink;