import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FIELD_LIST } from './fieldList';

class SurveyReview extends Component {    
    
    renderContent() {
        console.log('Inside Survey : ', this.props);
        return _.map(FIELD_LIST, ({label, name}) => {
            return (
                <div key={name}>
                    <label>{ label }</label>
                    <div>{ this.props[name] }</div>
                </div>
            );
        });
    };

    render() {
        return (
            <div>
                { this.renderContent() }
                <button className="btn-flat yellow darken-3 white-text">
                    Cancel
                </button>
                <button className="btn-flat right teal white-text">
                    Submit
                    <i className="material-icons right">email</i>
                </button>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return { ...state.form.surveyForm.values };
}

export default connect(mapStateToProps, null)(SurveyReview);