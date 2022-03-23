import React, { useEffect, useState } from 'react';
import DisplayMeal from '../DisplayMeal/DisplayMeal';
import DisplayName from '../DisplayName/DisplayName';
import './Meal.css';

const Meal = () => {
    const [meals, setMeals] = useState([]);
    const [mealName, setMealName] = useState([]);
    const [searchText, setSearchText] = useState([]);
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=a`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, []);
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchText}`)
            .then(res => res.json())
            .then(data => setMeals(data.meals));
    }, [searchText]);
    // console.log(meals);
    const handleNameButton = name => {
        setMealName(name);
    };
    const handleSearch = event => {
        const matchedText = event.target.value;
        setSearchText(matchedText);
        console.log(matchedText);
    };
    return (
        <>
            <h2 className='search'><input onChange={handleSearch} type="text" placeholder='Search' /></h2>

            <div className='meal'>
                <div>

                    {
                        meals.map(meal => <DisplayMeal
                            key={meal.idMeal}
                            meal={meal}
                            handleNameButton={handleNameButton}
                        ></DisplayMeal>)
                    }

                </div>
                <div>
                    <DisplayName mealName={mealName}></DisplayName>
                </div>
            </div>
        </>
    );
};

export default Meal;