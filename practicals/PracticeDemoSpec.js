describe("TestSuite Name: Protractor Practice Demo", function(){
	it("TestCase 01: Open Website", function(){
		browser.get("http://posse.com/").then(function(){
			browser.sleep(3000);
			console.log("Loaded site...")			
		});		
	});
	
	it("TestCase: Select search item", function(){
		
	});
	
	it("TestCase: Close Browser", function(){
		browser.close();
	});
});