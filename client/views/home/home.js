Template.home.events({
	'submit form': function(e) {
		e.preventDefault()
		var email = $('.login-email');
		var password = $('.login-password');
		Meteor.loginWithPassword(email.val(), password.val(), function(err) {
			if(err) {
				console.log(err.reason)
				Session.set('loginError', err.reason)
			} else {
				console.log('success')
				email.val('')
				password.val('')
			}
		})
	},
	'click .signout': function() {
		Meteor.logout()
	}
})
