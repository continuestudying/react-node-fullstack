import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './Header/Header';
import DashBoard from './Dashboard/Dashboard';
import SurveyNew from './SurveyNew/SurveyNew';
import Landing from './Landing/Landing';
import * as actions from '../actions';

class App extends Component {
  
  componentDidMount() {
    this.props.fetchUser();
  }
  
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div className="container">          
            <Header />
            <Route path="/" exact component={Landing} />
            <Route path="/surveys" exact component={DashBoard}/>
            <Route path="/survey/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>      
    );
  }
}

export default connect(null, actions)(App);
