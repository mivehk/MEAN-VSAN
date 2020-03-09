import monoose from 'mongoose';


const Schema = mongoose.Schema;

export const ClusterSchema = new Schema ({

cuName:{
    type: String
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
    required: "Enter size of capacity disks"
} ,
FTM: {
    type: Number,
    required: "Enter type of PFTT"
},
isFavorite:{
    type: Boolean
},
rawCap: {
    type:Number
    
},
spbmCap:{
    type:Number
    
},
created_date:{
    type: Date,
    default:Date.now
}
})

