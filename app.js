console.log("Web serverni boshlash");
const express = require("express");
const app = express();
const fs = require("fs");

// MongoDB call
let db = require('./server').db()

// 1: Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: Session
// 3: Views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4: Routing code
app.post("/create-item", (req, res) => {
    console.log("user entered /create-item")

    console.log(req.body)
    const new_reja = req.body.reja
    db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
        if (err) {
            console.log(err);
            res.end("something went wrong")
        } else {
            res.end("successfully added")
        }
    })
});

app.get("/author", (req, res) => {
    console.log("user entered /author")

    res.render("author", { user: user });
});

app.get("/", function (req, res) {
    console.log("user entered /")
    
    db.collection("plans").find().toArray((err, data) => {
        if (err) {
            console.log(err);
            res.end("something went wrong")
        } else {
            res.render("reja", { items: data })
        }
    })
});

module.exports = app