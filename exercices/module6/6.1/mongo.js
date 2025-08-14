const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log("Usage : node mongo.js <password> [name] [number]");
  process.exit(1);
}

const password = process.argv[2];
const name = process.argv[3];
const number = process.argv[4];

// Remplace "phonebook" par le nom de ta base si besoin
const url = `mongodb+srv://Padami:${password}@cluster0.xtbzc.mongodb.net/phonebook?retryWrites=true&w=majority&appName=Cluster0`;

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Person = mongoose.model("Person", personSchema);

mongoose
  .connect(url)
  .then(() => {
    if (name && number) {
      // Ajout d'une nouvelle entrée
      const person = new Person({ name, number });
      return person.save().then(() => {
        console.log(`added ${name} number ${number} to phonebook`);
        return mongoose.connection.close();
      });
    } else {
      // Affichage de toutes les entrées
      return Person.find({}).then((persons) => {
        console.log("phonebook:");
        persons.forEach((p) => {
          console.log(`${p.name} ${p.number}`);
        });
        return mongoose.connection.close();
      });
    }
  })
  .catch((err) => {
    console.error(err);
    mongoose.connection.close();
  });
