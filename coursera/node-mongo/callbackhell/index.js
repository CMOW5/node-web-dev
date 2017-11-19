const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const doper = require('./operations');

const url = 'mongodb://localhost:27017/conFusion';

MongoClient.connect(url, (err, db) => {

    assert.equal(err, null);

    console.log('Connected correctly to server');

    const collection = db.collection('dishes');

    doper.insertDocument(db, { name: "Vanilla", description: "Test" },
        "dishes", (result) => {
            console.log("Insert document:\n", result.ops);

            doper.findDocuments(db, "dishes",
                (docs) => {
                    console.log("Found documents:\n", docs);


                    doper.updateDocument(db, { name: "Vanilla"}, {description: "Updated test" }, "dishes",
                        (result) => {
                            console.log("Updated document:\n", result.result);

                            doper.findDocuments(db, "dishes",
                                (docs) => {
                                    console.log("Found updated documents:\n", docs);

                                    db.dropCollection("dishes",(result) => {
                                        console.log("Dropped collection: ", result);
                                        db.close();
                                    });

                                });
                        });

                });

        });

});