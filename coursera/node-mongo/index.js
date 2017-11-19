const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const doper = require('./operations');

const url = 'mongodb://localhost:27017/conFusion';

MongoClient.connect(url).then((db) => {

    console.log('Connected correctly to server');

    doper.insertDocument(db, { name: "Vanilla", description: "Test" },
        "dishes")
        .then((result) => {
            console.log("Insert document:\n", result.ops);

            return doper.findDocuments(db, "dishes");
        })    
        .then((docs) => {
            console.log("Found documents:\n", docs);

            return doper.updateDocument(db, { name: "Vanilla"},
                 {description: "Updated test" }, "dishes");
        })
        .then((result) => {
            console.log("Updated document:\n", result.result);

            return doper.findDocuments(db, "dishes");
        })
        .then((docs) => {
            console.log("Found updated documents:\n", docs);

            return db.dropCollection("dishes");
        })    
        .then ((result) => {
            console.log("Dropped collection: ", result);
            return db.close();
        })
        .catch((err) => {
            console.log(err);
        })
    })
    .catch((err) => {
        console.log(err);
    })