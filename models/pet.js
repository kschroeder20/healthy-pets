const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const petSchema = new Schema({
  uid: String,
  date: { type: Date, default: Date.now },
  petName: String,
  petImage: { data: Buffer, contentType: String },
  petBirthday: String,
  petColor: String,
  petBreed: String,
  petSpecies: String,
  petSex: String,
  petWeight: Number,
  petRabiesTag: Number,
  petMicroChip: Number,
  petMedications: String,
  petInoculations: String,
  petAllergies: String,
  petFood: String,
  petProcedures: String,
  petUrl: String,
});

const Pet = mongoose.model("Pet", petSchema);

module.exports = Pet;
