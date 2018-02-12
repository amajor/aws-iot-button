# AWS IoT Button

Snippets that can be pasted into Lambda functions for playing with an AWS IoT button.

## Snippet Descriptions

### Send SMS Text Messages

This snippet sends 3 different text messages to a single phone number, depending on how the user clicks the button.

Copy and paste [this code](https://raw.githubusercontent.com/amajor/aws-iot-button/master/send_text_messages.js) into your function and set up the appropriate environment variable.

* **Customizable Messages**
  * SINGLE_CLICK_MESSAGE
  * DOUBLE_CLICK_MESSAGE
  * LONG_CLICK_MESSAGE
* **Environment Variables**
  * PHONE_NUMBER

## Requirements

* Have an [AWS IoT Button](https://aws.amazon.com/iotbutton/)
* Have an [AWS Account](https://portal.aws.amazon.com/billing/signup)
* Initialize your button using the [AWS IoT Button Dev mobile app](https://itunes.apple.com/us/app/aws-iot-button-dev/id1178216626?mt=8) and choosing a **nodejs** option.

## Getting Started

Once you've initialized your button using your phone, you can log into your AWS account. In the *AWS Services* search bar, type *Lambda* and click on the **Lambda** selection that appears.

You should see the Lambda function that you created by initializing your button using the app on your phone.

Click on the function name to enter into the function editor.

From there, you can copy and paste the code you want into your function.

You may need to make use of environment variables for any sensitive information like phone numbers or web hooks. The names being used for any environment variables in the code snippets should be called out in code comments where it's relevant.
