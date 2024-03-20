const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose
        .connect(
            "mongodb+srv://piyush:wkpQq8SHSZbvM363@cluster0.bxfreba.mongodb.net/BlogDB?retryWrites=true&w=majority&appName=Cluster0"
        )
        console.log("DB connected 🫱🏽‍🫲🏼")
};

module.exports = { connectDB };
