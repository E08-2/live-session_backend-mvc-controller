import express from "express";
import cors from "cors";
import { Low, JSONFile } from "lowdb";
import albumsRouter from "./routes/albums.js";

const app = express();

const adapter = new JSONFile("./data/db.json");
export const db = new Low(adapter);

// Get a copy of the current data from the "data/db.json" file.
await db.read();

// This allows ALL cors requests to all our routes
app.use(cors());

// We can use express's .json() method to parse JSON data received in any request
app.use(express.json());

app.use("/albums", albumsRouter);

app.listen(3001, () => {
    console.log("Server has started on port 3001!");
})