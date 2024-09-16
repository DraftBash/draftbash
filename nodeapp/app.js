const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Testing API!');
});

app.listen(80, () => {
    console.log('Server is running!');
});