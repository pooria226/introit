require('dotenv').config()
const fs = require('fs')
const cors = require('cors')
const path = require("path");
const csrf = require('csurf');
const morgan = require('morgan')
const cron = require('node-cron')
const express = require('express')
const socket = require('socket.io')
const passport = require("passport")
const flash = require('connect-flash');
const cookieParser = require('cookie-parser')
const cookieSession = require("cookie-session")
const fileUpload = require('express-fileupload');
const formidable = require('express-formidable');
const { engine } = require('express-handlebars');
const expressSession = require('express-session');


const app = express();
require("./auth/passport")

//Handlebars View Engine
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set('views', './views');

// middlewares
app.use(express.static(__dirname + '/public'));
app.use(express.json({limit: "50mb"}))
app.use(cookieParser(process.env.SECRET))
app.use(morgan('dev'));
app.use(cors({
    origin: process.env.SITE,
    credentials: true,
}));
app.use(flash());

app.use(expressSession({
    name: "session",
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        domain: '.introit.io'
    },
}));

app.use(passport.initialize())
app.use(passport.session())

fs.readdirSync('./routes').map(folder => {
    fs.readdirSync(`./routes/${folder}`).map(router => {
        app.use('/', require(`./routes/${folder}/${router}`))
    })
})

const port = process.env.PORT || 8080
let server = app.listen(port, () => {
	console.log(`Server is running on Port: ${port}`)
})
