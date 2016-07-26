# pointsource

I was not able to consume the API at http://applicant.pointsource.us/api/testUser/5792735af62a2d8f3c05db2b because I ran into "same origin policy" issue. Seems like the API does not serve CORS headers in its responses or JSONP enabled. Without further investigation of the problem and for the reason to save time, I decided to host the API locally at localhost:3000/people that serves the specified json file. The angular app is setup to consume this API throuh AJAX with a help from angular-resource module.

Setup Instructions:

Clone this repository:
    git clone https://github.com/3agpot/pointsource.git

make sure pug(formerly jade) templating language is installed globally because html files are generated from pug/jade syntax:
    npm install -g pug-cli

install local npm dependencies specified in package.json:
    npm install

install local bower dependencies specified in bower.json:
    bower install

Run the NodeJS server locally:
    DEBUG=pointsource:* npm start
