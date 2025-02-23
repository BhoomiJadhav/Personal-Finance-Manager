const mongoose = require("mongoose");
require("dotenv").config();

const ConnecttToDB = () => {
  const MONGODB_URI = process.env.MONGODB_URI;

  if (!MONGODB_URI) {
    console.error(
      "Error: MONGODB_URI is not defined in the environment variables."
    );
    process.exit(1);
  }

  mongoose
    .connect(MONGODB_URI)
    .then(() => console.log("Connected to MongoDB!"))
    .catch((err) => {
      console.error("Error connecting to MongoDB:", err);
    });
};

module.exports = ConnecttToDB;
