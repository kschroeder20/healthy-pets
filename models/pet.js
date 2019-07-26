const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const petSchema = new Schema({
    ownerName: String,
    homePhone: String,
    uid: String,
    mobilePhone: String,
    email: String,
    address: String,
    vetName: String,
    vetPhone: String,
    vetEmail: String,
    vetAddress: String,
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
    petProcedures: String
    // pets: [{
    //     name: String,
    //     image: { data: Buffer, contentType: String },
    //     birthday: { type: Date },
    //     species: String,
    //     color: String,
    //     breed: String,
    //     sex: String,
    //     weight: Number,
    //     rabiesTag: Number,
    //     microchip: Number,
    //     medications: Array,
    //     inoculations: Array,
    //     allergies: Array,
    //     food: Array,
    //     procedures: Array
    // }]
});

const Pet = mongoose.model("Pet", petSchema);

module.exports = Pet;