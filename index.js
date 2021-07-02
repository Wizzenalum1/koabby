const express = require('express');
//  this is the ejs layout library help to make layouts
const expressLayout = require('express-ejs-layouts');
const path = require('path'); // to save problems due to relative problems 

const app = express();
const port = 8080;

const db = require('./config/mongoose');

// at starts meddle ware to see whcih request is called for.
app.use(function(req,res,next){
  console.log("with method : ",req.method,"   request to :",req.url);
  next();
})

// setting to static file
app.use(express.static(path.join(__dirname,'assets')));  // setup the 


// setting the view engine
app.set('view engine','ejs');
app.set('views','./views');

// before all routes this middleware should be called to use layout feature
app.use(expressLayout);

// setting these to layout so that script and style file can move to head and bottom in layout.
app.set('layout extractScripts',true);
app.set('layout extractStyles',true);

app.use(express.urlencoded({extended:true}))

app.use(require('./routes'));




// testing the db that is created jsut vbefore hand
// const {}



// starting express server at some port
app.listen(port,function(err){
    if(err) console.log(`server is not running: ${err}`);// here i am using the interpolation to show the data
    console.log(`server is running on ${port}`);
})


// // experiment to create my own view engine.

// var fs = require('fs') // this engine requires the fs module
// app.engine('ntl', function (filePath, options, callback) { // define the template engine
//   fs.readFile(filePath, function (err, content) {
//     if (err) return callback(err)
//     // this is an extremely simple template engine
//     var rendered = content.toString()
//       .replace('#title#', '<title>' + options.title + '</title>')
//       .replace('#message#', '<h1>' + options.message + '</h1>')
//     return callback(null, rendered)
//   })
// })


// app.set('views', './') // specify the views directory
// app.set('view engine', 'ntl') // register the template engine

// app.get('/', function (req, res) {
//     res.render('hi', { title: 'Hey', message: 'Hello there!' })
//   })