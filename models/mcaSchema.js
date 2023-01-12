const mongoose=require("mongoose")
const McqSchema=mongoose.Schema({
    mcq:[]
})
const Mcq=mongoose.model("Mcq",McqSchema);
module.exports=Mcq;