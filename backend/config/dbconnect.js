const mongoose = require('mongoose');
require('dotenv').config();

exports.dbconnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to the database");
    } catch (error) {
        console.error("Cannot connect to the database:", error.message);
        // Optionally, you can terminate the process if the database connection fails
        process.exit(1);
    }
};
