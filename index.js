
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const port = process.env.PORT|| 3004
const App = express();
const router = require ('./Routes/indexRouter');  

const cors = require('cors');
const morgan = require ('morgan');

App.use(morgan('dev'))

App.use(cors());
// App.use(express.json());
App.use(express.urlencoded({extended:true}))
App.use (bodyParser.json());

App.use(router);
App.listen (port, () => {
    console.log (`Express is listening on port : ${port}`)
}) 
