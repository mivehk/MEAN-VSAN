import mongoose, { version } from "mongoose";
import ClusterSchema  from "../models/vsanModel";
import jsdom from "jsdom";
import clusterObj from "./../../serial";
//import jsdoom from "./../../jsdoom";
//import util from "util";
//import path from "path";

const Cluster = mongoose.model("Cluster" , ClusterSchema);

mongoose.set("useFindAndModify", false);
mongoose.set("debug", true);



export const getClusters = (req,res) =>{
    
	Cluster.find ({}, (err, cluster) => {
		if (err) {
			res.send(err);
		}
		//res.json(cluster);
		//res.render('layout/index')
		res.render("layout",{ clu: cluster, template: "index"});
		//res.redirect('/')
		//res.sendFile(path.join( __dirname , '/../../views/pages/index.ejs'))
	});
};

/* global  */

export const addNewCluster = (req,res) =>{
	//let newCluster = new Cluster(req.body);

	if (req.body.isFavorite){
		req.body.isFavorite =true;
		console.log("14th post getting started");
		let newCluster = new Cluster(req.body);
		//}
		
		newCluster.save((err, cluster) => {
			if (err) {
				res.send(err);
			} 
			//res.json(cluster)
			res.redirect("/");
		});
	} else { 
		req.body.isFavorite = false ;
		console.log("13th post getting started");
		let new2Cluster = new Cluster(req.body); 
		new2Cluster.save((err, cluster) => {
			if (err) {
				res.send(err);
			} 
			//res.json(cluster)
			res.redirect("/");
		});
	}
};

export const getClusterWithID = (req,res) =>{
    
	Cluster.findById( {_id:req.params.clusterid}, (err, cluster) => {
		if (err) {
			res.send(err);
		}
		//res.redirect("/cluster/:clusterID");
		//res.render("layout",{ clusterout: cluster ,clusterid: req.params.clusterid, template: "index2" });
		//res.send(cluster);
		//res.render("/layout/index2");
		res.render("layout",{ clu2: cluster, template:"delete"});
	});
};

export const updateCluster = (req,res) => {      
    
	//let updatedCluster = new Cluster( req.body);

	Cluster.findById({ _id: req.params.clusterid } ,(err, Cluster) => {
		if (err) {
			res.send(err);
		}
		res.render("layout",{ uclu: Cluster, template:"update"});
	}
	);
};

//const { JSDOM } = jsdom;
//const { document } = (new JSDOM()).window;

const JS = jsdom.JSDOM;
//const document = (new JS()).document;

//const document = JS.window;

/* const jss = JS.fromFile("./../../views/layout/index.ejs").then( dom =>
	console.log(dom.serialize())
).catch(err => console.error(err)); */

const { document } = new JS(jsdom.JSDOM.fromFile("./views/layout/index.ejs")).window;

var cuNameF = document.querySelector("#cuName");
var isFavoriteF = document.querySelector("#isFavorite");
var numNodesF = document.querySelector("#numNodes");
var numDiskgroupsF = document.querySelector("#numDiskgroups");
var numCapdisksF = document.querySelector("#numCapdisks");
var ssdSizeF = document.querySelector("#ssdSize");
var FTMF = document.querySelector("#FTM");
/* 
ClusterSchema.pre("findOneAndUpdate" , function(){
	let rawval = parseFloat(numNodesF*numCapdisksF*numDiskgroupsF*ssdSizeF);
	return rawval;
	//next();
});

ClusterSchema.pre("findOneAndUpdate" , function(){
	let spbmval = parseFloat(numNodesF*numCapdisksF*numDiskgroupsF*ssdSizeF*FTMF);
	return spbmval;	
}); */

var dt={
	"isFavorite": true, 
	"cuName": "test12",
	"numNodes": 6,
	"numDiskgroups": 2,
	"numCapdisks": 4,
	"ssdSize": 800,
	"FTM": "0.333,PFTT2",
	"FTM2":["0.333","PFTT2"]
};
////const updt = jsdoom;

export const updateCluster2 = (req,res) => {
	
	Cluster.findOneAndUpdate({_id: req.params.clusterid}, dt,
		{new:true , upsert:true} ,(err , updatedCluster)=>{
			//updatedCluster2.save((err,cluster) =>{	
	      if(err){
				res.send(err);
				console.error(err);			
			}
			//console.log(req.body.cluster);
			console.log(updatedCluster.toJSON());	
			res.redirect("/");
		});
};

// export const addData= (req,res)=>{
// 	let dt2 = new Cluster(dt)
// 	dt2.save( (err,data)=>{
// 		if(err){
// 			console.error(err)
// 		}
// 		console.log(data)
// 		res.redirect("/");
// 	})
// }


export const deleteCluster = (req,res) =>{      
    
	//let clus = Number( req.params._id);
	//res.redirect("/cluster/:_id");
	//console.log(clusterid);
	console.log( req.params.clusterid);
	Cluster.deleteOne( {_id:req.params.clusterid} , (err, cluster) =>{
		if(err){
			res.send(err);
		}
		//res.render("layout",{ clusterout : cluster ,template:"clusterpage" }); 
		//res.send(clus)
		res.redirect("/");
	});
};
    


// Cluster.remove({ _id: req.params._id } ,(err, cluster ) => {
// 	if (err) {
// 		res.send(err);
//     }
       
        
// 	//res.json({message: 'successfully deleted cluster'});
        
//     res.send(clus);
		
// });
 

