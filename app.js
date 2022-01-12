let express = require('express');
const { listen } = require('express/lib/application');
let mongoose = require('mongoose');
app = express();
const router = require('./routes/index');

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/blogs', {useNewUrlParser:true})
app.get('/', (req, res)=>{
    res.json({message: "Hello World"});
});

app.listen(3000, ()=>{
    console.log("Express Has Started!")
});