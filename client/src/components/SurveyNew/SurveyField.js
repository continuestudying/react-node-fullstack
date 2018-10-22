import React from 'react';

const surveyField = ({ input, label}) => {
    return (
        <div>
            <label>{label}</label>
            <input {...input} />
        </div>        
    );
}

export default surveyField;