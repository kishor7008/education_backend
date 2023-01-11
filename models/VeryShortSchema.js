const  mongoose=require("mongoose");
const VeryShortSchema=mongoose.Schema({
    id:{
        type:Number,
    },
    qa:
    [
    ]
})
const VeryShort=mongoose.model("VeryShort",VeryShortSchema);
module.exports=VeryShort;