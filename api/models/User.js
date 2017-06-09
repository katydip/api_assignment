/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
 //user.js is the javascript file I created to hold my
 //A model represents a collection of structured data,
 //usually corresponding to a single table or collection in a database.
 //There are many built-in methods available on models, the most important
 //of which are the query methods: find, create, update, and destroy.

 //we addressed each attribute that we wanted in our object - if we try to enter
 //an attribute that is not in this list, it will not give an error but it will
 //not save it.  If we make rules such as type, unique, required, below, the entries
 //must match as indicated to be accepted.  This helps make sure you do not have duplicates
 //or incomplete emails, etc.

 //this user.js is how we view the database in postman or the browser:
 //http://localhost:1337/user

module.exports = {

    attributes: {

      state: {
        type: "string",
        unique: true,
        required: true
      },
      state_capital: {
        type: "string"
      },
      state_abbreviation: {
        type: "string",
        uppercase: "true",
        maxLength: 2
      },
      statehood_date: {
        type: "string"
      },
      //when I had statehood date come back as a "date", it came with a format and timestamp I could not edit.
      electoral_votes: {
        type: "integer"
      },
      state_nickname: {
        type: "string"
      },
      time_zone: {
        type: "string",
        contains: "Time Zone"
      },
      largest_city: {
        type: "string"
      },
      state_animal: {
        type: "string"
      },
      state_fish: {
        type: "string"
      },
      state_insect: {
        type: "string"
      },
      state_tree: {
        type: "string"
      }
  }
    };
