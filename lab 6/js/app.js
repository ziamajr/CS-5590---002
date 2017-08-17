var express = require('express');
var path = require('path');
var bodyParser = ('body-parser');

var index = require('.routes/index');
var info = require('.routes/index');

var app = express=();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderfile);

app.use(expres.static(path.join(__dirname, 'client'));
        
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/api', index);

app.listen();
    console.log('Server started on port '+port);
});