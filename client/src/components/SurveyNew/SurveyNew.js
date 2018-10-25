import React, { Component } from 'react';

import SurveyForm from './SurveyForm';
import SurveyReview from './SurveyReview';

class SurveyNew extends Component {
    state = {
        showSurveyView: false
    };
    
    renderContent() {
        return this.state.showSurveyView ? <SurveyReview /> : <SurveyForm next={() => this.setState({showSurveyView: true})} />;
    };

    render() {
        return (
            <div>                
                { this.renderContent() }
            </div>
        );
    };
}

export default SurveyNew;