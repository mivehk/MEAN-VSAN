//using babel allows latest ES6 syntax instead of old "require" method of adding classes

import express from 'express';

const app = express();
const PORT = 6969;


app.get('/' , (req,res) =>
    res.send(`This is a VSAN API on port ${PORT}`)
)


app.listen(PORT, () =>
    console.log(`Your server is running on port ${PORT}`)
)
