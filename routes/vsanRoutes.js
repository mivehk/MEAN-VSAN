import { addNewCluster , getClusters , getClusterWithID , updateCluster , deleteCluster} from '../src/controllers/vsanController'
import mongoose from 'mongoose';
//import vsCluster from '../server';

const routes = (app) => {

    app.route('/cluster')

    .get((req, res, next) => {
        //middleware : middleware are functions have access to req/res objects; can change,end them or usin "next" call another function

        console.log (`Request from : ${ req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next()
    }
    //,getClusters 
    /*(req,res,next) =>{
       res.send('GET request successful!')
    }
     */
    )
    app.route('/')
    .get((req,res,next )=>{
        //res.render('layout',{ pageTitle: 'cluster', template: 'index'});
        //res.send(vsCluster)
        console.log (`Request from : ${ req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next()
        //res.render('layout')
    } ,getClusters) 
//addNewCluster
    // .get((req,res) => {
       //res.render('layout',{ pageTitle: 'Welcome', template: 'home'})
    // } )

    .post(addNewCluster) ,
    

   // .post(addNewCluster
        
       /* (req,res) =>
    res.send('POST request successful!')
    */
    //)
 
    app.route('/cluster/:clusterID')

    .get( getClusterWithID)

    .put(updateCluster
        
        /*(req,res) =>
    res.send('PUT request successful!')
    */
    )

    .delete( deleteCluster
        /*(req,res) =>
    res.send('DELETE request successful!')
    */)

}

export default routes;
