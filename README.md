# 03 JavaScript: Password Generator

### Steps to use:

1. Click the "Let's Begin" Button to bring up the form

2. Select the settings to allow for the correct criteria

3. Click "Generate Password"

4. That's it! A password will be generated in the text field




### About the Generator

I used the provided HTML form with Bootstrap to style as a template. The form itself is hidden when the page loads with css (display: none) and the dropdown is populated with a for loop, making the HTML more concise and easier to read. Clicking the "Let's Begin" button displays the form by changing the display value from 'none' to 'block'. Once displayed, the user can fill out the form. 

The options for the form are the character count (dropdown) and whether to use Uppercase characters, Numbers, or Special characters (checkboxes). Once you're happy with your settings, you can click "Generate Password" to get the password, which will populate the textarea. 

The password generation function validates the output by checking if there should be uppercase characters, numbers, or special characters, and will run again if any one criteria is missed. I check for these with simple Regex statements, which will trigger another iteration of the function if it returns false.

