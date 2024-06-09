import mongoose from "mongoose";

const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URL, {
        dbName: "NEW_PORTFOLIO"
    }).then(() => {
        console.log("Connected to database.");
    }).catch((error) => {
        console.log(`Some Error Occurred While Connecting To Database: ${error}`);
    });
};

export default dbConnection;
