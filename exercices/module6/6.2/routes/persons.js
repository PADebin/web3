const router = require("express").Router();

const Person = require("../models/person");

// GET /persons : récupère toutes les personnes depuis MongoDB
router.get("/", (req, res) => {
  Person.find({}).then((persons) => {
    res.json(persons);
  });
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const person = allPersons.find((person) => person.id === id);

  if (person) {
    res.json(person);
  } else {
    res.status(404).end();
  }
});

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const personIndex = allPersons.findIndex((person) => person.id === id);
  if (personIndex > -1) {
    allPersons.splice(personIndex, 1); // We do NOT use delete because it creates a sparse array with a wrong length
  }
  res.status(204).end();
});

router.post("/", (req, res) => {
  const personPayload = req.body;
  const errorMessages = [];
  if (!personPayload.name) {
    errorMessages.push("name must be present");
  }
  if (!personPayload.number) {
    errorMessages.push("number must be present");
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

router.put("/:id", (req, res) => {
  const personPayload = req.body;
  const id = Number(req.params.id);
  const personIndex = allPersons.findIndex((person) => person.id === id);
  if (personIndex === -1) {
    res.status(404).end();
  } else {
    const updatedPerson = { ...personPayload, id: allPersons[personIndex].id };
    allPersons[personIndex] = updatedPerson;
    res.json(updatedPerson);
  }
});

module.exports = router;
