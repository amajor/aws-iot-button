/**
 * Using your AWS IoT button, send a text message to multiple phones depending 
 * on single, double, or long click.
 * 
 * Set the messages for the variables listed here. 
 * They are defined in the code below.
 *    - SINGLE_CLICK_MESSAGE
 *    - DOUBLE_CLICK_MESSAGE
 *    - LONG_CLICK_MESSAGE
 * 
 * Set comma-separated list of phone numbers by adding an environment variable 
 * named PHONE_NUMBER_LIST - the function will create an array from the list 
 * and then loop through all numbers to send the message.
 * 
 * NOTE: Your phone number must include the "1" for country code (in the US). 
 *       It will be a total of 11 digits for each phone number.
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
    
    let clickMessage = SINGLE_CLICK_MESSAGE;
    if (event.clickType === "LONG") {
        clickMessage = LONG_CLICK_MESSAGE;
    }
    if (event.clickType === "DOUBLE") {
        clickMessage = DOUBLE_CLICK_MESSAGE;
    }

    /** 
     * Create the array from a comma separated list stored in the environment
     * variable named PHONE_NUMBER_LIST.
     * 
     * EXAMPLE:
     *   Key:   PHONE_NUMBER_LIST
     *   Value: 12223334444,15556667777
     */
    const phoneNumberArray = process.env.PHONE_NUMBER_LIST.split(',');

    /** Loop through phone numbers in the phone number array */
    for (var i = 0; i < phoneNumberArray.length; i++) {
        const params = {
            PhoneNumber: phoneNumberArray[i],
            Message: clickMessage,
        };
        SNS.publish(params, callback);
    }
};
