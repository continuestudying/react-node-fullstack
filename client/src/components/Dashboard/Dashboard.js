import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
    renderContent() {        
        return (
            <div>
                <h1>Dashboard</h1>
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