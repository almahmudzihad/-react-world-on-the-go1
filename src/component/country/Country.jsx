import React, { useState } from 'react';
import './country.css'

const Country = ({country, handleVisitedCountries}) => {
    const [visited, setVisited] = useState(false);
    const handalclick = () =>{
        //1
        // if(visited){
        //     setVisited(false)
        // }else{
        //     setVisited(true)
        // }

        //2
        //setVisited(visited? false:true)/

        //3
        setVisited(!visited);
        handleVisitedCountries(country)
    }
    
    return (
        <div className={`card ${visited && 'card-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name : {country.name.common}</h3>
            <p>Population : {country.population.population}</p>
            <p>Capital : {country.capital.capital}</p>
            <p>Area: {country.area.area} {country.area.area > 300000? 'Big Country':'Small Country'}</p>
            <button onClick={handalclick} className='btn'>
                {visited? 'visited': 'Not visited'}
            </button>
        </div>
    );
};

export default Country;