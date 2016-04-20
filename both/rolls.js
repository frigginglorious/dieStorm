/*

 Instantiates the Mongo Database Table "Rolls", as a Global Variable in this case
 Is this smart? No. Im pretty sure that any client can push or retrieve data to the database through the JS Console.

 Does it matter?

 For the integrity of your D&D game, maybe. But the data is entirely containerized, and a lazy hack like this couldn't
 affect your server, any other sandstorm grains, or give any access to data that they wouldn't already have!

*/

Rolls = new Meteor.Collection('bolls');

// The terminal will display this message, as well as client JS console.
console.log("rolls.js is being called");

Meteor.methods({

    rollIt: function(d, guyID, guy) {

        if (isNaN(d)){
            throw new Meteor.Error("No Num", "That wasn't a number");
        }

         /*
         (d) is the upper limit of the random number

         Or you can think of it as number of sides of on the die.
         */


        var theRoll = d20.roll(d);

        // Actually adds the user's roll in,
        Rolls.insert({
            theRoll: theRoll,
            dieType: d,
            createdAt: new Date(),
            owner: guyID,
            username: guy,
        });


    },
});