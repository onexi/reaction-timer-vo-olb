// This will be the node Express server that will serve up your app
// these are some of the libraries you will need
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3030;

let users = [];
let sortedUsers = [];

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/new', (req, res) => {
    res.json(sortedUsers);
});

app.post('/input', (req, res) => {
    const name = escape(req.body.name);
    const reactionTime = parseFloat((escape(req.body.reactionTime) / 1000).toFixed(3))
    const penalty = parseInt(escape(req.body.penalty));

    users.push({ name: name, reactionTime: reactionTime, penalty: penalty });

    sortedUsers = users
        .map(user => ({
            ...user,
            totalTime: (user.reactionTime + user.penalty).toFixed(3)
        }))
        .sort((a, b) => a.totalTime - b.totalTime)
        .slice(0, 5);

    res.json(sortedUsers);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
