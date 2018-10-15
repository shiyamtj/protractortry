describe("TestSuite Name: Protractor Alert Handle Demo", function(){
	it("TestCase: Open NonAngular Website", function(){
		var aut = "http://qaclickacademy.com/practice.php";
		browser.waitForAngularEnabled(false);
		browser.get(aut).then(function(){
			browser.manage().window().maximize();
			console.log("Loaded site...")			
		});		
	});
	
	it("TestCase: Perform Actions on Website", function(){
		browser.switchTo().frame("courses-iframe"); 
		element(by.css("a[href*='sign_in']")).getText().then(function(text){
			console.log("Retrieved Text: " + text);
		})
	});
	
	it("TestCase: Close Browser", function(){
		browser.close();
	});
});