var express = require('express');
var router = express.Router();
var {Article} = require("../models/index")
/* GET home page. */
router.post('/', function(req, res, next) {
  console.log(req.body);
  console.log(req.auth.uid);
  Article.create({...req.body,
    author:req.auth.uid,
  }).then((r) => {
    res.json({
      code:1,
      msg:"文章发布成功"
    })
  }).catch((r) => {
    res.json({
      code:0,
      msg:"文章发布失败"
    })
  })
});
router.get('/users/:uid', function(req, res, next) {
  console.log(req.params);
  Article.find({author:req.params.uid})
  .populate("author",{password:0})
  .populate("coms").then((r) => {
    res.json({
      code:1,
      msg:"根据用户id获取文章成功"
    })
  }).catch((err) => {
    res.json({
      code:0,
      msg:"根据用户id获取文章失败"
    })
  })
});

router.get('/:aid', function(req, res, next) {
  console.log(req.params);
  Article.findByIdAndUpdate(
    req.params.aid,
    {$inc:{views:1}},
    {new:true}
  ).then((r) => {
    res.json({
      code:1,
      msg:"根据文章id查看文章详情成功",
      data: r
    })
  }).catch((err) => {
    res.json({
      code:0,
      msg:"根据文章id查看文章详情失败"
    })
  })
});
router.delete('/:aid', function(req, res, next) {
  console.log(req.params);
  Article.findOneAndDelete(req.params.aid).then((r) => {
    if(r) {
      res.json({
        code:1,
        msg:"根据文章id删除文章成功"
      })
    }else{
      res.json({
        code:1,
        msg:"根据文章id删除文章成功-已经不存在了"
      })
    }
  }).catch((err) => {
    res.json({
      code:0,
      msg:"根据文章id删除文章失败"
    })
  })
});
router.patch('/:aid', function(req, res, next) {
  console.log(req.params);
  console.log(req.body);
  Article.findByIdAndUpdate(
    req.params.aid,
    {...req.body},
    {new:true}
  ).then((r) => {
    res.json({
      code:1,
      msg:"根据文章id编辑文章成功"
    })
  }).catch((err) => {
    res.json({
      code:0,
      msg:"根据文章id编辑文章失败"
    })
  })
});
module.exports = router;
