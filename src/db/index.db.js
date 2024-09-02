import mongoose from "mongoose";

const connectDb = async () => {

    try {
         await mongoose.connect(process.env.MONGODB_URI)
    } catch (error) {
        console.log("index db js :: connect Db :: error ", error)
    }
}


export { connectDb }