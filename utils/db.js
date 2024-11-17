const mongoose = require("mongoose")

const URI = process.env.MONGOOSE_URI;

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