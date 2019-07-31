const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Pets collection and inserts the pets below
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/healthypets", { useNewUrlParser: true }
);

const petSeed = [
    {
        ownerName: "",
        homePhone: "",
        mobilePhone: "",
        email: '',
        address: '',
        vetContact: {
            name: "",
            phone: "",
            email: '',
            address: '',
        },
        date: new Date(Date.now()),
        dogs: [{
            name: '',
            image: "",
            birthday: "",
            species: "",
            color: "",
            breed: '',
            sex: '',
            weight: '',
            rabiesTag: 0,
            microchip: 0,
            medications: [],
            inoculations: [],
            allergies: [],
            food: [],
            procedures: []
        }]
    },
    {
        ownerName: "",
        homePhone: "",
        mobilePhone: "",
        email: '',
        address: '',
        vetContact: {
            name: "",
            phone: "",
            email: '',
            address: '',
        },
        date: new Date(Date.now()),
        dogs: [{
            name: '',
            image: "",
            birthday: "",
            species: "",
            color: "",
            breed: '',
            sex: '',
            weight: '',
            rabiesTag: 0,
            microchip: 0,
            medications: [],
            inoculations: [],
            allergies: [],
            food: [],
            procedures: []
        }]
    }
];

db.Pets
    .remove({})
    .then(() => db.Pets.collection.insertMany(petSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
