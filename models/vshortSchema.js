const mongoose=require("mongoose")
const vShortSchema=mongoose.Schema({
    vshort:[]
})

const Vshort=mongoose.model("Vshort",vShortSchema)
module.exports=Vshort