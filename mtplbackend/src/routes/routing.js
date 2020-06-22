const express = require('express');
const router = express.Router();
const service = require('../service/service');
var bodyParser = require('body-parser');
router.use(bodyParser.json());


router.get('/setupDb', (req, res, next) => {
    service.setupDb().then((data)=>{
        res.json(data)
    })
})

router.get('/getProvincesList',(req,res,next)=>{
    service.getProvincesList().then(data=>{
        res.json(data[0].array)
    })
})

module.exports = router;