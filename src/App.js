import React, { Component } from 'react';
import moonw from './images/moon-white.svg';
import SearchContainer from './SearchContainer.js'
import CountryDetails from './CountryDetails.js'
import './style/App.css';
import { Route, Switch } from 'react-router-dom'
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
             <div className="title">Where in the world?</div>
             <div className="mode">
               <img src={moonw} className="moonw" alt="moon" />
               <Button className="mode-button"
                  variant={this.state.theme} onClick={this.toggleTheme}>
                 {this.state.label} Mode
               </Button>
             </div>
           </div>
          
          <Switch>
            <Route exact path={['/', '/search']}>  <SearchContainer /> </Route>
            <Route path='/country'> <CountryDetails />  </Route>
            <Route render={() => <h1 className="not-found">404: page not found</h1>} />
          </Switch>
         </div>
       )
     }
}

export default App
