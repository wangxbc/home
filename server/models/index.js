let mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/test-blog")
  .then((res) => {
    console.log("链接成功");
  })
  .catch((err) => {
    console.log(err);
  });

let Schema = mongoose.Schema;

let ArticleSchema = new Schema(
  {
    title: String,
    content: String,
    author: { type: Schema.Types.ObjectId, ref: "User" },
    tag: String,
    views: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);
ArticleSchema.virtual("coms", {
  ref: "Comment",
  localField: "_id",
  foreignField: "article_id",
  justOne: false,
  // count:true
});
ArticleSchema.set("toObject", { virtuals: true });
ArticleSchema.set("toJSON", { virtuals: true });
let Article = mongoose.model("Article", ArticleSchema);

let UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    nickname: {
      type: String,
      required: true,
      trim: true,
    },
    headImgUrl: String,
  },
  {
    timestamps: true,
  }
);

let User = mongoose.model("User", UserSchema);

let CommentSchema = new Schema({
  content: String,
  article_id: { type: Schema.Types.ObjectId, ref: "Article" },
  reply_user_id: { type: Schema.Types.ObjectId, ref: "User" },
});
let Comment = mongoose.model("Comment", CommentSchema);

module.exports = { Comment, User, Article };
