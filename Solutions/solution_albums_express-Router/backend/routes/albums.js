import express from "express";
import { v4 as uuid } from "uuid";
import { db } from "../index.js";

const router = express.Router();

// Create an "/albums" route serving GET requests
// This will send a response containing the current array of album objects, in JSON format 
router.get("/", (req, res) => {
    res.json(db.data.albums);
})

// Create a "/new-album" route serving POST requests
// This should receive data in the format { "band": "x", "albumTitle": "y", "albumYear": "z" }
router.post("/", async (req, res) => {
    const { band, albumTitle, albumYear } = req.body;

    // Here we can use .find() to check if the new album already exists in our db.data
    // Two options:
    //  - If we find an album in our data with the same band, title and year as the album sent from the frontend, "found" will return the album that was found
    //  - If we find NO album with the same band, title and year as the album sent from the frontend, "found" will return "undefined"
    const found = db.data.albums.find(album => album.band === band && album.albumTitle === albumTitle && album.albumYear === albumYear)

    // "If we DIDN'T find a matching album in our data"
    // Create the new album object, give it an id, add it to our db, and send a response with the updated album list
    if (!found) {
        const newAlbum = {
            id: uuid(),
            band: band,
            albumTitle: albumTitle,
            albumYear: albumYear
        }
    
        db.data.albums.push(newAlbum);
    
        await db.write();
        
        console.log(`New album added to the albums array with id ${newAlbum.id}`);
            
        res.status(201).json(db.data.albums);
    } else {
        // Else, if we DID find a matching album...
        // Don't do anything - just respond with the list of albums unchanged
        res.json(db.data.albums);   
    }
})

// localhost:3000/route --> Change what the user can see -> React routing - load a new component in the frontend
// localhost:3001/route --> Change something in the backend - invisible to the user -> send/get some data -> send response to the frontend so it is up to date

router.delete("/", async (req, res) => {
    // Reset db.data.albums to an empty array
    db.data.albums = [];

    // Update the db.json file
    await db.write();

    // Send the new, empty array in your response to the frontend
    res.json(db.data.albums);
})

export default router;