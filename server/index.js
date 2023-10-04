const express = require('express');

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("/");
});

app.listen(port, () => {
    console.log(`Server running on http://127.0.0.1:${port}`);
});