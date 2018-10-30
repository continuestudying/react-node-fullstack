// routes/surveyRoutes.js
const _ = require('lodash');
const mongoose = require('mongoose');

const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model('surveys');

module.exports = app => {
    app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
        
        const { title, subject, body, recipients } = req.body;
        
        // const survey = new Survey({
        //     title,
        //     subject,
        //     body,
        //     recipients: _(recipients)
        //                     .split(',')
        //                     .map(email => ({ email: email.trim() }))
        //                     .value(),
        //     _user: req.user.id,
        //     dateSent: Date.now()
        // });
        const survey = new Survey({
            title,
            subject,
            body,
            recipients: recipients,
            _user: req.user.id,
            dateSent: Date.now()
        });
                
        const mailer = new Mailer(survey, surveyTemplate(survey));
        const response = await mailer.send();
        
        res.send(response);
        
    });    
}