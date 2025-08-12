const mongoose = require('mongoose')

if (process.argv.length < 3) {
 console.log('Please provide arguments: node mongo.js <password> <name> <phoneNumber>')
 process.exit(1)
}

const password = process.argv[2]
const name = process.argv[3]
const phoneNumber = process.argv[4]

// Changer URL pour se connecter à la base de données
const url = `mongodb+srv://Padami:${password}@cluster0.xtbzc.mongodb.net/?retryWrites=true&w=majority`

const phonebookSchema = new mongoose.Schema({
 content: String,
 phoneNumber: String,
})

const Phonebook = mongoose.model('Phonebook', phonebookSchema)

if(process.argv.length === 3) {
    mongoose
    .connect(url)
    .then((result) => {
        Phonebook.find({}).then(result => {
            console.log('phonebook:')
            result.forEach(phonebook => {
                console.log(phonebook.content, phonebook.phoneNumber)
            })
            mongoose.connection.close()
          }).catch((err) => console.log(err))
    })
  }
else if (process.argv.length === 5) {
    mongoose
 .connect(url)
 .then((result) => {
   console.log('connected')

   return phonebook.save()
 })
 .then(() => {
   console.log('phone number saved!')
   return mongoose.connection.close()
 })
 .catch((err) => console.log(err))
}