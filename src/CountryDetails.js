import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import arrow from './images/left-arrow.svg';
import Borders from './Borders.js'

class CountryDetails extends Component{
  state = {
       country: {}
     }

  componentDidMount() {
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get('code');

    if(code !== null){
      const fields = "?fields=name;nativeName;population;region;subregion;capital;topLevelDomain;currencies;languages;borders;flag";
      let url = 'https://restcountries.eu/rest/v2/alpha/' + code + fields;

      fetch(url)
      .then(res => res.json())
      .then((data) => {
        this.setState({ country: data });
      })
      .catch(console.log)
    }
  }

  render(){
    const theme = localStorage.getItem( 'theme' );
    if(this.state.country.currencies !== undefined){
      this.currencies = this.state.country.currencies.map((item, key) =>
            <li key={item.code}>{item.name}</li>
          );
    }

    if(this.state.country.languages !== undefined){
      this.languages = this.state.country.languages.map((item, key) =>
            <li key={item.iso639_1}>{item.name}</li>
          );
    }

    return(
      <div className="details-container">
        <Link to='/'>
          <Button variant={theme}><img src={arrow} className="moonw" alt="left arrow" />
            Back to all countries
          </Button>
        </Link>
        <div className="country-info">
          <div className="flag-container">
            <img src={this.state.country.flag}  alt="left arrow" className="responsive"/>
          </div>

          <div className="info-container">
            <p><strong>{this.state.country.name}</strong></p>
            <div className="specs-container">
                <div className="column">
                  <p className="info">
                    <strong>Native Name:</strong> {this.state.country.nativeName}<br/>
                    <strong>Population:</strong> {this.state.country.population}<br/>
                    <strong>Region:</strong> {this.state.country.region}<br/>
                    <strong>Sub Region:</strong> {this.state.country.subregion}<br/>
                    <strong>Capital:</strong> {this.state.country.capital}<br/>
                    <strong>Top Level Domain:</strong> {this.state.country.topLevelDomain}
                  </p>
                </div>
                <div className="column info">
                    <strong>Currencies:</strong> <ul>{this.currencies}</ul>
                    <strong>Languages:</strong> <ul>{this.languages}</ul>
                </div>
            </div>
            <Borders codes={this.state.country.borders}/>
          </div>
        </div>
      </div>
    )
  }
}

export default CountryDetails
