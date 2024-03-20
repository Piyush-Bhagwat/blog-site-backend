const { createUser, login } = require("../controllers/user.cont");

const userRouter = require("express").Router();

userRouter.get("/", (req, res) => {
    res.send("user routes");
});

userRouter.post("/create", async (req, res) => {
    const email = req.body.email;
    const pass = req.body.pass;
    const name = req.body.name;

    if (await createUser({ name, email, pass })) {
        res.send("user-created");
    } else {
        res.send("invalid");
    }
});

userRouter.get("/login", async (req, res) => {
    const email = req.query.email;
    const pass = req.query.pass;

    const user = await login({ email, pass });

    if (user) {
        res.send(user);
    } else {
        res.send("invalid");
    }
});

module.exports = userRouter;
