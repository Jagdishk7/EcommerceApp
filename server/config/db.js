import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectMongo = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected to: ${connectMongo.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
