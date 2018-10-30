import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as actions from '../../actions';

import { FIELD_LIST } from './fieldList';

class SurveyReview extends Component {    
    
    renderContent() {        
        return _.map(FIELD_LIST, ({label, name}) => {
            return (
                <div key={name}>
                    <label>{ label }</label>
                    <div>{ this.props.values[name] }</div>
                </div>
            );
        });
    };

    render() {
        return (
            <div>
                { this.renderContent() }
                <button className="btn-flat yellow darken-3 white-text" onClick={this.props.cancel}>
                    Cancel
                </button>
                <button className="btn-flat right teal white-tex" onClick={() => this.props.handleSubmit(this.props.values, this.props.history)}>
                    Submit
                    <i className="material-icons right">email</i>
                </button>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        values: state.form.surveyForm.values
    };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyReview));