const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

mongoose.connect('mongodb+srv://dbUser:dbUserPassword@cluster0.5f4pmwb.mongodb.net/uems?retryWrites=true&w=majority').catch((err) => {
    console.log(err)
})
const postSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})
const LoginUsers = mongoose.model("LoginUsers", postSchema);

const scheduleSchema=new mongoose.Schema({
    name:String,
    type:String,
    description:String,
    date:String,time:String,
    venue:String,
    eattendes:String,
    item1:Number,
    item2:Number,
    item3:Number

})
const Schedule=mongoose.model("Schedule",scheduleSchema);
app.post('/schedule',async(req,res)=>{
    try {
        const {name,type,description,date,time,venue,eattendes,item1,item2,item3}=req.body;
     let newEvent=new Schedule({name,type,description,date,time,venue,eattendes,item1,item2,item3})
     await newEvent.save();
     return res.status(200).send("user Registered");
     
    } catch (err) {
        console.log(err);
        return res.status(500).send("server error");
    }
})
app.get('/', (req, res) => {
    res.send("shutUp and do the work")
})
app.post('/login', async (req, res) => {
    try {
        let exist = await LoginUsers.findOne({username: req.body.username});
        // console.log(exist)
        if(!exist){
            return res.status(200).json({message:"username not found"});
        }
        if(exist.password!=req.body.password){
            return res.status(200).json({message:"wrong password"});
        }
        return res.json({
            status:200,
            message:"user found",
            found:true
        })
    }
    catch (err) {
        console.log(err);
        return res.status(500).send("server error");
    }
})

app.get('/schedule',(req,res)=>{
    Schedule.find({},(err,collections)=>{
        if(err){
            console.log(err);
        }else{
            collections.forEach(element => {
                console.log(element)
            });
            // console.log(collections)
            res.json(collections)
        }
    })
})

app.listen(3001, () => {
    console.log("server runnung at http://localhost:3001/")
})


