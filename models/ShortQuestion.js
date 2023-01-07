const  mongoose=require("mongoose");
const SortSchema=mongoose.Schema({
    id:{
        type:Number,
    },
    qa:
    [
    ]
})
const Short=mongoose.model("Short",SortSchema);
module.exports=Short;