const express = require('express')
const mongoose =require('mongoose')
const app = express()
const port = process.env.PORT||3000
const Expence= require('./expence')


mongoose.connect('mongodb+srv://dhanapalc:Dhanapal2020@cluster0.plctvbo.mongodb.net/demoDB?retryWrites=true&w=majority'),{
// mongoose.connect('mongodb://127.0.0.1:27017/demoDB',{
     useUnifiedTopology: true
 };
app.use(express.json());

app.get('/expence',async (req, res) => {
   const ex= await Expence.find()
  res.json(ex)
})


app.get('/expence/:id',async (req, res) => {
  try{
    const _id=req.params.id;
    const ex= await Expence.findById({_id});
    if(ex)
    {
      res.json(ex);
    }
    else{
      res.send("no id");
    }
   
  }catch{
    res.send(err);
  }
 })
 app.delete('/expence_delete/:id',async (req, res) => {
  try{
    const _id=req.params.id;
    const ex= await Expence.findByIdAndDelete({_id});
    if(ex)
    {
      res.json(ex);
    }
    else{
      res.send("no id");
    }
   
  }catch{
    res.send(err);
  }
 })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


app.post('/expence_create',async (req, res) => {

    const newData=req.body;
    const ex= await Expence.create(newData);
    res.send("Success");
  
 })


 app.put('/expence_update/:id',async (req, res) => {

  try{
    const _id=req.params.id;
    const update_data=req.body;
    const ex= await Expence.findByIdAndUpdate({_id},{$set:update_data},{new: true});
    if(ex)
    {
      res.json(ex);
    }
    else{
      res.send("no id");
    }
   
  }catch{
    res.send(err);
  }

})