const express = require("express");
const { connectDB } = require("./database/connet.db");
const userRouter = require("./routes/user.route");
const blogRouter = require("./routes/blogs.route");
const bodyParser = require("body-parser");
var cors = require('cors');
const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello boi, its crappy server! 😵‍💫");
});

app.use("/api/user", userRouter);
app.use("/api/blog", blogRouter);

app.listen(1010, async () => {
    await connectDB();
    console.log("server Started 🌐");
});
