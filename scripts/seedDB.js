require('dotenv').config()

const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Pets collection and inserts the pets below
mongoose.connect(
    process.env.MONGODB_URI, { useNewUrlParser: true }
);

const petSeed = [
    {
        ownerName: "Kevin",
        homePhone: "000-000-0000",
        mobilePhone: "000-000-0000",
        email: 'schroederkevin94@gmail.com',
        address: '111 North St.',
        vetContact: {
            name: "Paul",
            phone: "000-000-0000",
            email: 'paul@daman.com',
            address: '222 South St.',
        },
        date: new Date(Date.now()),
        pets: [{
            name: 'Scooter',
            image: "",
            birthday: "1/1/2019",
            species: "Dog",
            color: "Golden",
            breed: 'Golden Retriever',
            sex: 'male',
            weight: '100',
            rabiesTag: 20,
            microchip: 900,
            medications: ['med1', 'med2', 'med3'],
            inoculations: ['inoc1', 'inoc2', 'inoc3'],
            allergies: ['grass', 'dust', 'cats'],
            food: ['only dry'],
            procedures: ['none']
        }]
    },
    {
        ownerName: "Steve",
        homePhone: "111-111-1111",
        mobilePhone: "111-111-1111",
        email: 'steve@gmail.com',
        address: '111 North St.',
        vetContact: {
            name: "Paul",
            phone: "111-111-1111",
            email: 'paul@daman.com',
            address: '222 South St.',
        },
        date: new Date(Date.now()),
        pets: [{
            name: 'Shahein',
            image: "",
            birthday: "2/1/2019",
            species: "Dog",
            color: "White",
            breed: 'Poodle',
            sex: 'male',
            weight: '100',
            rabiesTag: 20,
            microchip: 900,
            medications: ['med1', 'med2', 'med3'],
            inoculations: ['inoc1', 'inoc2', 'inoc3'],
            allergies: ['grass', 'dust', 'cats'],
            food: ['only wet'],
            procedures: ['none']
        }]
    }
];

db.Pet
    .remove({})
    .then(() => db.Pet.collection.insertMany(petSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
