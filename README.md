# Redux Feedback Form - Progressive form with option to repeat

## Description

_Duration: 3 weeks (holiday weekend)_

This is a progressive form. Problems to solve include, storing information in redux temporarily,
full CRUD, as well as navigation. I used the opportunity to practice integrating MUI components as 
well. Initially I created components for each question, butmthen switched to a more modular 
approach. Instead I created a component for both rating questions and for text responses. The props 
given to the component will then adapt appropriately.

This approach allows the questions to be imported from the server which means questions can be added, 
removed, and reordered at will. Although I was able to get a good 70% of it functional, the additional
30% was taking up far too much time delving into database structure and advanced SQL queries that I 
wasn't able to readily problem-solve given the time frame. Will most likely come back to it later when 
the SQL join lecture series is complete. At that point I might deploy it using Heroku or AWS Amplify.

## Dependencies

```
"dependencies": {
    "axios": "^0.21.1",
    "body-parser": "^1.18.2",
    "express": "^4.16.3",
    "pg": "^8.2.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-redux": "^7.2.2",
    "react-router-dom": "^5.3.4",
    "react-scripts": "^5.0.1",
    "redux": "^4.0.5",
    "redux-logger": "^3.0.6",
    "redux-saga": "^1.1.3"
}
```

Database should be named "prime_feedback". Establishing SQL queries are found in the file `data.sql` .

## Installation

1. Create database named "prime_feedback"
2. Load queries in `data.sql` into the database
3. Install node `npm install`
4. Run server `npm run server`
5. Run client `npm run client`
6. Default will load to `localhost:3000`

Not optimized yet for deployment.

## Contact

Additional questions can be answered by J! [email me](mailto:j@8bit.coffee)
