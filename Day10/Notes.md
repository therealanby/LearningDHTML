## Notes

**Link bookmarks**
- a link to jump to specific parts of the page, or another page on the same website
- you create a bookmark to an element by giving it an id attribute
- example: id = "A1"
- the value is the name you will refer to when linking
- in the link element (\<a>) have the href attribute have a # and then the name. # is used to refer to ids
- example: \<a href = "#A1">Jump to ...\</a>
- you can also link a page by having the html file name and then the id
- example: \<a href = "html_demo.html#A1">Jump to ...\</a>

**Image maps**
- \<map> tag defines an image map.
- it creates clickable areas
- the areas are defined with the tag \<area>
- map tag has an attribute called name. The value is the value used for the usemap attribute in the img tag 
- the area tag has the shape, coords, alt and href attribute
- you can do some fancy javascript stuff using onclick attribute and the script tag (more on this when I get to the javascript tutorial)

**background image**
- css style
- background-image property 
- more properties to describe how the image is displayed [more info](https://www.w3schools.com/html/html_images_background.asp)

**picture tag**
- better img display for different screen sizes
- [more info](https://www.w3schools.com/html/html_images_picture.asp)

**more stuff**
- gonna be vague here and just list more elements
- \<table> tag. \<tr> is a row. \<th> is a header. \<td> is a cell
- \<ul> bullet and \<ol> numbered list. \<li> for list item
- \<div> creates a block. The block can hold elements. Mainly used for separating specific elements
- \<span> inline element
- \<iframe> shows another embed doc inside current page
- javascript: use \<script> tag to define scripts. more about javascript later
- \<meta> for describing page details
- layout can be created using CSS
- responsive webpages are good
- \<kbd> keyboard input, \<samp> sample computer output, \<code> code(doesn't do anything except it displays the text in a special way), \<var> variable
- [semantics](https://www.w3schools.com/html/html5_semantic_elements.asp)
- style: declare doc type, use lowercase elements, close all elements, lowercase attribute names, quote attribute values, specify (alt, width, height) for images, space things out, and some [more](https://www.w3schools.com/html/html5_syntax.asp)
- you can display symbols by using "&#" before a number to specify id for symbol
- charset encoding...
- XHTML... [here](https://www.w3schools.com/html/html_xhtml.asp)
- html forms by using \<form>. there are many other elements that can be used inside the form element.
    - more about forms [here](https://www.w3schools.com/html/html_forms.asp)
- HTML canvas
- HTML svg
- a lot more. [resource](https://www.w3schools.com/html/default.asp)

**class attribute**
- specifies a class for an element
- multiple elements can share a class
- used in CSS and JS for manipulating the element
- referred to by using a "." before it

**id attribute**
- specifies an unique id
- only one element can have a specific id(no sharing id names)
- used in CSS and JS
- referred to by using a "#" before it
- used for bookmarks (see link bookmarks)