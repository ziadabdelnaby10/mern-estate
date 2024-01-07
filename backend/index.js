import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js'

dotenv.config();

const uri = process.env.MONGO;


mongoose.connect(uri).then(
    () => {
        console.log("Connected to MongoDB!");
    }
).catch(
    (err) => {
        console.log("Error connecting to DB :" + err);
    }
);
const app = express();

app.listen(3000, () => {
    console.log("Server is running on port 3000!!!!");
});

app.use("/api/user", userRouter);

/* 
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://ziadabdelnaby46:<password>@mern-estate.pbatzkq.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
*/