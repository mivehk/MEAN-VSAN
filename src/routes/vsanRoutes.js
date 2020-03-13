import { addNewCluster , getClusters , getClusterWithID , updateCluster , deleteCluster} from '../controllers/vsanController'

const routes = (app) => {

    app.route('/cluster')

    .get((req,res , next) => {
        //middleware : middleware are functions have access to req/res objects; can change,end them or usin "next" call another function

        console.log (`Request from : ${ req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next()
    }, getClusters /*(req,res,next) =>{
       res.send('GET request successful!')
    }
     */
    )
    app.route('/')

    .post(addNewCluster)
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
