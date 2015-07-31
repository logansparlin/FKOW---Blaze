Template.account.rendered = function() {
    Tracker.autorun(function() {
        var data = Meteor.user()
        if(Meteor.user()) {
            var progressBar = $('.progress-bar-outer .progress'),
                progress = dprogress = Meteor.user().profile.progress,
                percentage = progress / 500;
            progressBar.css({
                'transform': 'scaleX(' + percentage + ')'
            });
        }
    })
}

Template.account.events({
	'click .signout': function() {
		Meteor.logout()
	}
});
