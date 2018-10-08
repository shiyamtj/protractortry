exports.config = {
	seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
	specs: ['ElementBasics_NonAngularSites.js'],
	capabilities:{
//		'browserName': 'MicrosoftEdge'
		'browserName': 'chrome'
//		'browserName': 'firefox'
//		'browserName': 'internet explorer'
	}
};