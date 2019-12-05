import React, { Component } from 'react';
import mglass from './images/mag-glass.svg';
import mglass_blk from './images/mag-glass_blk.svg';
import {DropdownButton, Dropdown, InputGroup} from 'react-bootstrap';
import { Button } from 'react-bootstrap';

class Search extends Component{
  state = {
    search: ""
  }
  handleChange=(event) => {
    this.setState({search:event.target.value})
  }

  render(){
    let url = `/search/?name=${this.state.search}`;
    let theme = localStorage.getItem( 'theme' );

    return(
      <div className="search-area">
         <div>
           <InputGroup className="mb-3">
            <form >
              <input type="text"
                  placeholder="Search for a country..."
                  className="search-string"
                  value={this.state.search}
                  onChange={this.handleChange}/>
              </form>
               <InputGroup.Append>
                <Button variant="outline-secondary" href={url}>
                  <img src={theme === "light" ? mglass_blk : mglass } className="" alt="magnifying glass" />
                </Button>
               </InputGroup.Append>
             </InputGroup>
         </div>
         <div>
           <DropdownButton id="region-filter" title="Filter by Region" variant={theme}>
             <Dropdown.Item href="/">All Regions</Dropdown.Item>
             <Dropdown.Item href="?region=Africa">Africa</Dropdown.Item>
             <Dropdown.Item href="?region=Americas">Americas</Dropdown.Item>
             <Dropdown.Item href="?region=Asia">Asia</Dropdown.Item>
             <Dropdown.Item href="?region=Europe">Europe</Dropdown.Item>
             <Dropdown.Item href="?region=Oceania">Oceania</Dropdown.Item>
           </DropdownButton>
         </div>
      </div>
    )
  }
}

export default Search
