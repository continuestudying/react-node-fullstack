import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

class SurveyList extends Component {

    componentDidMount() {
        this.props.fetchSurveys();
    }

    renderSurveys () {
        return _(this.props.survey).map(({ _id, title, body, dataSent, yes, no }) => {
            return (
                <div className="card blue-grey darken-1" key={ _id }>
                    <div className="card-content white-text">
                        <span className="card-title">{ title }</span>
                        <p>{ body }</p>
                        <p className="right">Sent On: { new Date(dataSent).toLocaleDateString() }</p>
                    </div>
                    <div className="card-action">
                        <a href="#">Yes: { yes }</a>
                        <a href="#">No: { no }</a>
                    </div>
                </div>
            );
        }).reverse().value();
    }

    render() {
        return (
            <div>{this.renderSurveys()}</div>
        );
    }
}

const mapStateToProps = ({ survey }) => ({ survey });

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);