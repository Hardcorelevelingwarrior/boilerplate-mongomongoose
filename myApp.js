require('dotenv').config();
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI);


personSchemal = new mongoose.Schema({
  name : {
    type : String,
    required : true
  },
  age : {
    type : Number
  },
  favoriteFoods : [String]
});

var Person = mongoose.model("Person",personSchemal);
var createAndSavePerson = function(done){
  var Minh = new Person({name : "Minh",age : 20, favoriteFoods : ["shrimp"]});

  Minh.save(function(err, data) {
    if (err) return console.error(err);
    done(null, data)
  });
};

var arrayOfPeople = [
  {name: "Frankie", age: 74, favoriteFoods: ["Del Taco"]},
  {name: "Sol", age: 76, favoriteFoods: ["roast chicken"]},
  {name: "Robert", age: 78, favoriteFoods: ["wine"]}
];

const createManyPeople = function(arrayOfPeople, done) {
  Person.create(arrayOfPeople , function(err,people){
    done(null,people)
  });
};

const findPeopleByName = function(personName, done)  {
  Person.find({name: personName}, function(err,data){
    done(null,data)
  });
};

const findOneByFood = function(food, done) {
  Person.findOne({favoriteFoods :[food] },function(err,data){
    done(null,data)
  });
};

const findPersonById = function(personId, done) {
  Person.findById({_id : personId},function(err,data){
    done(null,data)
  })
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = 'hamburger';

  // .findById() method to find a person by _id with the parameter personId as search key. 
  Person.findById(personId, (err, person) => {
    if(err) return console.log(err); 
  
    // Array.push() method to add "hamburger" to the list of the person's favoriteFoods
    person.favoriteFoods.push(foodToAdd);

    // and inside the find callback - save() the updated Person.
    person.save((err, updatedPerson) => {
      if(err) return console.log(err);
      done(null, updatedPerson)
    })
  })
};


const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */


//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
