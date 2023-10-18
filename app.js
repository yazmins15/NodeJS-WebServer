const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT;
console.log('Puerto' + port);
const hbs = require('hbs');

//handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(
  __dirname + '/views/partials'
  /*, function (err) {}*/
);

//Servir contenido estático
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Yazmin Viridiana',
    titulo: 'Curso',
  });
});

app.get('/generic', (req, res) => {
  res.render('generic');
  //res.sendFile(__dirname + '/public/generic.html');
});

app.get('/elements', (req, res) => {
  res.render('elements');
});

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
  console.log(`Example app listening at ... : ${port}`);
});
