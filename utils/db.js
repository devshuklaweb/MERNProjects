const mongoose = require("mongoose")

const URI = "mongodb://localhost:27017/website_mern";

const connectDB = async () => {

    try {

        await mongoose.connect(URI);
        console.log("DB connected successfully");

    } catch (error) {
        console.error("Database connection failed.");
        process.exit(0);
    }
}

module.exports = connectDB;