exports.config = {
	seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
//	specs: ['ElementBasics_NonAngularSites.js'],
//	specs: ['AlertHandleDemoSpec.js'],
//	specs: ['FrameHandleDemoSpec.js'],
	specs: ['ECDemoSpec.js'],	
	capabilities:{
//		'browserName': 'MicrosoftEdge'
		'browserName': 'chrome'
//		'browserName': 'firefox'
//		'browserName': 'internet explorer'
	},
	
	onPrepare: function(){
		browser.driver.manage().window().maximize();
	}

	
};