// Import the Express application from src/app.js
require("dotenv").config();

const app = require("./src/app");

const port = process.env.APP_PORT;
// Start the server and listen on the specified port
app
  .listen(port, () => {
    console.info(`Server is listening on ${port}`);
  })
  .on("error", (err) => {
    console.error("Error:", err.message);
  });
