import mongoose from 'mongoose'
import { ClusterSchema} from "../models/vsanmodel"

const Cluster = mongoose.model('Cluster' , ClusterSchema);


export const addNewCluster = (req,res) =>{
    let newCluster = new Cluster(req.body)

    newCluster.save((err, cluster) => {
        if (err) {
            res.send(err);
        }
        res.json(cluster)
    })

}

export const getClusters = (req,res) =>{
    
    Cluster.find ({}, (err, cluster) => {
        if (err) {
            res.send(err);
        }
        res.json(cluster)
    })

}