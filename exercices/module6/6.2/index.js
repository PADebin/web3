require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const personsRoutes = require("./routes/persons");

const PORT = process.env.PORT || 3001;
const app = express();

// Connexion à MongoDB
const url = process.env.MONGODB_URI;
console.log("connecting to", url);
mongoose
  .connect(url)
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log("error connecting to MongoDB:", error.message);
  });

app.use(express.json());

const { corsMiddleware, errorHandler } = require("./utils/middlewares");
app.use(corsMiddleware);

app.use("/persons", personsRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
