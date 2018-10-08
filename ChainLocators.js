describe("TestSuite Name: Protractor Chain Locators", function(){
	function add(a, b){
		element(by.model("first")).sendKeys(a);		
		element(by.model("second")).sendKeys(b);
		element(by.id("gobutton")).click(); 
	};
	
	function Calc(a, b, c){
		element(by.model("first")).sendKeys(a);	
		
		element.all(by.tagName("option")).each(function(item){
			item.getAttribute("value").then(function(value){
				if(value==c){
					item.click();
				}
			});
		});
		element(by.model("second")).sendKeys(b);
		element(by.id("gobutton")).click(); 
		
	};
	
	it("TestCase 01: Open Angular JS Website", function(){
		browser.get("http://juliemr.github.io/protractor-demo/").then(function(){
			browser.sleep(3000);
			console.log("Loaded site...")			
		});
		
		add("3", "8")
		expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("11");
	});
	
	it("TestCase 02: Chain Locators First Result Only", function(){
		element(by.repeater('result in memory')).element(by.css("td:nth-child(3)")).getText().then(function(text){
			console.log("\nRetrieved: " + text);
		});		
	});
	
	it("TestCase 03: Chain Locators All ResultS", function(){
		add("3", "7")
		add("3", "9")
		add("3", "10")
		add("3", "11")
		Calc("20", "5", "ADDITION")
		Calc("20", "5", "DIVISION")
		Calc("20", "5", "MODULO")
		Calc("20", "5", "MULTIPLICATION")
		Calc("20", "5", "SUBTRACTION")
		
		//element.all > has > .each | .first | .get(index) | .last()
		element.all(by.repeater('result in memory')).each(function(item){
			item.element(by.css("td:nth-child(3)")).getText().then(function(text){
				console.log("\nRetrieved: " + text);
			});	
		});	
	});
	
	it("TestCase 04: Close Browser", function(){
		browser.close();
	});
});