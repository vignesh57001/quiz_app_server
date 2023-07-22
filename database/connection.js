import mongoose from "mongoose";

export default async function connect() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("MONGO DB database connected successfully");
}
