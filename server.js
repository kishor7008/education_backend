const express=require("express");
const app=express();
const cors=require("cors")
const bcrypt=require("bcryptjs")
const config=require('./config/config')
const Question=require("./models/QuestionSchma")
const Short=require('./models/ShortQuestion')
app.use(cors());
app.use(express.json())
config()

app.get("/",(req,res)=>{
    res.send("wck")
})

app.post('/question',async(req,res)=>{
const response=new Question(req.body);
await response.save();
res.json(response)
})


app.get("/allquestions",async(req,res)=>{
    const response=await Question.find()
    res.json(response)
})

app.get('/question/:id',async(req,res)=>{
    const id=req.params.id;
    const response=await Question.findOne({id:id});
    res.json(response)
})

app.post("/short/question",async(req,res)=>{
 const response=new Short(req.body)
 await response.save();
 res.json(response)
})

app.get('/get/short/question',async(req,res)=>{
    const response=await Short.find();
    res.json(response)
})
app.get('/get/short/question/:id',async(req,res)=>{
    const id=req.params.id;

    const response=await Short.findOne({id:id});
    res.json(response)
})
app.listen(4000,()=>{
    console.log("server started")
})