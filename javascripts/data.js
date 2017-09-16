"use strict";

const printToDom = require("./dom");
const loadGifs = require("./gifs");
const loadCategories = require("./categories");

let gifArray = [];

const errorFunction = () => {
	console.log("it's broke");
};

//when gifs load
const whenGifsLoad = function(){
	gifArray = JSON.parse(this.responseText).gifs;
	// will call loadCategories
	loadCategories(whenCategoriesLoad, errorFunction);
};

const whenCategoriesLoad = function(){
	let categoryArray = JSON.parse(this.responseText).categories;
	//then must Combine arrays
	combineArrays(categoryArray);
};

const combineArrays = (categories) => {
	categories.forEach((category) => {
		gifArray.forEach((gif) => {
			if (gif.category === category.id) {
				gif.categoryName = category.name;
				gif.categoryDataName = category.dataName;
			}
		});
	});
	// call the print to dom
	printToDom(gifArray);
};

// set up 'initializer' - load gifs - set off chain of events
const initializer = () => {
	loadGifs(whenGifsLoad, errorFunction);
};

const getGifs = () => {
	return gifArray;
};

module.exports = {initializer, getGifs};
