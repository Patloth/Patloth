const express = require('express');
const logger = require('./logger')

const router = express.Router();

router.get('allcandidates', function (req, res) {
    console.log('------------------')
    let arr=["anu","arun","lalu","kgf","srinu","yogi"]
    res.send(arr)
});
/*router.get('candidates', function (req, res) {
    console.log('------------------')
    let arr=["anu","arun","lalu","kgf","srinu","yogi"]
    let a=req.query.count
    let result=arr.slice(o,a)
    res.send(result)
});*/