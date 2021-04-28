## Notes
**Strings**
- .length on a string variable to get its length
- \ (backslash) is used as an escape character
- you can define string as objects: var y = new String("hello");
- comparing to different JS objects will always return false
- == - equal
- === - equal and same type

**String Methods**
- .indexOf() to find a substring index
- .lastIndexOf()
- both will return -1 if not found
- .search()
- indexOf cannot use regex and search cannot start at a different index
- .slice - extracting a substring using indexes
- .substring() - similar to slice
- .substr() - similar to substring but takes length instead of index as second param
- .replace()
- .toUpperCase() and .toLowerCase()
- .concat() - joins two strings
- .trim() - remove whitespace from end and begining
- .charAt() - character at a certain index
- in some version, you can use [] to access characters in a string like an array
- .split() - convert string to array, separating by a characters

**Numbers Methods**
- .toString()
- .toFixed() - specific number of decimals
- .toPrecision() - specified length
- .valueOf() - value of number
- Number(), parseInt(), parseFloat() to convert to integral value
- .MAX_VALUE and .MIN_VALUE
- ^can only be accessed with Number (so Number.MAX_VALUE)

