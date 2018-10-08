describe("TestSuite Name: Protractor Basics", function(){
	
	it("TestCase 01: Open Angular JS Website", function(){
		browser.get("http://juliemr.github.io/protractor-demo/").then(function(){
			browser.sleep(5000);
			console.log("Loaded site...")			
		});
		element(by.model("first")).sendKeys("3");		
		element(by.model("second")).sendKeys("8");
		element(by.id("gobutton")).click();
		
		//Jasmine handles promises, but if need to use it then you have to handle inside then()
		expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("11");
		
		var resultValue = element(by.css("h2[class='ng-binding']")).getText().then(function(text){
			return text;
		});
		expect(resultValue).toBe("11");
//		expect(resultValue).not.toBe("11");
//		expect(resultValue).toEqual("11");
//		expect(resultValue).toMatch(/bar/);
//		expect(resultValue).toMatch("bar");
//		expect(resultValue).toBeNull();
	});
	
	it("TestCase 02: Close Browser", function(){
		browser.close();
	});
});