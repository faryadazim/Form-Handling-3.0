var express = require("express")
var router = express.Router();


let {addData,updateData,deleteData,DataForm} = require('./imageController')

let {uploadImage} = require('../config/Multer')

router.get('/', (req,res)=>{   
    // addData(req,res)
    console.log("workinf add Data")
    res.send("workinf add Data")
})

router.post('/addData', (req,res)=>{   
    addData(req,res) 
})


router.put('/updateData', (req,res)=>{   
    updateData(req,res) 
})

router.delete('/deleteData', (req,res)=>{   
    deleteData(req,res) 
})
router.post('/formData',uploadImage, (req,res)=>{   
    DataForm(req,res) 
})




module.exports = router;