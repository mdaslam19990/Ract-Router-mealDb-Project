import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import SingleMeal from '../SingleMeal/SingleMeal';
import "./Meal.css";

const Meal = () => {
    const Allmeal = useLoaderData()
    return (
        <div>
            <h3>Meal Db Project</h3>
            <div className='singleMeal'>
            {
                Allmeal.meals.map(meal =>  {
                    return <div key={meal.idMeal}>
                        <h2>{meal.strMeal}</h2>
                        <img src={meal.strMealThumb} alt="" />
                        <Link to={`/meal/${meal.idMeal}`}>Show More</Link>
                    </div>
                }) 
            }
            </div>
        </div>
    );
};

export default Meal;