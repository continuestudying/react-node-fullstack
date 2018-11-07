import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SurveyList from '../SurveyNew/SurveyList';


class Dashboard extends Component {
    renderContent() {        
        return (
            <div>
                <SurveyList />
                <div className="fixed-action-btn">
                    <Link to="/survey/new" className="btn-floating btn-large red">
                        <i className="large material-icons">add</i>
                    </Link>                
                </div>
            </div>
        );        
    }

    render() {
        return (
            <div> {this.renderContent()} </div>           
        );
    };
    
}

export default Dashboard;