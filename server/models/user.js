import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  username: { type: String, required: true },
  id: { type: String },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  gender: { type: String, default: "" },
  birthday: { type: String, default: "" },
  country: { type: String, default: "" },
  city: { type: String, default: "" },
  bio: { type: String, default: "" },
  profilePhoto: { type: String, default: "" },
  telegram: { type: String, default: "" },
  instagram: { type: String, default: "" },
  youtube: { type: String, default: "" },
  twitter: { type: String, default: "" },
});

export default mongoose.model("User", userSchema);
