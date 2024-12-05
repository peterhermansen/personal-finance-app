const dotenv = require("dotenv");

// Specify location of environment variables
dotenv.config({ path: "./config.env" });

// app must be required after environment variable to get access to them
const app = require("./app");

// Start express server on specified port
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
