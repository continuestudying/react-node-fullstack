// routes/surveyRoutes.js
const _ = require('lodash');
const Path = require('path-parser').default;
const { URL } = require('url'); 
const mongoose = require('mongoose');

const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model('surveys');

module.exports = app => {

    app.get('/api/surveys', (req, res) => {
        return res.send("Thanks for your vote !!!");
    });

    app.post('/api/surveys/webhooks', (req, res) => {
        const p = new Path('/api/surveys/:surveyId/:choice');

        _(req.body)
                .map(({email, url}) => {
                    const pathname = new URL(url).pathname;        
                    const match = p.test(pathname);
                    return match ? { email, surveyId: match.surveyId, choice: match.choice } : null;
                })
                .compact()
                .uniqBy('email', 'surveyId')
                .each(({ surveyId, email, choice }) => {
                    Survey.updateOne(
                        {
                            _id: surveyId,
                            recipients: {
                                $elemMatch: { email: email, responded: false }
                            }                                       
                        }, 
                        {
                            $inc: { [choice]: 1 },
                            $set: { 'recipients.$.responded': true }
                        }
                    ).exec();
                });
            
        res.send({});
    });

    app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
        
        const { title, subject, body, recipients } = req.body;
               
        const survey = new Survey({
            title,
            subject,
            body,
            recipients: _(recipients)
                                .split(',')
                                .map(email => ({ email: email.trim() }))
                                .value(),
            _user: req.user.id,
            dateSent: Date.now()
        });
                
        const mailer = new Mailer(survey, surveyTemplate(survey));
        try {
            await mailer.send();
            await survey.save();
            req.user.credits -= 1;
            const user = await req.user.save();            
            res.send(user);   

        } catch (error) {
            res.status(422).send(error);
        }        
        
    });    
}

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