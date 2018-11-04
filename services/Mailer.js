// services/Mailer.js
const _ = require('lodash');
const sendgrid = require('@sendgrid/mail');
// const helper = sendgrid.mail;
const keys = require('../config/keys');

// class Mailer extends helper.Mail {

//     constructor({ subject, recipients }, content) {
//         super();

//         this.sgApi = sendgrid(keys.sendGridKey);
//         this.from_mail = new helper.Email('no-reply@emaily.com');
//         this.subject = subject;
//         this.body = new helper.Content('text/html', content);
//         this.recipients = this.formatAddresses(recipients);

//         this.addContent(this.body);
//         this.addClickTracking();
//         this.addRecipients();
//     }

//     /**
//      * Get list of email string
//      * @param {Array} recipients 
//      */
//     formatAddresses(recipients) {
//         return _.map(recipients, ({ email }) => {
//             return email.trim();
//         });
//     }

//     /**
//      * Keep track when user click on link
//      */
//     addClickTracking() {
//         const trackSettings = new helper.TrackingSettings();
//         const clickTracking = new helper.ClickTracking(true, true);
        
//         trackSettings.setClickTracking(clickTracking);
//         this.addTrackingSettings(trackSettings);
//     }

//     /**
//      * Add recipients
//      */
//     addRecipients() {
//         const personalize = new helper.Personalization();
        
//         this.recipients.forEach(mail => {
//             return personalize.addTo(mail);
//         });

//         this.addPersonalization(personalize);
//     }

//     async send() {
//         const request = this.sgApi.emptyRequest({
//             method: 'POST',
//             path: '/v3/mail/send',
//             body: this.toJSON()
//         });

//         const response =  await this.sgApi.API(request);

//         return response;
//     }

// }

class Mailer {
    
    constructor ({subject, recipients}, content) {
        sendgrid.setApiKey(keys.sendGridKey);
        this.requestObject = {
            subject: subject,
            from: 'continues@gmail.com',
            to: recipients,
            html: content
        }
    }

    async send() {        
        const response = await sendgrid.send(this.requestObject);
        return response;
    }
}

module.exports = Mailer;