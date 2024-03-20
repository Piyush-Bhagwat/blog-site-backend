const { createBlog } = require("../controllers/blog.cont");
const { blogModel } = require("../database/schema.db");

const blogRouter = require("express").Router();

blogRouter.get("/", (req, res) => {
    res.send("Blog routes");
});

blogRouter.get("/getAllBlogs", async (req, res) => {
    const blogs = await blogModel.find();

    res.send(blogs);
});

blogRouter.post("/create", async (req, res) => {
    const title = req.body.title;
    const content = req.body.content;
    const time = parseInt(req.body.time);
    const creator = req.body.user;

    const tags = req.body.tags;
    const displayImage = req.body.img;
    console.log({title, content, time, tags, displayImage});
    await createBlog({ title, content, time, creator, tags, displayImage });

    res.send("added")
});

module.exports = blogRouter;
