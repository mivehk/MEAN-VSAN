import mongoose from 'mongoose';


const Schema = mongoose.Schema;

export const ClusterSchema = new Schema ({

cuName:{
    type: String,
    required: "Enter customer name"
},
numNodes:{
    type: Number,
    required: "Enter number of nodes"
} ,
numCapdisks:{
    type: Number,
    required: "Enter number of capacity disks"
} ,
numDiskgroups:{
    type:Number,
    required: "Enter number of disk groups"
} ,
ssdSize:{
    type: Number,
    min: 500,
    max:62000,
    required: "Enter capacity disk size between 500-62000 GB"
} ,
FTM: {
    type: Array,
    items: [(1.00,'PFTT0'),(0.50,'PFTT1'),(0.333,'PFTT2'),(0.25,'PFTT3'),(0.75,'FTM5-PFTT1'),(0.67,'FTM6-PFTT2')],
    //items: [1.00,0.50,0.333,0.25,0.75,0.67],
    required: "Enter type of PFTT"
},
isFavorite:{
    type: Boolean
},
rawCap: {
    type:Number,
    //$multiply: ["$numNodes","$numCapdisks","$numDiskgroups","$ssdSize"]
    
},
spbmCap:{
    type:Number,
    //$multiply: ["$numNodes","$numCapdisks","$numDiskgroups","$ssdSize","$FTM"]
    
},
created_date:{
    type: Date,
    default:Date.now
}
})


ClusterSchema.path('rawCap').set(function(value) {
    return (this.numNodes*this.numCapdisks*this.numDiskgroups*this.ssdSize);
})

ClusterSchema.path('spbmCap').set(function(value) {
    return (this.numNodes*this.numCapdisks*this.numDiskgroups*this.ssdSize*this.FTM)
})


//function test() {return (this.numNodes* this.numCapdisks*this.numDiskgroups*this.ssdSize)})
//ClusterSchema.get('spbmCap',(numNodes,numCapdisks,numDiskgroups,ssdSize,FTM)=>(this.numNodes* this.numCapdisks*this.numDiskgroups*this.ssdSize*this.FTM))

//ClusterSchema.path('rawCap').get((numNodes,numCapdisks,numDiskgroups,ssdSize) =>(this.numNodes* this.numCapdisks* this.numDiskgroups* this.ssdSize))

