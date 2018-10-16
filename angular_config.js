var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
	seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
	// specs: ['ElementBasics_AngularSites.js'],
	specs: ['./practicals/DataProviderDemo.js'],
	// specs: ['./practicals/ActionsDemoSpec.js'],
	capabilities:{
		// 'browserName': 'MicrosoftEdge'
		'browserName': 'chrome'
		// 'browserName': 'firefox'
		// 'browserName': 'internet explorer'
	},

	onPrepare: function(){
		browser.driver.manage().window().maximize();
		jasmine.getEnv().addReporter(
			new Jasmine2HtmlReporter({
				savePath: 'target/screenshots'	
			})
		);
	},

	jasmineNodeOpts:{
		showColors: true,
	},
	suites:{
		smoke: ['*/DataProviderDemo.js'],
		regression: ['*/practicals/DataProviderDemo.js']
	}
};