import mongoose from 'mongoose'
import { ClusterSchema} from "../models/vsanmodel"
import path from 'path'

const Cluster = mongoose.model('Cluster' , ClusterSchema);



export const getClusters = (req,res) =>{
    
    Cluster.find ({}, (err, cluster) => {
        if (err) {
            res.send(err);
        }
        //res.json(cluster);
        res.sendFile(path.join( __dirname , '/../../list.html'))
    })

}

export const addNewCluster = (req,res) =>{
    let newCluster = new Cluster(req.body)

    newCluster.save((err, cluster) => {
        if (err) {
            res.send(err);
        } 
        //res.json(cluster)
        res.redirect('/cluster')
    })

}

export const getClusterWithID = (req,res) =>{
    
    Cluster.findById ( req.params.clusterID, (err, cluster) => {
        if (err) {
            res.send(err);
        }
        res.json(cluster)
    })

}

export const updateCluster = (req,res) => {      
    
    let updatedCluster = new Cluster( req.body)

    updatedCluster.save((err , cluster) => {
    //Cluster.findOneAndUpdate ({ _id: req.params.clusterID }, req.body ,{ new: true , useFindAndModify: false} ,(err, updatedcluster) => {
        if (err) {
            res.send(err);
        }
        res.json(cluster)
    })
}


export const deleteCluster = (req,res) =>{      
    
    Cluster.remove({ _id: req.params.clusterID } ,(err, cluster) => {
        if (err) {
            res.send(err);
        }
        res.json({message: 'successfully deleted cluster'})
    })

}

