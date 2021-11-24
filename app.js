// membuat server
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const port = 3000;

//set flash

app.use(cookieParser('secret'));
app.use(
  session({
    cookie: { maxAge: 6000 },
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
  })
);
app.use(flash());

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.use(expressLayouts);

//middleware
app.use(express.static('public'));
//monggoDB settings
require('./utils/db');
const Contact = require('./model/contact');
// Router

app.get('/', (req, res) => {
  res.render('index', {
    layout: 'layouts/main-layout',
    title: 'Ini beranda',
  });
});

app.get('/pahlawan', (req, res) => {
  res.render('pahlawan', {
    layout: 'layouts/main-layout',
    title: 'ini Pahlawan',
  });
});

app.get('/edukasi', (req, res) => {
  res.render('edukasi', {
    layout: 'layouts/main-layout',
    title: 'ini edukasi',
  });
});

app.listen(port, () => {
  console.log(`Server Berjalan di http://localhost:${port}`);
});
