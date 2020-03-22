//using babel allows latest ES6 syntax instead of old "require" method of adding classes

import express from "express";
import routes from "./routes/vsanRoutes";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import path from "path";
//import ClusterSchema from "./src/models/vsanModel";
//import { addNewCluster , getClusters , getClusterWithID , updateCluster , deleteCluster} from "./src/controllers/vsanController"
//import fs from 'fs'

const app = express();
const PORT = 6969;

/* global global */
//mongoose connection
//waiting for result when connecting to mongoDB
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/vsandb",{
	useNewUrlParser: true,
	useUnifiedTopology: true
}
);

//body parser setup
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

routes(app);

/* global __dirname */

app.set("view engine", "ejs");
app.set("views", path.join( __dirname , "/views"));

app.use(express.static(path.join( __dirname , "/public")));


//app.get("/" , (req,res)=>{ res.render("layout");});

//const Cluster = mongoose.model("Cluster" , ClusterSchema);


app.listen(PORT, () =>
	console.log(`Your server is running on port ${PORT}`)
);


//app.render("layout",{ template: "clusterpage" });
//app.get("/cluster/:_id" , (req,res) =>{ res.sendfile("views/laout/clusterpage.ejs")})

//console.log(app.locals._id);
// const vCluster = mongoose.model ('vCluster', ClusterSchema )

// const vsCluster = vCluster.find({} , (cluste) =>{
//    //cluster.forEach( (clu) => {
//        console.log(cluste)
//    //})
// })

//console.log(vsCluster)
//res.send(cluster)
//console.log(cl)

//res.render('layout',{ vsC: 'cluster', template: 'index'})



// app.render('layout',()=>{

// })

//console.log(vsCluster)

// app.use((req ,res,next) =>{
//     try{
//         const clues = Cluster.getClusters();
//         res.locals.vsCluster =clues;
//         console.log(clues)
//         return next()
//     } catch (err){
//         return next(err);
//     }
// })


//app.get('/', (req,res)=>{ res.render('layout',{ pageTitle: 'Welcome', template: 'home'})}) 

//app.get( '/', (req,res) => {res.render('pages',{ pageTitle: 'Welcome', template: 'list'})})

// app.get('/' , (req,res) =>
//     res.render('layout' , {pageTitle: 'Welcome', template:'list'})
//     //res.sendFile( path.join( __dirname , '/index.html'))
//     //res.send(`This is a VSAN API on port ${PORT}`)
// )

// app.get('/cluster' , (req,res) =>
//     res.sendFile( path.join( __dirname , '/list.html'))
//     //res.send(`This is a VSAN API on port ${PORT}`)
// )



/*
app.post('/',(req,res)=>{
    addNewCluster()
})
*/ 