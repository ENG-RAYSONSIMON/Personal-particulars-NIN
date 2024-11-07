const mongoose = require("mongoose");
require("dotenv").config();

// DATABASE CONNECTION OPERATIONS
mongoose.connect(process.env.DB_URL);

const personSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  secondname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  birthdate: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    enum: ["Male", "Female"],
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
});

const Person = mongoose.model("Person", personSchema);

module.exports = Person;
