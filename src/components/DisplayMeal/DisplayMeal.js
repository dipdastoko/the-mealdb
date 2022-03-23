import React from 'react';
import './DisplayMeal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
const DisplayMeal = (props) => {
    const { strMeal, strMealThumb, strCategory, strArea } = props.meal;
    return (
        <div className='displayMeal'>
            <h4>Category: {strCategory}</h4>
            <p><b>Origin:</b> {strArea}</p>
            <img src={strMealThumb} alt="" />
            <br />
            <button className='btn' onClick={() => props.handleNameButton(strMeal)}><FontAwesomeIcon icon={faThumbsUp} /> Click to See The Name</button>
        </div>
    );
};

export default DisplayMeal;