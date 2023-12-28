
var express=require("express");
var bodyParser=require('body-parser');
 
var connection = require('./config');
var app = express();
 
var authenticateController=require('./controllers/authenticate-controller');
var registerController=require('./controllers/register-controller');
var registerController1=require('./controllers/register-controller1');
 
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/main.css',express.static(__dirname+'/main.css'))
app.use('../../main.css',express.static(__dirname+'../../main.css'))
app.use('/img',express.static(__dirname+'/img'))
app.get('/', function (req, res) {  
   res.sendFile( __dirname + "/" + "/index.html" );  
})
app.get('/index.html', function (req, res) {  
    res.sendFile( __dirname + "/" + "/index.html" );  
 })  
 
app.get('/service.html', function (req, res) {  
   res.sendFile( __dirname + "/" + "/service.html" );  
})  

app.get('/aboutus.html', function (req, res) {  
    res.sendFile( __dirname + "/" + "/aboutus.html" );  
 }) 

 app.get('/signin.html', function (req, res) {  
    res.sendFile( __dirname + "/" + "/signin.html" );  
 }) 
 app.get('/registration.html', function (req, res) {  
   res.sendFile( __dirname + "/" + "/registration.html" );  
}) 
app.get('/contactus.html', function (req, res) {  
   res.sendFile( __dirname + "/" + "/contactus.html" );  
}) 
app.get('/user-list.ejs', function (req, res) {  
   res.sendFile( __dirname + "/" + "/user-list.ejs" );  
}) 
app.get('/users-form.ejs', function (req, res) {  
   res.sendFile( __dirname + "/" + "/users-form.ejs" );  
}) 

 
/* route to handle login and registration */
app.post('/api/register',registerController.register);
app.post('/api/register',registerController1.register);
app.post('/api/authenticate',authenticateController.authenticate);
 
console.log(authenticateController);
app.post('/controllers/register-controller', registerController.register);
app.post('/controllers/register-controller1', registerController1.register);
app.post('/controllers/authenticate-controller', authenticateController.authenticate);
app.listen(8012);