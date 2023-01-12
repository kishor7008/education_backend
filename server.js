const express = require("express");
const app = express();
const cors = require("cors")
const bcrypt = require("bcryptjs")
const config = require('./config/config')
const Mcq=require('./models/mcaSchema')
const Short=require("./models/shortSchema")
const Vshort=require("./models/vshortSchema")
const Longq=require("./models/longSchema")
const Chapter=require("./models/chapterSchema")
app.use(cors());
app.use(express.json())
config()

app.get("/", (req, res) => {
    res.send("wck")
})
app.post("/mcq",async(req,res)=>{
 const response=new Mcq(req.body);
 await response.save();
 res.json(response)
})
app.post("/short",async(req,res)=>{
    const response=new Short(req.body);
    await response.save();
    res.json(response)
   })
   app.post("/vshort",async(req,res)=>{
    const response=new Vshort(req.body);
    await response.save();
    res.json(response)
   })
   app.post("/longq",async(req,res)=>{
    const response=new Longq(req.body);
    await response.save();
    res.json(response)
   })

   app.post("/chapter",async(req,res)=>{
    const response=new Chapter(req.body);
    await response.save();
    res.json(response)
   })

app.get("/mcqdata",async(req,res)=>{
    const response=await Chapter.findOne({'sub':'math'}).populate("mcq")
    res.json(response.mcq)
})
app.get("/vshortdata",async(req,res)=>{
    const response=await Chapter.findOne({'sub':'math'}).populate("vshort")
    res.json(response.vshort)
})
app.get("/shortdata",async(req,res)=>{
    const response=await Chapter.findOne({'sub':'math'}).populate("short")
    res.json(response.short)
})
app.get("/:subject/:chapter/longq/:id",async(req,res)=>{
    const id=req.params.id
    const subject=req.params.subject
    const chapter=req.params.chapter
    // let hm=req.params.hm
    
    const response=await Chapter.findOne({'sub':`${subject}`,chapter}).populate("longq")
 
res.json(response.longq.longq[id])
   
console.log(response)
})
app.get("/:subject/:chapter/short/:id",async(req,res)=>{
    const id=req.params.id
    const subject=req.params.subject
    const chapter=req.params.chapter
    // let hm=req.params.hm
    
    const response=await Chapter.findOne({'sub':`${subject}`,chapter}).populate("short")
 
res.json(response.short.short[id])
   
console.log(response)
})
app.get("/:subject/:chapter/vshort/:id",async(req,res)=>{
    const id=req.params.id
    const subject=req.params.subject
    const chapter=req.params.chapter
    // let hm=req.params.hm
    
    const response=await Chapter.findOne({'sub':`${subject}`,chapter}).populate("vshort")
 
res.json(response.vshort.vshort[id])
   
console.log(response)
})
app.get("/:subject/:chapter/mcq/:id",async(req,res)=>{
    const id=req.params.id
    const subject=req.params.subject
    const chapter=req.params.chapter
    // let hm=req.params.hm
    
    const response=await Chapter.findOne({'sub':`${subject}`,chapter}).populate("mcq")
 
res.json(response.mcq.mcq)
   
console.log(response)
})


app.listen(4000, () => {
    console.log("server started")
})