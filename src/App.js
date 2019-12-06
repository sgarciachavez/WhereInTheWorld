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
       theme: "dark",
       label: "Dark"
     }

     toggleTheme = ()=> {
         var theme = this.state.theme === "dark" ? "light" : "dark";
         this.updateState(theme);
      }

      updateState = (theme) => {
        if(theme === null){
          theme = "dark";
        }
        this.setState({ theme: theme });
        var label = theme === "dark" ? "Dark" : "Light";
        this.setState({label: label});
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem( 'theme', theme );
      }

      componentDidMount(){
        this.updateState(localStorage.getItem( 'theme' ));
      }

     render(){

       return (
         <div className="main">
           <div className="title-container">
             <div className="title">Where in the world? </div>
             <div className="mode">
               <img src={moonw} className="moonw" alt="moon" />
               <Button className="mode-button"
                  variant={this.state.theme} onClick={this.toggleTheme}>
                 {this.state.label} Mode
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
