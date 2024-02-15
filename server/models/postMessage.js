import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
  username: String,
  text: String,
  creator: String,
});

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  name: String,
  creator: String,
  username: String,
  tags: [String],
  selectedFile: String,
  likes: { type: [String], default: [] },
  // comments: { type: [String], default: [] },
  comments: { type: [commentSchema], default: [] },
  createdAt: { type: Date, default: new Date() },
});

const PostMessage = mongoose.model("PostMessage", postSchema);
export default PostMessage;
