const express = require('express');
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.send("Hello from Docker");
})

app.listen(PORT, () => {
    console.log(`Server listening on PORT: ${PORT}`);
})