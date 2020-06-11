import React, { Component } from 'react';
import Countries from './Countries.js'
import {DropdownButton, Dropdown, InputGroup} from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import mglass from './images/mag-glass.svg';
import mglass_blk from './images/mag-glass_blk.svg';

class SearchContainer extends Component{
  state = {
       countries: [],
       search: ""
     }

     handleChange=(event) => {
      this.setState({search:event.target.value})
    }

    handleClear=() => {

    }

    fetchCountries = () => {
        const searchParams = new URLSearchParams(window.location.search);
        let name = searchParams.get('name');
        let region = searchParams.get('region');
        
        if(this.state.search.length > 0){
          name = this.state.search
        }

        const fields = "?fields=name;population;region;capital;flag;alpha3Code";
        let url = 'https://restcountries.eu/rest/v2/all' + fields;
  
        if(region !== null){
          url = 'https://restcountries.eu/rest/v2/region/' + region + fields;
        }else if(name != null){
          url = 'https://restcountries.eu/rest/v2/name/' + name + fields;
        }
        
        fetch(url)
        .then(res => res.json())
        .then((data) => {
          this.setState({ countries: data })
        })
        .catch(console.log("catch!"))
    }

  componentDidMount() {
    this.fetchCountries()
  }

  render(){
    let url = `/WhereInTheWorld/search/?name=${this.state.search}`;
    let theme = localStorage.getItem( 'theme' );
    return(
      <div className="container">
        <div className="search-area">
         <div>
            <form>
              <div className="input-container">
                <input 
                  className="input-field" 
                  type="text" placeholder="Search for a country..." 
                  value={this.state.search}
                  onChange={this.handleChange}/>
                <Button variant="outline-secondary" href={url}>
                  <i className="fa fa-search w3-large icon"></i>
                </Button>
              </div> 
            </form>
         </div>
         <div>
           <DropdownButton id="region-filter" title="Filter by Region" variant={theme}>
             <Dropdown.Item href="/WhereInTheWorld">All Regions</Dropdown.Item>
             <Dropdown.Item href="?region=Africa">Africa</Dropdown.Item>
             <Dropdown.Item href="?region=Americas">Americas</Dropdown.Item>
             <Dropdown.Item href="?region=Asia">Asia</Dropdown.Item>
             <Dropdown.Item href="?region=Europe">Europe</Dropdown.Item>
             <Dropdown.Item href="?region=Oceania">Oceania</Dropdown.Item>
           </DropdownButton>
         </div>
      </div>
        <Countries countries={this.state.countries}/>
      </div>
    )
  }
}

export default SearchContainer
