## Notes
**CSS Intro**
- Cascading Style Sheets
- describes how html elements are displayed
- can control layout of multiple web pages through style sheets
- external style sheets are stored in CSS files
- HTML was never intended to have tags to format web pages
- HTML was there to describe the basic contents
- bascially, just use external CSS. Internal and inline are used for small examples. For actual projects, just use an external sheet because everything is in one place and multiple pages can share the same style.

**Syntax**
- CSS consists of a selector and a declaration block
- example:
`h1 {
    color: blue; 
    font-size:12 px;
}`
- h1 is the selector
- everything between the brackets are part of the declaration block
- the declaration are a property-value pair that ends in a semicolon
- the selector is the tag/element to style
- the property is what to style
- the value is how to style that property for that tag
- the property and value is separated by colons

**Selectors**
- selectors are used to find the element to style
- there are five categories
    - simple: name, id, class
    - combinator: elements based on relation
    - pseudo-class: elements with a certain state
    - pseudo-element: style a part of an element
    - attribute: elements with an attribute or attribute value
- element selector
    - base on element name 
    - example: `<p>` would be p
- ID selector
    - styles an element with the unique ID (only one element can be styled since only one unique ID can exist)
    - IDs are preceded with a "#"
    - example: id = "hello" would be #hello
    - note: id cannot start with a number
- class selector
    - styles all elements with a certain class value 
    - classes are preceded with a "."
    - exampe: class = "hi" would be .hi
    - you can also precede the . with an element name so that elements of that tag and class would be styles
    - example: p.hi would style all p tags with a class value of hi
    - note: class cannot start with a number
- universal selector
    - `*` selects all HTML elements on the page
- grouping
    - you want to style h1, h2, and p the same
    - solution: `h1, h2, p {...}`
    - to style multiple elements the same, just include them in the selector separated by commas
**Ways to include CSS**
- see Day 8
- piority: inline -> order in header (external and internal) -> default

**Comments**
- /*comment here*/

**Color**
- see Day 7