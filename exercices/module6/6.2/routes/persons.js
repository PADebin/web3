const router = require("express").Router();

const Person = require("../models/person");

// GET /persons : récupère toutes les personnes depuis MongoDB
router.get("/", (req, res) => {
  Person.find({}).then((persons) => {
    res.json(persons);
  });
});

// GET /persons/:id : récupère une personne par id depuis MongoDB
router.get("/:id", (req, res, next) => {
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

// DELETE /persons/:id : supprime une personne dans MongoDB
router.delete("/:id", (req, res, next) => {
  Person.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.status(204).end();
    })
    .catch((error) => next(error));
});

router.post("/", (req, res) => {
  const personPayload = req.body;
  const errorMessages = [];
  if (!personPayload.name) {
    errorMessages.push("The name must be present");
  }
  if (!personPayload.number) {
    errorMessages.push("The number must be present");
  }

  if (errorMessages.length > 0) {
    return res.status(422).json({ errorMessages });
  }

  const person = new Person({
    name: personPayload.name,
    number: personPayload.number,
  });

  person
    .save()
    .then((savedPerson) => {
      res.json(savedPerson);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

// PUT /persons/:id : met à jour le numéro d'une personne dans MongoDB
router.put("/:id", (req, res, next) => {
  const personPayload = req.body;
  const update = {
    name: personPayload.name,
    number: personPayload.number,
  };
  Person.findByIdAndUpdate(req.params.id, update, {
    new: true,
    runValidators: true,
  })
    .then((updatedPerson) => {
      if (updatedPerson) {
        res.json(updatedPerson);
      } else {
        res.status(404).end();
      }
    })
    .catch((error) => next(error));
});

module.exports = router;
