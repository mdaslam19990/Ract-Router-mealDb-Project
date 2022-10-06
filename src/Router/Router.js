import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import Error from "../components/Error/Error";
import Home from "../components/Home/Home";
import Main from "../components/Main/Main";
import Meal from "../components/Meal/Meal";
import SingleMeal from "../components/SingleMeal/SingleMeal";
import Tutorial from "../components/Tutorial/Tutorial";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>, 
        children:  [
            {
                path: "home",
                element: <Home/>
            },
            {
                path: "meal",
                loader: async () => {
                    return fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=a")
                },
                element: <Meal/>,
            },
            {
                path: "about",
                element: <About/>
            },
            {
                path: "tutorial",
                element: <Tutorial/>
            },
            {
                path: "meal/:mealId",
                loader: async ({params}) => {
                    return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealId}`)
                },
                element: <SingleMeal/>
            }
        ]
    },
    {
        path: "*",
        element: <Error/>
    }
])