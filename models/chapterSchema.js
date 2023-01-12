const mongoose=require("mongoose");
const ChapterSchema=mongoose.Schema({
    sub:{
        type:String
    },
    chapter:{
        type:String
    },
 
        mcq: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Mcq",
          },vshort: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Vshort",
          },short: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Short",
          },longq: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Longq",
          }
    
})
const Chapter=mongoose.model("Chapter",ChapterSchema)
module.exports=Chapter;