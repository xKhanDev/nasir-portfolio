import mongoose from "mongoose";

const connectDB = async()=>{
  try {
      await mongoose.connect(`${process.env.MONGO_DB_URL}`);
      console.log("DB connected");
      return true
  } catch (error) {
    console.log("ERROR IN DB CONNECTION",error);
    process.exit(1);
  }
}

export default connectDB;