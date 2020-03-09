//using babel allows latest ES6 syntax instead of old "require" method of adding classes

import express from 'express';
import routes from './src/routes/vsanRoutes'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

const app = express();
const PORT = 6969;

//mongoose connection
//waiting for result when connecting to mongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/vsandb',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}
)

//body parser setup
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())


routes(app)

app.get('/' , (req,res) =>
    res.send(`This is a VSAN API on port ${PORT}`)
)


app.listen(PORT, () =>
    console.log(`Your server is running on port ${PORT}`)
)
