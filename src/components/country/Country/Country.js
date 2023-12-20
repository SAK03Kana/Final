import React from 'react';
import './Country.css'
const Country = props => {
    //destructuring
    const { region, population, name, flags } = props.country;
    return (
        <div className='country'>
            <h2>Name: {name.common}</h2>
            <img src={flags.png} alt="" />
            <h4>Population: {population}</h4>
            <p>Region: {region}</p>
        </div>
    );
};

export default Country;