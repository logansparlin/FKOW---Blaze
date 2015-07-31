Template.main.events({
    'click #completeSection': function(e) {
        Meteor.call('giveUserPoints', this.totalPoints)
    },
    'click #resetPoints': function(e) {
        Meteor.call('resetPoints')
    }
});
