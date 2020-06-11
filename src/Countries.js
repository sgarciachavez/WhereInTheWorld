import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Countries extends Component{
  render(){
    let countries = this.props.countries
    let display;
    if(countries.length > 0){
      display = countries.map((country)=> (
        <Link
          to={{pathname: '/country/', search: `?code=${country.alpha3Code}`}}
          key={country.alpha3Code} style={{ textDecoration: 'none', color: 'white' }}>
            <div className="card" >
              <div className="flag"
                style={{
                  backgroundImage: `url(${country.flag})`,
                  backgroundSize: 'cover',
                  overflow: 'hidden',
                  backgroundRepeat  : 'no-repeat',
                  backgroundPosition: 'center',
                }}>
              </div>
              <div className="summary">
                <p>{country.name}</p>
                <p className="info">
                  Population: {country.population}<br/>
                  Region: {country.region}<br/>
                  Capital: {country.capital}
                </p>
              </div>
            </div>
        </Link>
      )) 
    }else{
      display = <p className='title'>No countries found</p>
    }

    return(
      <div className="card-container">
        {display}
      </div>
    )
  }
}

export default Countries
