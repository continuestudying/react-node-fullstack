import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import axios from 'axios';

import Header from './Header/Header';
import DashBoard from './Dashboard/Dashboard';
import SurveyNew from './SurveyNew/SurveyNew';
import Landing from './Landing/Landing';


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
