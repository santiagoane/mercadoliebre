const express = require('express')
const app = express()
const port = 3000
const path = require('path');
console.log('Santi Probando')
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, './views/register.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'));

});

app.listen(port, () => {
    console.log('Example app listening on port ' + port);
});
