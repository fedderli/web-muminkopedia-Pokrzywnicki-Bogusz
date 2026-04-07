import mongoose from "mongoose";

const connectDB = async ():Promise<void> => {
    const MONGODB_URI = process.env.MONGODB_URI;

    if (!MONGODB_URI) {
        throw new Error("MongoDB URI is missing");
    }

    await mongoose.connect(MONGODB_URI);
    console.log("Pomyslnie polaczone z mongoDB");
};

export default connectDB;