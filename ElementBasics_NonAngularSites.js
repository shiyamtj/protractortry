describe("TestSuite Name: Protractor Basics", function(){
	
	it("TestCase 01: Open Non Angular Website", function(){
		browser.waitForAngularEnabled(false); //Flag for not wait for angular.
		browser.get("http://google.com").then(function(){
			browser.sleep(5000);
			console.log("Loaded site...")			
		});		
	});
	
	it("TestCase 02: Close Browser", function(){
		browser.close();
	});
});