if(Pages.find().count() === 0) {
	Pages.insert({
		'name':'Heritage / History',
		'slug':'heritage-history',
		'allowedAccess': [ 'fan', 'rookie', 'pro', 'mvp', 'king' ]
	});
	Pages.insert({
		'name':'Wing Popularity',
		'slug':'wing-popularity',
		'allowedAccess': [ 'fan', 'rookie', 'pro', 'mvp', 'king' ]
	});
	Pages.insert({
		'name':'Wing Decider',
		'slug':'wing-decider',
		'allowedAccess': [ 'fan', 'rookie', 'pro', 'mvp', 'king' ]
	});
	Pages.insert({
		'name':'Wing Prep',
		'slug':'wing-prep',
		'allowedAccess': [ 'fan', 'rookie', 'pro', 'mvp', 'king' ]
	});
	Pages.insert({
		'name':'Flavor Tool',
		'slug':'flavor-tool',
		'allowedAccess': [ 'pro', 'mvp', 'king' ]
	})
}

if(Meteor.users.find().count() === 0) {
	console.log('NO USERS')
	Accounts.createUser({
		email: 'lsparlin@marlinco.com',
		password: 'password',
		profile: {
			firstName: 'Logan',
			lastName: 'Sparlin',
			level: 'pro'
		}
	})
}
