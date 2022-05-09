# Using express.Router

Now let's bring `express.Router` into your server logic.

---

## Instructions

---

1. First, you should **change** the following routes in `index.js`:

- The path of your `POST` route should be changed from "/new-album" to "albums" - e.g. 

```js
`app.post("/albums", (req, res) => {...}`)
```

- The path of your `DELETE` route should be changed from "/delete-albums" to "albums" - e.g.

```js
`app.delete("/albums", (req, res) => {...}`)
```

- Once you have made these changes, you should also change your logic in the frontend so your `fetch` requests are being sent to the new routes.
- Before you go forward, you should test your frontend to make sure you can still create a new album, and delete all albums, in the same way as before.

---

2. Next, create a "routes" directory in your backend. This should contain one file, called `albums.js`.

---

3. Try to create an **Express router** serving the "/albums" endpoint. Remember: you now have three routes for this path:

    - GET /albums
    - POST /albums
    - DELETE /albums

- Remember that all your routing logic should now live in `albums.js`.
- Don't forget that you will now also to import the functionality for your routes to work properly into `albums.js`.
- Don't forget to also `export` your router.
- All you need to do in `index.js` is to `import` your router, and register it using `app.use()`.
- If you have done this correctly, your React app will still work correctly:
    - The list of albums will load when your app first renders
    - You will be able to add a new album
    - You will be able to delete all albums

---

## If you finish early...

4. Try to change your **frontend** logic so that the current list of albums is rendered when the app **first** loads.
    - To do this, you will need to create a `useEffect` in `App.js`, which executes only once, when the app first renders.
    - If you look in your server, you will find a route serving `GET` requests to the "/albums" path.
    - Your `useEffect` should make a `fetch` request to this route, and use the returned data to update the `albums` state variable.
    - If this is working, you should immediately see a list of albums when your page first renders. 
        - **Hint:** If you don't, make sure there is at least one album object in your database file before you try other bug fixes!