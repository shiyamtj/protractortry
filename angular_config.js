exports.config = {
	seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
//	specs: ['ElementBasics_AngularSites.js'],
//	specs: ['ChainLocators.js'],
	specs: ['ActionsDemoSpec.js'],
	capabilities:{
//		'browserName': 'MicrosoftEdge'
		'browserName': 'chrome'
//		'browserName': 'firefox'
//		'browserName': 'internet explorer'
	}
};