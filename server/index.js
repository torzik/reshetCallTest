require( 'dotenv' ).config()
//NODE FRAMEWORK
const express = require( 'express' );
//Color your console log
const chalk = require( 'chalk' );
//CORS
const cors = require( 'cors' );

//DODY Parser - JSON 
const bodyParser = require( 'body-parser' )
//Database ORM for mongoDB
const mongoose = require( 'mongoose' );
//Initializing the app <- our application
const app = express();
//Defining a constant called api that references the api folder
const api = require('./routes');
//Connect to Database
mongoose.Promise = global.Promise;
mongoose.connect( process.env.databaseConn, {
    useNewUrlParser: true,
    useUnifiedTopology: true    
})
.then(() => console.log(chalk.yellow('Connected to'),chalk.green('Database!')))
.catch(err => console.log(chalk.red(`DB Connection Error: ${err.message}`)))
//Tell the app to use the JSON BodyParser
app.use(bodyParser.json());
app.use( bodyParser.urlencoded( { extended: false } ) );

//Use CORS
app.use(cors());

//Instruct the app to route all calls from /api to the path stored in const api
app.use( '/api', api );

app.use( function ( req, res, next ) { 
  res.header( 'Access-Control-Allow-Origin', '*'),
  res.header( 'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept' ),
  next()
})
//TODO: move port to env
let port = 3000;
//Start listening on port
app.listen(port, () => {
    console.log(chalk.blue('Server is up and running on port numner ') + chalk.red( port));
});