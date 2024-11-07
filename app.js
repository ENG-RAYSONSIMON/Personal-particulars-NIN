const express = require("express");
const app = express();
const ejs = require("ejs");
const bodyParser = require("body-parser");
const Person = require("./DB/Person");
const formatter = require("./utils/functions");
require("dotenv").config();

// middleware
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
//routes
app.get("/", async function (req, res) {
  const persons = await Person.find({});
  res.render("index", { persons, formatter });
});

app.get("/add", function (req, res) {
  res.render("add");
});

app.get("/edit/:id", async (req, res) => {
  const { id } = req.params;
  const data = await Person.findById(id);
  res.render("edit", { data });
});

app.post("/add", async function (req, res) {
  const { firstname, secondname, lastname, birthdate, gender, address, city } =
    req.body;

  await Person.create({
    firstname,
    secondname,
    lastname,
    birthdate,
    gender,
    address,
    city,
  });

  res.redirect("/");
});

app.post("/delete/:id", async (req, res) => {
  const id = req.params.id;
  await Person.findByIdAndDelete(id);

  res.redirect("/");
});

app.post("/edit/:id", async (req, res) => {
  const { id } = req.params;
  const { firstname, secondname, lastname, birthdate, gender, address, city } =
    req.body;
  await Person.findByIdAndUpdate(id, {
    firstname,
    secondname,
    lastname,
    birthdate,
    gender,
    address,
    city,
  });

  res.redirect("/");
});

//server on port 3000
app.listen(process.env.PORT, function (req, res) {
  console.log(`server is running on http://localhost:${process.env.PORT}`);
});
