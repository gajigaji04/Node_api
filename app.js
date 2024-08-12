const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/animal', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'animal.html'));
});

app.get('/color', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'color.html'));
});

// user JSON 목록
app.get('/user/:id', function (req, res) {
    const q = req.params;
    console.log(q.id);

    res.json({ user: q.id });
});

app.listen(port, () => {
    console.log('Serve: http://localhost:3000');
});
