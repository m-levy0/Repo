//  A map of categories
let categories = new Map();
categories.set('category-image-link', 'make-bold');
categories.set('category-text-link', 'make-bold');
categories.set('category-hyperlink-link', 'make-bold');

// list of posts
let postCategories = new Map();
postCategories.set('category-image-post', 'make-bold');
postCategories.set('category-text-post', 'make-bold');
postCategories.set('category-hyperlink-post', 'make-bold');

/**
 * Toggles the selected category on click and removes any effect on other categories
 *
 * @param {The category selected by clicking} selectedCategory
 * @param {This is map. List of categories available} listOfCategories
 */
function showSelectedCategoryOnly(selectedCategory, listOfCategories) {
	for (let [key, value] of listOfCategories) {
		if (key === selectedCategory) {
			document.getElementsByClassName(key)['0'].classList.add(value);
		} else {
			document.getElementsByClassName(key)['0'].classList.remove(value);
		}
	}
}

/**
 * Remove the classes from non-selected category posts
 * @param {The category selected by clicking} selectedCategory
 * @param {This is map. List of categories available} listOfCategories
 */
function removeSelectionFromOtherCategoryPosts(selectedCategory, listOfCategories) {
	for (let [key, value] of listOfCategories) {
		if (key !== selectedCategory) {
			let unselectedElementsList = document.getElementsByClassName(key);
			for (let i = 0; i < unselectedElementsList.length; i++) {
				unselectedElementsList[i].style.display = 'none';
			}
		} else {
			let selectedElementsList = document.getElementsByClassName(key);
			for (let i = 0; i < selectedElementsList.length; i++) {
				selectedElementsList[i].style.display = 'block';
			}
		}
	}
}

/**
 * Adds given class to all elements of target class
 * @param { The class to find elements for } targetElement
 * @param { The class to add } classToAdd
 */
function addClassToAll(targetElement, classToAdd) {
	var catElements = document.getElementsByClassName(targetElement);
	var catIndex;
	for (catIndex = 0; catIndex < catElements.length; catIndex++) {
		catElements[catIndex].classList.toggle(classToAdd);
	}
}

// The function calls from HTML
function showCategoryImage() {
	showSelectedCategoryOnly('category-image-link', categories);
	addClassToAll('category-image-post', 'make-bold');
	removeSelectionFromOtherCategoryPosts('category-image-post', postCategories);
}
function showCategoryText() {
	showSelectedCategoryOnly('category-text-link', categories);
	addClassToAll('category-text-post', 'make-bold');
	removeSelectionFromOtherCategoryPosts('category-text-post', postCategories);
}
function showCategoryHyperlink() {
	showSelectedCategoryOnly('category-hyperlink-link', categories);
	addClassToAll('category-hyperlink-post', 'make-bold');
	removeSelectionFromOtherCategoryPosts('category-hyperlink-post', postCategories);
}
