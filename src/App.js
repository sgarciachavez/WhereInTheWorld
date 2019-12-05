import React, { Component } from 'react';
import moonw from './images/moon-white.svg';
import MainContainer from './MainContainer.js'
import SearchContainer from './SearchContainer.js'
import CountryDetails from './CountryDetails.js'
import './style/App.css';
import { Route } from 'react-router-dom'
import { Button } from 'react-bootstrap';


class App extends Component {
  state = {
       theme: "Dark",
     }

     toggleTheme = ()=> {
         var theme = this.state.theme === "Dark" ? "Light" : "Dark";
         this.setState({ theme: theme });
         document.documentElement.setAttribute("data-theme", theme);
         localStorage.setItem( 'theme', theme );
      }

      componentDidMount(){
        var theme = localStorage.getItem( 'theme' );
        if( theme === undefined){
          localStorage.setItem( 'theme', "Dark" );
        }
        document.documentElement.setAttribute("data-theme", theme);
        this.setState({ theme: theme });
      }

     render(){
       
       return (
         <div className="main">
           <div className="title-container">
             <div className="title">Where in the world? </div>
             <div className="mode">
               <img src={moonw} className="moonw" alt="moon" />
               <Button className="mode-button"
                  variant={this.state.theme.toLowerCase()} onClick={this.toggleTheme}>
                 {this.state.theme} Mode
               </Button>
             </div>
           </div>
           <Route exact path='/' render={() =>
               <MainContainer />
           }/>

           <Route exact path='/country/' render={() =>
               <CountryDetails />
           }/>

           <Route exact path='/search/' render={() =>
               <SearchContainer />
           }/>

         </div>
       )
     }
}

export default App
