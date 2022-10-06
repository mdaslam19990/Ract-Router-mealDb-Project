import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleMeal = () => {
    const singleMeal = useLoaderData()
    const { strMeal, strMealThumb, idMeal } = singleMeal.meals[0];
    return (
        <div>
            <h1>{idMeal}</h1>
            <h2>{strMeal}</h2>
            <img src={strMealThumb} alt="" />
        </div>
    );
};

export default SingleMeal;