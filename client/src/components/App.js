import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import axios from 'axios';

import Header from './Header/Header';


const DashBoard = () => <h1>DashBoard</h1>;
const SurveyNew = () => <h1>Survey New</h1>;
const Landing = () => <h1>Landing</h1>;

class App extends Component {
  
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>          
            <Header />
            <Route path="/" exact component={Landing} />
            <Route path="/survey" exact component={DashBoard}/>
            <Route path="/survey/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>      
    );
  }
}

export default App;
