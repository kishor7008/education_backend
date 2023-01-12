const mongoose=require("mongoose")
const ShortSchema=mongoose.Schema({
    short:[]
})

const Short=mongoose.model("Short",ShortSchema)
module.exports=Short