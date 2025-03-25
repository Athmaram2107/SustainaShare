const express=require('express');
const app=express();
const cors=require('cors');
const dotenv=require('dotenv');
const mongoose=require('mongoose');
const PORT=4000;

dotenv.config();

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON data

main().then(()=>{
    console.log('connection successful');
}).catch((err)=>{
    console.log(err);
})

async function main (){
    await mongoose.connect('mongodb://127.0.0.1:27017/FoodShare');
}

app.get('/',(req,res)=>{
    res.send("hello this is food share platform");
})

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
});