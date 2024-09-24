import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?: number
}

const connection: ConnectionObject = {}

async function dbConnect(): Promise<void> {

    if (connection.isConnected) {
        console.log('Alredy connected to database')
        return
    }

    try {
        const db = await mongoose.connect(process.env.MONGOODB_URI || "", {})

        connection.isConnected = db.connections[0].readyState

        console.log(" DB ", db);


    } catch (error) {

        console.log("DB failed", error);

        process.exit()

    }

}

export default dbConnect