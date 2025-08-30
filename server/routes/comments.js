let express = require("express");
let router = express.Router();
let { Comment } = require("../models/index");

router.post("/", function (req, res) {
  req.body;
  req.auth.uid;
  Comment.create({
    reply_user_id: req.auth.uid,
    article_id: req.body.article_id,
    content: req.body.content,
  })
    .then((r) => {
      res.json({
        code: 1,
        msg: "发布评论成功",
      });
    })
    .catch((err) => {
      res.json({
        code: 1,
        msg: "发布评论失败",
      });
    });
});

router.get("/articles/:aid", function (req, res) {
  Comment.find({ article_id: req.params.aid })
    .populate("reply_user_id", { password: 0 })
    .then((r) => {
      res.json({
        code: 1,
        msg: "查询评论成功",
        data: r,
      });
    })
    .catch((err) => {
      es.json({
        code: 1,
        msg: "查询评论失败",
      });
    });
});

router.delete("/:cid", async function (req, res) {
  let commentObj = await Comment.findById(req.params.cid).populate(
    "article_id"
  );
  let author_id = commentObj.article_id.id;
  if (author_id == req.auth.uid) {
    let r = await Comment.findByIdAndDelete(req.params.cid);
    if (r) {
      res.json({
        code: 1,
        msg: "评论删除成功",
      });
    } else {
      res.json({
        code: 0,
        msg: "删除评论-已经被删除",
      });
    }
  }
});
module.exports = router;
