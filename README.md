# DevOrNot
Engineering Portfolio 

# Project Dependencies
npm install <br>
npm install vite <br>
npm install react-router-dom <br>
npm install @react-google-maps/api <br>


# To Run Application Locally
npm run dev

# Google Cloud Run for hosting website
* Install express for main project (one layer above web-app)
npm install express
* Create index.js containing express code in main project folder (one layer above web-app)
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('web-app/dist'));
const port = process.env.PORT || 8800;
app.listen(port, () => {console.log(`Listening on port ${port}`)});

* from project root /tomy-hui/
gcloud auth login
gcloud config set project groovy-ego-439416-u5
gcloud run deploy --source .
(if running project from root project just press enter)

asia-southeast1
Docker : Y
Unauthenticated Invocations (open access on internet): Y

# Changing Domain Name


Reference from https://www.youtube.com/watch?v=NMnKGHgw8aM
