const express = require('express');
const app = express();
const port = 3000;

app.get('/', function (req, res) {
    res.sendfile('./public/index.html');
});

// 동물 이름 입력
app.get('/animal', function (req, res) {
    res.sendfile('./public/animal.html');
});

// user JSON 목록
app.get('/user/:id', function (req, res) {
    // const q = req.params;
    // console.log(q.id);

    res.json({ user: q.id });
});

app.listen(port, () => {
    console.log('Serve: http://localhost:3000');
});
