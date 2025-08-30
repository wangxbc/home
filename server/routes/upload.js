var express = require('express');
var router = express.Router();

var multer = require("multer")
let path = require("path")
var storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"public/images")
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+path.extname(file.originalname))
    }
})

var upload = multer({storage:storage}).single("file")

router.post('/',upload,function(req,res){
    let file = req.file
    let imgUrl = "/images/" + file.filename
    res.json({
        code:1,
        msg:"上传成功",
        data:imgUrl,
    })
})

module.exports = router