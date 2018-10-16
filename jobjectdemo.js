function Car(){
	this.color = "red";
	this.enginer = "turbo";
	this.brand = "BMW";
	this.search = "by.css('input')";
	this.getModel = function(){
		console.log("This is 2020 model.");
	};
};
module.exports = new Car();