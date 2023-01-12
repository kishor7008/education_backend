const mongoose=require("mongoose")
const LongSchema=mongoose.Schema({
    longq:[]
})

const Longq=mongoose.model("Longq",LongSchema)
module.exports=Longq