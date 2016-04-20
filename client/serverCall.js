/*
    This is the Clientside logic file.
 */

Template.userRoll.onCreated(function userRollOnCreated() {
    Meteor.call('checkSandstormUserPermissions');
});

/*
    Tells the HTML template to grab the Mongo Collection,
        and how to display it.
 */

Template.userRoll.helpers({
    bolls: function() {
        return Rolls.find({}, { sort: { createdAt: -1 } });
    },
});

    Template.userRoll.events = {
        'click .aDie': function (event) {

            /*
             - Figures out the number in the div element, whichDie
             - Sets sandstorm user info
             - Calls our rollIt function from rolls.js,
                    which computes the random number,
                    and adds it to Mongo Collection
             */
            whichDie = event.target.innerHTML;
            var guyID = Meteor.sandstormUser().id;
            var guy = Meteor.sandstormUser().name;

            Meteor.call('rollIt', whichDie, guyID, guy, function (err, response) {
                if (err) {
                    // Session.set('rolling', "Good Error:" + err.reason);
                    return;
                }

            });

        }
    };

