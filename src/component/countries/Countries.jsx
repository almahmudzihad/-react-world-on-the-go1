import React, { use, useState } from 'react';
import Country from '../country/Country';

const Countries = ({countryPromis}) => {
    
    const countriesData = use(countryPromis);
    const countries = countriesData.countries;
    
    return (
        <div>
            <h3>All countries : {countries.length}</h3>
            
            {
                countries.map(country => <Country country={country} key={country.cca3.cca3}></Country>)
            }
            
        </div>
    );
};

export default Countries;