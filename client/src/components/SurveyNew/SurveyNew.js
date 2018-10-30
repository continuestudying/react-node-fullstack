import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

import SurveyForm from './SurveyForm';
import SurveyReview from './SurveyReview';

class SurveyNew extends Component {
    state = {
        showSurveyView: false
    };
    
    renderContent() {
        return this.state.showSurveyView 
                    ? <SurveyReview cancel={() => this.setState({showSurveyView: false})} /> 
                    : <SurveyForm next={() => this.setState({showSurveyView: true})} />;
    };

    render() {
        return (
            <div>                
                { this.renderContent() }
            </div>
        );
    };
}

export default reduxForm({
    form: 'surveyForm'
})(SurveyNew);