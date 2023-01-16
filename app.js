const express = require('express')

const app = express();

const path = require('path');

const port = 3030
//Hola mundo
app.use(express.static('public'));
//Haciendo commits
app.get('/', (req, res) => res.sendFile(path.resolve('./views/index.html')))

app.get('/babbage', (req, res) => res.sendFile(path.resolve('./views/babbage.html')))

app.get('/berners-lee', (req, res) => res.sendFile(path.resolve('./views/berners-lee.html')))

app.get('/clarke', (req, res) => res.sendFile(path.resolve('./views/clarke.html')))

app.get('/hamilton', (req, res) => res.sendFile(path.resolve('./views/hamilton.html')))

app.get('/hopper', (req, res) => res.sendFile(path.resolve('./views/hopper.html')))

app.get('/lovelace', (req, res) => res.sendFile(path.resolve('./views/lovelace.html')))

app.get('/turing', (req, res) => res.sendFile(path.resolve('./views/turing.html')))
 
app.listen(port, () => console.log(`El servidor funcionando en el puerto ${port}`))