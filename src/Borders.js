import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Borders extends Component{
  state = {
       borders: [],
       fetch: true
     }

     getBorders(){
       if(this.state.fetch){
         const url = "https://restcountries.eu/rest/v2/alpha?codes=" + this.props.codes.join(";")
         fetch(url)
         .then(res => res.json())
         .then((data) => {
           this.setState({ borders: data,fetch: false});
         })
         .catch(console.log)
       }
     }

  render(){
    const theme = localStorage.getItem( 'theme' );
    if(this.props.codes !== undefined){
      this.getBorders();
    }

    if(this.state.borders !== undefined && this.state.borders.length > 0 ){
      this.borders = this.state.borders.map((item, key) =>{
        let url = `./?code=${item.alpha3Code}`
        return (
          <Button variant={theme} key={item.alpha3Code} href={url} size="sm" className="border-country">
            {item.name}
          </Button>
        )
      });
    }
    return(
      <div><strong>Border Countries:</strong> {this.borders}</div>
    )
  }
}
export default Borders
