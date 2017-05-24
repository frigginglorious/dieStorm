// The serverside logic file.


// A startup function that helps recognize the sandstorm user.

Meteor.startup(function () {
    Meteor.methods({

        checkSandstormUserPermissions: function () {

            // if (typeof this.connection.sandstormUser() === "function") {
            if (typeof this.connection.sandstormUser !== "undefined") {

                // safe to use the function
                var sandstormUser = this.connection.sandstormUser();
                if (!sandstormUser) {
                    console.log('no sandstormUser');
                    return;
                }else{
                    console.log('sandTime READY');
                }
                return true;
            }else{
                return false;
            }
        }
    });

});
