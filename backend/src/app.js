const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
require("../src/db/conn");
const People=require("../src/models/mens");

var cors = require('cors')

app.use(cors())

app.use(express.json());
app.get("/",(req,res)=>{
    res.send("hello");
})
app.post("/mens",async(req,res)=>{
    try{
        const add=new People(req.body);
        console.log("try is running");
        console.log(req.body);
        const mens=await add.save();
        res.status(201).send(mens);
    }catch(e){
        res.send(e);
    }
})
///////////////////////////
app.get("/mens",async(req,res)=>{
    try{
        
        const data_of_men=await People.find({});
        res.send(data_of_men);
    }catch(e){
        res.send(e);
    }
})
///////////////////////////
app.get("/mens/:id",async(req,res)=>{
    try{
        _id=req.params.id;
        const data_of_individual_men=await People.find({_id});
        res.send(data_of_individual_men);
    }catch(e){
        res.send(e);
    }
})
///////////////////////////
app.listen(port,()=>{
    console.log(`connected at port no ${port}`);
})