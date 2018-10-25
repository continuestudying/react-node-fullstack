import React from 'react';

const surveyField = ({input, label, type, meta: { error, touched }}) => {
    // console.log('Meta Inside Field : ', error);
    return (
        <div>
            {/* Field */}
            <div>
                <label>{label}</label>
                <input {...input} type={type}/>
            </div>
            {/* Error Message */}
            <div className="red-text" style={{marginBottom: '20px'}}>
                {touched && error}
            </div>
        </div>
    );
}

export default surveyField;