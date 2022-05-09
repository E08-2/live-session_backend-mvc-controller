import { db } from "../index.js";

// POST "/users" controller function

export const usersPost = async (req, res, next) => {
    const { name, age } = req.body;

    const newUser = {
        name: name,
        age: age,
        id: db.data.users.length + 1
    }

    // Update the "currentData" array with the new user
    db.data.users.push(newUser);

    await db.write();

    res.json(db.data.users) // Updated array, with the new user object inside it
}

// DELETE "/users" controller function

export const usersDelete = async (req, res) => {
    // Remove the last item in the db.data.users array
    db.data.users.pop();  

    // Write this change to our database file
    await db.write();

    // Send a response with the latest version of the users array (minus the user we deleted!)
    res.json(db.data.users);
}