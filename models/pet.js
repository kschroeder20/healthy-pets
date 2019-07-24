const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const petSchema = new Schema({
    ownerName: { type: String, required: true },
    homePhone: String,
    uid: String,
    mobilePhone: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
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
    petSex: String,
    petWeight: Number,
    petRabiesTag: Number,
    petMicrochip: Number,
    petMedications: Array,
    petInoculations: Array,
    petAllergies: Array,
    petFood: Array,
    petProcedures: Array
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