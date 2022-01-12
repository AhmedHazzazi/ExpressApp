const { response } = require("express");
const User = require("../models/user");
module.exports = {
    index: (req, res)=>{
        User.find({}).then(users=>{
            res.json({users});
        })
        .catch(error=>{
            res.json({error: error});
        })
    },
    show: (req, res)=>{
        let userId = req.params.uid;
        User.findById(userId).then(user =>{
            res.json({user});
        })
        .catch(error =>{
            res.json({error: error});
        })
    },
    update: (req, res)=>{
        let userId = req.params.uid;
        let userInfo = {
            name: req.body.name,
            age: req.body.age,
            email: req.body.email
        }
        User.findByIdAndUpdate(userId, {$set: userInfo}).then(user=>{
            res.json({message: "User Information Has been Updated"});
        })
        .catch(error=>{
            res.json({error: error});
        })
    },
    delete: (req, res)=>{
        let userId = req.params.uid;
        User.findByIdAndRemove(userId).then(()=>{
            res.json({message: "User Is Deleted"});
        })
        .catch(error =>{
            res.json({error: error});
        })
    }
}