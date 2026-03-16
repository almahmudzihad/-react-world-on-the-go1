import React, { use, useState } from 'react';
import Country from '../country/Country';
import './countries.css';

const Countries = ({countryPromis}) => {
    
    const countriesData = use(countryPromis);
    const countries = countriesData.countries;
    //total visited countries
    const [visitedCountry, setVisitedCountry] = useState([]);
    const handleVisitedCountries = (country) =>{
      
        const newVisitedCountry= [...visitedCountry, country];
        setVisitedCountry(newVisitedCountry);
    }
    
    return (
        <div>
            <h3>All countries : {countries.length}</h3>
            <p>Visited country: {visitedCountry.length}</p>
            <ul>
            {
                visitedCountry.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)
            }
            </ul>
            <div className='card-container'>   
                
            {
                countries.map(country => <Country country={country} key={country.cca3.cca3}
                handleVisitedCountries= {handleVisitedCountries}
                ></Country>)
            }
            </div>
            
            
        </div>
    );
};

export default Countries;