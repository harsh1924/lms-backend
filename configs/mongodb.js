import mongoose from "mongoose";

// ? Connect to the MongoDB Database

const connectDB = async () => {
    mongoose.connection.on('connected', () => console.log('Databse Connected'))

    await mongoose.connect(`${process.env.MONGODB_URI}/LMSbackend`)
}
 
export default connectDB;