/**
 * Using your AWS IoT button, send a text message depending on single, double,
 * or long click.
 * 
 * Set the messages for the variables listed here. 
 * They are defined in the code below.
 *    - SINGLE_CLICK_MESSAGE
 *    - DOUBLE_CLICK_MESSAGE
 *    - LONG_CLICK_MESSAGE
 * 
 * Set your phone number by adding an environment variable named PHONE_NUMBER
 * NOTE: Your phone number must include the "1" for country code 
 *       (if you're in the United States).
 */

'use strict';

/** Set your messages here: */
const SINGLE_CLICK_MESSAGE = "Robosapiens have deployed!";
const DOUBLE_CLICK_MESSAGE = "Good things coming from Robosapiens.";
const LONG_CLICK_MESSAGE = "Robosapiens are ready to launch!";

/** Configurations. Don't touch this. */
const AWS = require('aws-sdk');
const SNS = new AWS.SNS({ apiVersion: '2010-03-31' });

/** The code that makes it happen. You shouldn't need to touch this. */
exports.handler = (event, context, callback) => {
    console.log('Received event:', event);

    /** Set which message to send. */
    let clickMessage = SINGLE_CLICK_MESSAGE;
    if (event.clickType === "LONG") {
        clickMessage = LONG_CLICK_MESSAGE;
    }
    if (event.clickType === "DOUBLE") {
        clickMessage = DOUBLE_CLICK_MESSAGE;
    }

    /** Construct the parameter object. */
    const params = {
        PhoneNumber: process.env.PHONE_NUMBER,
        Message: clickMessage,
    };
    
    /** Publish to SNS to send the message along! */
    SNS.publish(params, callback);
};
