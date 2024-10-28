Setup

  Installation
  
    $ npm i

Development

  Start a development server - reloading automatically after each file change
  
    $ npm run dev

Production

  Build Assets
  
  Optimize assets for production by:
  
    $ npm run production
    
  Get Built Assets
  
    CSS files are located under /dist/css/
    
    JavaScript files with support of ES6 / ECMAScript 2016(ES7) files are located under /dist/js/
    Images are located under /dist/images/
      Images part of the design (usually referenced in the CSS) are located under /dist/images/design/
      Images part of the content (usually referenced via <img> tags) are located under /dist/images/content/
    Fonts are located under /dist/fonts/
    HTML files are located under /dist/
    
Run Code Style Linters

  SASS
  
    $ npm run lint:sass
    
  JavaScript
  
    $ npm run lint:js
