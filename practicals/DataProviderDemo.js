

describe("TestSuite Name: Protractor Chain Locators", function(){
	var using = require("jasmine-data-provider");
	var data = require("../data/data.js");
	

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
	
	using(data.DataDriven, function(data, description){ 

		it("TestCase: Open Angular JS Website > " + description, function(){
			browser.get("http://juliemr.github.io/protractor-demo/").then(function(){
				browser.sleep(3000);
				console.log("Loaded site...")			
			});
			
			add(data.firstInputData, data.secondInputData)
			expect(element(by.css("h2[class='ng-binding']")).getText()).toBe(data.result);
		});
	});
});