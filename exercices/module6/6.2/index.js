require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const personsRoutes = require("./routes/persons");
const Person = require("./models/person");

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

// API RESTful compatible avec le frontend
app.use("/persons", personsRoutes);

// GET /api/persons : toutes les personnes
app.get("/api/persons", (req, res, next) => {
  Person.find({})
    .then((persons) => res.json(persons))
    .catch((error) => next(error));
});

// GET /api/persons/:id : une personne par id
app.get("/api/persons/:id", (req, res, next) => {
  Person.findById(req.params.id)
    .then((person) => {
      if (person) {
        res.json(person);
      } else {
        res.status(404).end();
      }
    })
    .catch((error) => next(error));
});

// GET /info : infos sur le répertoire
app.get("/info", (req, res, next) => {
  Person.countDocuments({})
    .then((count) => {
      res.send(
        `<p>Phonebook has info for ${count} people</p><p>${new Date()}</p>`
      );
    })
    .catch((error) => next(error));
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
