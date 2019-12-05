import React, { Component } from 'react';
import Countries from './Countries.js'
import Search from './Search.js'

class MainContainer extends Component{
  state = {
       countries: []
     }

  componentDidMount() {
        const searchParams = new URLSearchParams(window.location.search);
        const region = searchParams.get('region');
        const fields = "?fields=name;population;region;capital;flag;alpha3Code";

        let url = 'https://restcountries.eu/rest/v2/all' + fields;
        if(region !== null){
          url = 'https://restcountries.eu/rest/v2/region/' + region + fields;
        }

        fetch(url)
        .then(res => res.json())
        .then((data) => {
          this.setState({ countries: data })
        })
        .catch(console.log)
      }

  render(){
    return(
      <div className="container">
        <Search />
        <Countries countries={this.state.countries}/>
      </div>
    )
  }
}

export default MainContainer
