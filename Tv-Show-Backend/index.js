const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send("Movie API is Running"));

app.listen(5000, () => console.log("Server on port 5000"));