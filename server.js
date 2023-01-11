const express = require("express");
const app = express();
const cors = require("cors")
const bcrypt = require("bcryptjs")
const config = require('./config/config')
const Question = require("./models/QuestionSchma")
const Short = require('./models/ShortQuestion')
const User = require("./models/UserSchema")
const geterateToken = require("./utils/generateToken")
const VeryShort=require('./models/VeryShortSchema')
const Long=require("./models/LongQuestion")
app.use(cors());
app.use(express.json())
config()

app.get("/", (req, res) => {
    res.send("wck")
})
// mcq Question/

app.post('/question', async (req, res) => {
    const response = new Question(req.body);
    await response.save();
    res.json(response)
})


app.get("/allquestions", async (req, res) => {
    const response = await Question.find()
    res.json(response)
})

app.get('/question/:id', async (req, res) => {
    const id = req.params.id;
    const response = await Question.findOne({ id: id });
    res.json(response)
})


//  short Questions
app.post("/short/question", async (req, res) => {
    const response = new Short(req.body)
    await response.save();
    res.json(response)
})

app.get('/get/short/question', async (req, res) => {
    const response = await Short.find();
    res.json(response)
})
app.get('/get/short/question/:id', async (req, res) => {
    const id = req.params.id;

    const response = await Short.findOne({ id: id });
    res.json(response)
})


// login/register
app.post("/register", async (req, res) => {
    let bcryptPass = await bcrypt.hash(req.body.password, 10);
    if (req.body.password == req.body.cpassword) {
        const response = new User({
            name: req.body.name,
            email: req.body.email,
            password: bcryptPass,
            cpassword: bcryptPass
        })
        await response.save()
        res.json(response)
    } else {
        res.json('eroor')
    }
})


app.post("/login",async(req,res)=>{
    const already=await User.findOne({email:req.body.email});
    // const validPassword = await bcrypt.compare(req.body.password, already.password);
  if(already && await bcrypt.compare(req.body.password, already.password)){
    res.json(
      {
        _id:already._id,
        name:already.name,
        email:already.email,
        password:already.password,
        token:geterateToken(already._id)
      }
    )
    
  }else{
  res.json("error")
  }
  })
  
// very short question

app.post("/veryshort/question", async (req, res) => {
    const response = new VeryShort(req.body)
    await response.save();
    res.json(response)
})
app.get('/get/veryshort/question', async (req, res) => {
    const response = await VeryShort.find();
    res.json(response)
})
app.get('/get/veryshort/question/:id', async (req, res) => {
    const id = req.params.id;

    const response = await VeryShort.findOne({ id: id });
    res.json(response)
})
// long question

app.post("/long/question", async (req, res) => {
    const response = new Long(req.body)
    await response.save();
    res.json(response)
})
app.get('/get/long/question', async (req, res) => {
    const response = await Long.find();
    res.json(response)
})
app.get('/get/long/question/:id', async (req, res) => {
    const id = req.params.id;

    const response = await Long.findOne({ id: id });
    res.json(response)
})
app.listen(4000, () => {
    console.log("server started")
})