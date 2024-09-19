// This will be the node Express server that will serve up your app
// these are some of the libraries you will need
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3030;

let users = [];

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/input', (req, res) => {
    const name = escape(req.body.name);
    const reactionTime = escape(req.body.reactionTime);
    const penalty = escape(req.body.penalty);

    users.push({ name: name, reactionTime: reactionTime, penalty: penalty });

    res.json(users);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
