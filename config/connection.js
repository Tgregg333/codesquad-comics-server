const mongoose = require('mongoose');
require('dotenv').config();

async function main() {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("MongoDB database is connected");
    } catch (error) {
        console.log("There was an error connecting to the database: ${error}")
    }
}

main();