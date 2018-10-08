describe("TestSuite Name: Protractor Actions Demo", function(){
	it("TestCase 01: Open Website", function(){
		browser.get("http://posse.com/").then(function(){
			browser.sleep(3000);
			console.log("Loaded site...")			
		});		
	});
	
	it("TestCase 02: Move mouse to element (Search for places)", function(){
		var searchFieldPlaces = element(by.model("userInputQuery"));
		var searchFieldAroundMe = element(by.model("locationQuery")); 
		
		searchFieldPlaces.sendKeys("river");
		browser.actions().mouseMove(searchFieldAroundMe.sendKeys("London")).perform();
		
		browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
		browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function(){
			browser.sleep(3000);
		});		
	});
	
	it("TestCase 03: Chain Locators All ResultS", function(){
			
	});
	
	it("TestCase 04: Close Browser", function(){
		browser.close();
	});
});