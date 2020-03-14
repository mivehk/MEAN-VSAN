//using babel allows latest ES6 syntax instead of old "require" method of adding classes

import express from 'express';
import routes from './routes/vsanRoutes'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import path from 'path'
//import { addNewCluster , getClusters , getClusterWithID , updateCluster , deleteCluster} from './src/controllers/vsanController'
//import fs from 'fs'

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

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname , '/views'));

app.use(express.static(path.join( __dirname , '/public')))

//app.use('/',routes({vsanRoutes}))
app.get('/' , (req,res)=>{ res.render('layout/home')})

// app.get('/' , (req,res) =>
//     res.render('layout' , {pageTitle: 'Welcome', template:'list'})
//     //res.sendFile( path.join( __dirname , '/index.html'))
//     //res.send(`This is a VSAN API on port ${PORT}`)
// )

// app.get('/cluster' , (req,res) =>
//     res.sendFile( path.join( __dirname , '/list.html'))
//     //res.send(`This is a VSAN API on port ${PORT}`)
// )

app.listen(PORT, () =>
    console.log(`Your server is running on port ${PORT}`)
)

/*app.post('/',(req,res)=>{
    addNewCluster()
})*/