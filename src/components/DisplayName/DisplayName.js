import React from 'react';
import './DisplayName.css';

const DisplayName = (props) => {
    return (
        <div>
            <h2>Name</h2>
            <p className='name'><b>{props.mealName}</b></p>

        </div >
    );
};

export default DisplayName;