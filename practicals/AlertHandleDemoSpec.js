describe("TestSuite Name: Protractor Alert Handle Demo", function(){
	it("TestCase: Open NonAngular Website", function(){
		var aut = "http://qaclickacademy.com/practice.php";
		browser.waitForAngularEnabled(false);
		browser.get(aut).then(function(){
			console.log("Loaded site...")			
		});		
	});
	
	it("TestCase: Perform Actions on Website", function(){
		element(by.id("confirmbtn")).click();
		browser.sleep(5000);
		browser.switchTo().alert().accept().then(function(delay=5000){
			browser.sleep(delay);
		});
	});
	
	it("TestCase: Close Browser", function(){
		browser.close();
	});
});