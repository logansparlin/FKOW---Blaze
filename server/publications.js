Meteor.publish('pages', function() {
	return Pages.find({});
})

Meteor.publish('users', function() {
	return Meteor.users.find({}, {fields: {username: 1, profile: 1}})
})