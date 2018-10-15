describe("TestSuite Name: Protractor Synchronization Demo", function(){
	var EC = protractor.ExpectedConditions;
	it("TestCase: Open NonAngular Website", function(){
		var aut = "http://www.itgeared.com/demo/1506-ajax-loading.html";
		browser.waitForAngularEnabled(false);
		browser.get(aut).then(function(){
			browser.manage().window().maximize();
			console.log("Loaded site...")			
		});		
	});
	
	it("TestCase: Perform Expected Condition on elements", function(){
		element(by.css("a[href*='Ajax']")).click();
		browser.wait(EC.visibilityOf(element(by.id("results")), 5000));
		element(by.id("results")).getText().then(function(text){
			
			console.log(text);
		});
	});
		
	it("TestCase: Close Browser", function(){
		browser.close();
	});
});