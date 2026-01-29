require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
require("./db/mongoose");

// CORS middleware
app.use(cors());

// MAIN ROUTE FILES
require("./routes/main_routes")(app);

// SERVER LISTEN
app.listen(process.env.TEMPLATE_PORT, () => {
  console.log(
    `Server running on port ${process.env.TEMPLATE_PORT}`,
  );
});
