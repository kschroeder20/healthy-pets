const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const petSchema = new Schema({
    ownerName: { type: String, required: true },
    name: String,
    homePhone: String,
    mobilePhone: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    vetContact: {
        name: String,
        phone: Number,
        email: String,
        address: String,
    },
    date: { type: Date, default: Date.now },
    dogs: [{
        name: String,
        image: { data: Buffer, contentType: String },
        birthday: { type: Date },
        species: String,
        color: String,
        breed: String,
        sex: String,
        weight: Number,
        rabiesTag: Number,
        microchip: Number,
        medications: Array,
        inoculations: Array,
        allergies: Array,
        food: Array,
        procedures: Array
    }]
});

const Pet = mongoose.model("Pet", petSchema);

module.exports = Pet;