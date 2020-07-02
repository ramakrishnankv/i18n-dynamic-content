# Load i18n content dynamically using JavaScript

This Demo page is to showcase how i18n (internationalization) works. 

Key approach is to update the language change without refreshing the page. Loads locale specific contents dynamically, whenever language is changed and updating the translated content to match the selected language. Importantly, this uses custom html element so that the content update is easily done.

Select a language from the links on the top navigation to change the language. Observe that the language is changed without page refresh.

Note: The content used in this demo is translated using Google translation service.

On selecting language;
- Load content of the selected language dynamically (update script tag in the html)
- Each locale has it own content file (*.js) in JSON format
- Update required styles specific to locale, especially when need to use a specific woff or truetype font sets.
- Custom HTML element (tag) has been created using window.customElement.define().
- When locale file is loaded, this custom element will re-rendered to refresh the content.
- Used CSS variables

## Deployed

- You can see the page here: https://ramakrishnankv.github.io/i18n-dynamic-content/