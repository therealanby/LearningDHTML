## Notes
**Arrays**
- arrays are used to store multiple variables in one variable
- created with brackets (`var arr = [1,2,3,4];`)
- access using brackets (`var in_0 = arr[0];`)
- set using brackets (`arr[0] = 2`)
- array elements can be objects
- .length - returns length
- .push() - adds element to end
- arrays([]) use numbered indexes
- objects({}) use named indexes
- avoid using new Array() to create array, just use []
- use .isArray() to check if variable is array

**Array Methods**
- .join() - combines all elements into a string
- .pop() - removes last element
- .push() - adds element to end
- .shift() - remove first and moves all others to fill in empty spot
- .unshift() - adds an element to beginning and pushes all other elements forward
- delete keyword can be used but will leave an undefined hole
- .splice(1, 2, ...) - 1. where, 2. elements to remove, .... elements to add
- .concat() - merge two existing arrays
- .slice() - creates a new array by slicing a part of array starting from the parameter

**Array sort**
- .sort()
- .reverse()
- .sort(function(a,b){return a-b}); - string numerical sort
- .sort(function(a,b){return 0.5 - Math.random()}); - rando sort
- adjust function to change how sorting works

**Array Iteration**
- .forEach() - does something for each element
- .map() - creates new array by performing function on each array element
- .filter() - creates a new array base on values of another array that meets given criteria
- .reduce() - reduce array to single value
- .reduceRight() - reduce but right-left
- .every() - check every element if it passes test
- .some() - check if some value pass test
- .indexOf() - search for element value
- .lastIndexOf()
- .find()
- .findIndex()
- [more details](https://www.w3schools.com/js/js_array_iteration.asp)
