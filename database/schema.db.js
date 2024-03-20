const { ObjectId } = require("mongodb");
const { Schema, model } = require("mongoose");

const userSchma = new Schema({
    name: String,
    email: String,
    pass: String,
});

const blogSchema = new Schema({
    title: String,
    creator: { type: Schema.Types.ObjectId },
    time: Number,
    content: String,
    displayImage: String,
    tags: [String],
});

const userModel = model("user", userSchma);
const blogModel = model("blog", blogSchema);

module.exports = { userModel, blogModel };
