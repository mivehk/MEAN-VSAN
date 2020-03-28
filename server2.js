// //using babel allows latest ES6 syntax instead of old "require" method of adding classes

// import express from "express";
// import routes from "./routes/vsanRoutes";
// import mongoose from "mongoose";
// import bodyParser from "body-parser";
// import path from "path";
// //import ClusterSchema from "./src/models/vsanModel";
// //import { addNewCluster , getClusters , getClusterWithID , updateCluster , deleteCluster} from "./src/controllers/vsanController"
// //import fs from 'fs'
let teatime = Date.now();
let after = (v) =>{ console.log(`${v} \n Elapsed: ${ Date.now() - teatime}`)};

// const app = express();
// const PORT = 6969;

// /* global global */
// //mongoose connection
// //waiting for result when connecting to mongoDB
// mongoose.Promise = global.Promise;
// mongoose.connect("mongodb://localhost/vsandb",{
// 	useNewUrlParser: true,
// 	useUnifiedTopology: true
// }
// );

// //body parser setup
// app.use(bodyParser.urlencoded({extended:true}));
// app.use(bodyParser.json());

// routes(app);

// /* global __dirname */

// app.set("view engine", "ejs");
// app.set("views", path.join( __dirname , "/views"));

// app.use(express.static(path.join( __dirname , "/public")));


// app.listen(PORT, () =>
// 	console.log(`Your server is running on port ${PORT}`)
// );

console.log(window.document.tittle);

const document = new window.document; 
/*------------------------------------*/
const del = document.querySelector("#dele");

function functt(){
	console.log("func started");
	// fetch("localhost:6969/layout/:clusterid",
	// 	{method: post}
	// )
	// 	.then(function(res){
	// 		if (res.ok){
	// 			console.log("button click recorded");
	// 			return;
	// 		}
	// 		throw new Error("Request Failed");
	// 	})
	// 	.catch(function(error){
	// 		console.log(error);
	// 	});
}

del.addEventListener("click", functt,false);

after("what is up");
