const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const Dishes =  require('./models/dishes');

const url = 'mongodb://localhost:27017/conFusion';
const connect = mongoose.connect(url, {
    useMongoClient : true
});

connect.then((db) => {
    console.log('Connected correctly to server');

    /*
    var newDish = Dishes({
        name : "Uthappizza",
        description : "test"
    });
    */
    
    Dishes.create({
        name : "Uthappizza",
        description : "test"
    })
    .then((dish) => {
        console.log(dish);

        return Dishes.findByIdAndUpdate(dish._id,{
            $set: {
                description : 'Updated test'
            }
            },{
                new : true /* return the updated dish */
            })
            .exec();
    })
    .then((dish) => {
        console.log(dish);
        
        dish.comments.push({
            rating: 5,
            comment: 'new comment',
            author: 'new Author'
        });

        return dish.save();

    })
    .then((dish) => {
        console.log(dish);
        
        return db.collection('dishes').drop();
    })
    .then(() => {
        return db.close();
    })
    .catch((err) => {
        console.log('err');
    });
});