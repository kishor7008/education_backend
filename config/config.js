const mongoose=require("mongoose");
const config=async()=>{
    try{
   await  mongoose.connect("mongodb+srv://kishor7008:kishor7008@cluster0.bugpswv.mongodb.net/?retryWrites=true&w=majority",()=>{
        console.log("mongodb connected")
    })
}catch(err) {
    console.log(err)
}

}
module.exports=config