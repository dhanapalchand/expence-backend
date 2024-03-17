const mongoose=require('mongoose');
const expenceSchema=new mongoose.Schema({
    amount:Number,
    desc:String,
    title:String, 
});
const Expence =mongoose.model('expenses',expenceSchema);
module.exports=Expence;
