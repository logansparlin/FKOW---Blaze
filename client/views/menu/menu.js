Template.menu.helpers({
	pages: function() {
		var pages = Meteor.subscribe('pages')
		return Pages.find({})
	}
});
