Router.configure({
	notFoundTemplate: 'notFound',
	loadingTemplate: 'loading',
	layoutTemplate: 'main',
	waitOn: function() {
		Meteor.subscribe('users');
		Meteor.user();
	}
});

Router.route('/',  {
	name: 'home',
	waitOn: function() {
		Meteor.subscribe('pages')
	},
	data: function() {
			return Pages.findOne({slug: this.params.page})
	},
	action: function() {
		this.render('menu', {to: 'sidebar'});
		this.render('home');
		this.next();
	}
});

Router.route('/:page', {
	waitOn: function() {
		Meteor.subscribe('pages')
	},
	data: function() {
			return Pages.findOne({slug: this.params.page})
	},
	onBeforeAction: function() {
		var page = this.params.page,
			access = PAGES[page].access,
			user_level;

		if(Meteor.userId()) {
			user_level = Meteor.user().profile.level;
		} else {
			user_level = 'fan'
		}

		if( _.contains(access, user_level) ) {
			this.next()
		} else {
			Router.go('home')
			alert('access denied')
		}
	},
	action: function() {
		this.render('menu', {to: 'sidebar'});
		var page = this.params.page;
		this.render(page)
	}
});
