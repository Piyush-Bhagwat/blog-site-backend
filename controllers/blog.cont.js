const { blogModel } = require("../database/schema.db");

const createBlog = async (data) => {
    await blogModel.insertMany(data);
};

module.exports = { createBlog };
