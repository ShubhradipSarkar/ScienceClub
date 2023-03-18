const mongoose=require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/SSCpeeps",{
    
}).then(()=>{
    console.log('connected db');
}).catch((e)=>{
    console.log(e);
});