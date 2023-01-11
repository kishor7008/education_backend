const  mongoose=require("mongoose");
const LongSchema=mongoose.Schema({
    id:{
        type:Number,
    },
    qa:
    [
    ]
})
const Long=mongoose.model("Long",LongSchema);
module.exports=Long;