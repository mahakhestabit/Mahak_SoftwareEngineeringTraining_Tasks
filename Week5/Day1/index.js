const express = require('express');
const port = 8000;

const app = express();


app.get('/', (req, res) =>{
    res.send("I am node project and I am learning Docker here")
})


app.listen(port, () => {
    console.log(`Server running at  ${port}`);
});