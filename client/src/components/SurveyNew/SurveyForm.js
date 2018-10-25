import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';

import SurveyField from './SurveyField';

const FIELDS = [
    { type: 'text', label: 'Survey Title', name: 'title' },
    { type: 'text', label: 'Subject Lint', name: 'subject' },
    { type: 'text', label: 'Email Body', name: 'email' },
    { type: 'text', label: 'Recipient List', name: 'recipients' }
];

class SurveyForm extends Component {

    formRender = () => {
        return (
            _.map(FIELDS, ({ label, name }) => {
                return <Field key={name} type="text" label={label} name={name} component={SurveyField} />
            })
        );
    };

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
                { this.formRender() }                
                <Link to="/surveys" className="red btn-flat white-text">Cancel</Link>
                <button type="submit" className="teal btn-flat right white-text">
                    Next
                    <i className="material-icons right">done</i>
                </button>
            </form>
        );
    };    
}

const validate = (values) => {
    const error = {};
    // All fields are required
    _.map(FIELDS, ({ name }) => {
        error[name] = `Field ${name} is required`;
    });

    // Validate List of emails
    const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const invalidEmails = _.split(values.recipients, ',')
                            .filter(recipient => {
                                return !EMAIL_REGEX.test(recipient.trim());
                            })
                            .join(', ');    
    _.size(invalidEmails) && (error.recipients = `These emails are invalid : ${invalidEmails}`);
    
    return error;    
}

export default reduxForm({
    validate,
    form: 'surveyForm'
})(SurveyForm);