const express=require("express");
const mongoose=require("mongoose");
const menSchema=new mongoose.Schema({
    name:{
        type:String,
       
        
    },
    address:{
        type:String,
        
        
    },
    mobile:{
        type:Number,
        
    },   
    desig:{
        type:Number,
        
    }

}) 

const People=new mongoose.model("People",menSchema);

module.exports=People;