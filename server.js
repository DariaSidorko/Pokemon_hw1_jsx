
const express = require('express');
const app = express();

const pokemons = require('./models/data');

app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());


app.get('/', (req, res) => {
  res.send(
    `<div>
    <div>Welcome to the Pokemon App!</div>
    <a href="/pokemon"> Learn more about Pokemons</a>
    </div>`);
});


app.get('/pokemon', (req, res) => {
  res.render('Index', { pokemons: pokemons });
});

app.get('/pokemon/:id', (req, res) => {
  res.render('Show', { 
    pokemons: pokemons[req.params.id],
    // index: req.params.indexOfColorsArray
});
});





app.listen(3000, () => {
  console.log('listening');
});