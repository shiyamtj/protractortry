//import {browser, by, ElementFinder } from "protractor";
//export class Select {
//    // dropdown
//    dropdown:ElementFinder;
//    //constructor  accepts dropdown as element
//    constructor(dropdownElement:ElementFinder) {
//		// assign block variable to the global variable
//       this.dropdown = dropdownElement;
//       // click the dropdown
//       dropdownElement.click()
//       browser.sleep(1000)
//    }
//    public selectByIndex(index:number){
//        index = index + 1;
//        console.log("Selecting element based index : "+index)
//        // select the option
//        this.dropdown.element(by.css("option:nth-child("+index+")")).click()
//    }
// }