import { addNewCluster , getClusters , getClusterWithID , updateCluster , deleteCluster } from "../src/controllers/vsanController";
//import mongoose from "mongoose";
//import ClusterSchema  from "../models/vsanModel";
//import vsCluster from '../server';

//const Cluster = mongoose.model("Cluster" , ClusterSchema);

const routes = (app) => {

	app.route("/layout/:_clusterid")
	
		.get((req,res, next ,err) => {
			if (err) {
				res.send(err);
			}
			console.log(`Request type: ${req.method}`);
			console.log (`Request from : ${ req.originalUrl}`);
			//clusterid = :_clusterid
			//const clus1 = await getClusterWithID
		    //res.render("layout",{ clusterout: clus1 ,template: "clusterpage" });
			//console.log("yes, sending cluster data to cluster page");
			//res.redirect("/cluster/:_id");
			//res.render("layout",{ clusterout: cluster ,template: "clusterpage" });
			//res.sendFile(path.join(__dirname ,"./views/layout/clusterpage.ejs"));
			next();
		} , deleteCluster);

		

	// app.route("/cluster")

	// 	.get((req, res, next) => {
	// 		//middleware : middleware are functions have access to req/res objects; can change,end them or usin "next" call another function

	// 		console.log (`Request from : ${ req.originalUrl}`);
	// 		console.log(`Request type: ${req.method}`);
	// 		next();
	// 	}
	// 		//,getClusters 
	// 		/*(req,res,next) =>{
	//    res.send('GET request successful!')
	// }
	//  */
	// 	);
	app.route("/")
		.get((req,res,next )=>{
			//res.render('layout',{ pageTitle: 'cluster', template: 'index'});
			//res.send(vsCluster)
			console.log (`Request from : ${ req.originalUrl}`);
			console.log(`Request type: ${req.method}`);
			next();
			//res.render('layout')
		} ,getClusters) 
	//addNewCluster
	// .get((req,res) => {
	//res.render('layout',{ pageTitle: 'Welcome', template: 'home'})
	// } )

		.post(addNewCluster) 

		.delete((req,res ,next ) => {
			console.log("yes, sending cluster data to cluster page");
        
			next();
		} ,deleteCluster );
		

	//.delete( deleteCluster1 )
		
	/*(req,res) =>
    res.send('DELETE request successful!')
    */
    

	// .post(addNewCluster
        
	/* (req,res) =>
    res.send('POST request successful!')
    */
	//)
 
	// app.route("/cluster/:_id")

	// 	.get(getClusterWithID)

	//     .put(updateCluster)
        
	//    .delete( deleteCluster1)

        
	//.delete( deleteCluster)
            
	/*(req,res) =>
    res.send('PUT request successful!')
    */

	// app.route("/cluster/:_id")

	// 	.get((req,res ,next ) => {
	//         console.log("yes, sending cluster data to cluster page");
            
	// 		next();
	// 	} , getClusterWithID );

};

export default routes;
