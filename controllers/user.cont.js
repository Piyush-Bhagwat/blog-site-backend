const { userModel } = require("../database/schema.db.js");

const createUser = async (data) => {
    const { name, email, pass } = data;
    console.log(data);
    if (name != "" && email != "" && pass != "") {
        await userModel.insertMany(data);
        console.log("user created");
        return true;
    }

    return false;
};

const login = async (data) => {
    const user = await userModel.findOne({
        email: data.email,
        pass: data.pass,
    });

    return user;
};

module.exports = { createUser, login };
