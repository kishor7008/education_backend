const express = require("express");
const app = express();
const cors = require("cors")
const bcrypt = require("bcryptjs")
const config = require('./config/config')
const Mcq = require('./models/mcaSchema')
const Short = require("./models/shortSchema")
const Vshort = require("./models/vshortSchema")
const Longq = require("./models/longSchema")
const Chapter = require("./models/chapterSchema")
const User=require('./models/userSchema')
app.use(cors());
app.use(express.json())
config()

app.get("/", (req, res) => {
    res.send("wck")
})
// add mcq question
app.post("/mcq", async (req, res) => {
    const response = new Mcq(req.body);
    await response.save();
    res.json(response)
})
// add short question
app.post("/short", async (req, res) => {
    const response = new Short(req.body);
    await response.save();
    res.json(response)
})

//    add vshort qyestion
app.post("/vshort", async (req, res) => {
    const response = new Vshort(req.body);
    await response.save();
    res.json(response)
})
//    add longq question
app.post("/longq", async (req, res) => {
    const response = new Longq(req.body);
    await response.save();
    res.json(response)
})

// add sub,chapter,ref of mcq,ref of short,ref of vshort,ref of longq

app.post("/chapter", async (req, res) => {
    const response = new Chapter(req.body);
    await response.save();
    res.json(response)
})



// getting all mcq data
app.get("/mcqdata", async (req, res) => {
    const response = await Chapter.findOne({ 'sub': 'math' }).populate("mcq")
    res.json(response.mcq)
})
// getting all vshort question
app.get("/vshortdata", async (req, res) => {
    const response = await Chapter.findOne({ 'sub': 'math' }).populate("vshort")
    res.json(response.vshort)
})
// getting short question
app.get("/shortdata", async (req, res) => {
    const response = await Chapter.findOne({ 'sub': 'math' }).populate("short")
    res.json(response.short)
})



// app.get("/:subject/:chapter/longq/:id", async (req, res) => {
//     const id = req.params.id
//     const subject = req.params.subject
//     const chapter = req.params.chapter
//     const response = await Chapter.findOne({ 'sub': `${subject}`, chapter }).populate("longq")

//     res.json(response.longq.longq[id])

//     console.log(response)
// })

// app.get("/:subject/:chapter/short/:id", async (req, res) => {
//     const id = req.params.id
//     const subject = req.params.subject
//     const chapter = req.params.chapter

//     const response = await Chapter.findOne({ 'sub': `${subject}`, chapter }).populate("short")

//     res.json(response.short.short[id])

//     console.log(response)
// })

app.get("/:subject/:chapter/:question/:id", async (req, res) => {
    const id = req.params.id
    const subject = req.params.subject
    const chapter = req.params.chapter
    const question=req.params.question
console.log(question)
    const response = await Chapter.findOne({ 'sub': `${subject}`, chapter }).populate(`${question}`)

    res.json(response[`${question}`][`${question}`][id])
    console.log(response[`${question}`][`${question}`][id])
})






app.get("/:subject/:chapter/mcq", async (req, res) => {
    const id = req.params.id
    const subject = req.params.subject
    const chapter = req.params.chapter
    // let hm=req.params.hm

    const response = await Chapter.findOne({ 'sub': `${subject}`, chapter }).populate("mcq")

    res.json(response.mcq.mcq)

    console.log(response)
})


app.post('/register', async (req, res) => {
    let userExist = await User.findOne({ "email": req.body.email });
console.log(userExist)
    let hashPassword = await bcrypt.hash(req.body.password, 10);
    if (userExist) {
        
        res.status(401).json("already exist");
        return;
    }
        if (req.body.password == req.body.confirmPassword) {
            let response = new User({
                name: req.body.name,
                email: req.body.email,
                password: hashPassword,
                confirmPassword: hashPassword
            })
            await response.save()
            res.status(201).json(response)
        }else{
        res.status(400).json("password not match");
            
        }
    
})




app.listen(4000, () => {
    console.log("server started")
})