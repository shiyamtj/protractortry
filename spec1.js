describe("TestSuite Name: Protractor Basics", function(){
	
	it("TestCase 01: Open Angular JS Website", function(){
		browser.get('https://angularjs.org');
		
		browser.get("http://juliemr.github.io/protractor-demo/").then(function(){
			browser.sleep(5000);
			console.log("Loaded site...")			
		});
		 
		browser.sleep(5000);
		console.log("Loaded site...")
	});
	
	it("TestCase 02: Close Browser", function(){
		
	});
});