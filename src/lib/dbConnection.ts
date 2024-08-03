import mongoose, { connections } from "mongoose";

// isConnected is an inbuild property which stores the stage of db connection and we will use that later thats why storing it in an obj as a type
type connectionObject = {
    isConnected? : number
}
// next.js runs on edge thats why the will not be connected constantly like next express.js thats why we need conditional
// statements to see if the db is already connected or not is yes then will not try to connect again.

const connection: connectionObject = {} // this object is empty coz isConnected is optional, we will use it to store inConnected

async function dbConnect() : Promise<void> { // after connection we get a promise but we dont need the promise content thats why return type could be void
    if(!connection.isConnected){
        console.log("db is already connected");
        
    }

    try {
        
      const database = await mongoose.connect(process.env.MONGODB_URL || " ") // after this we will get (database.connections named array and from that array 0th element will be readystate)

      connection.isConnected = database.connections[0].readyState  // in isConnected storing readyState for above if else statement , readyState will be number

      console.log("database connected successfully");
      

    } catch (error: any) {
        console.log("database connection failed",error.message);
        process.exit(1) // if database connection fails then by this command Node.js process will be terminated.
    }
    
}

export default dbConnect