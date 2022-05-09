# Albums project - using controller functions

Now we will update the "albums" router we have already created to use "controller" functions.

By the time we finish, our project should still work in the same way, but be more modular. :-)

---

## Instructions

---

- Create a new directory called `controllers`. 
- Create a new file in this directory called `albumsController.js`.
- Now we want to set up the controller functions for your "albums" routes. Go to your "albums" router (in `albums.js`, in the `routes` directory). 
- Inside the "albums" router, take all the handler functions from your routes, and move them to `albumsController.js`. - Make sure to also give each function a relevant name (e.g. `albumsPost`), and export each function as a named export.
- Import your new controller functions into the "albums" router. 
- Finally, add each imported controller function to the correct route. When a request is received by that route, the controller function should be called.

### Finally...

When you are done, test your changes by (1) loading your React app and (2) creating a new album. Make sure everything is still working correctly. :-)

