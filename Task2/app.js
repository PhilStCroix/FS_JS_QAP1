const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Hello, express app!');
});

const port = 3001;
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});