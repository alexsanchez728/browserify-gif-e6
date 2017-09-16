"use strict";

const printToDom = require("./dom");
const data = require("./data");

const buttonDiv = document.getElementById("filters");

const filterEvent = () => {
	buttonDiv.addEventListener("click", (event) => {
		let itemToFilerOn = event.target.id;
		const gifArray = data.getGifs();
		const filteredArray = filterArray(itemToFilerOn, gifArray);
		printToDom(filteredArray);
	});
};

const filterArray = (filterOn, originalArray) => {
	const finalArray = [];
	originalArray.forEach((item) => {
		if (item.categoryDataName === filterOn) {
			finalArray.push(item);
		}
	});
	// woof
	return finalArray;
};

const activeEvents = {
	filterEvent
};

module.exports = activeEvents;