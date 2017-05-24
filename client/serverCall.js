/*
    This is the Clientside logic file.
 */
Template.registerHelper('formatDate', function(date) {
    return moment(date).format('MMM Do, h:mm:ss a');
});


Template.userRoll.onCreated(function userRollOnCreated() {
    isSS = Meteor.call('checkSandstormUserPermissions');
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

            // if (typeof Meteor.sandstormUser() === "function") {
            if (isSS) {
            // safe to use the function
                var guyID = Meteor.sandstormUser().id;
                var guy = Meteor.sandstormUser().name;
            }else if(Meteor.user() !== null){
                console.info(Meteor.user());
                var guyID = Meteor.userId();
                var guy =  Meteor.user().profile.name;
            }else{
                var guyID = 1;
                var guy = "bozoJones";
            }

            Meteor.call('rollIt', whichDie, guyID, guy, function (err, response) {
                if (err) {
                    // Session.set('rolling', "Good Error:" + err.reason);
                    return;
                }

            });

        }
    };
