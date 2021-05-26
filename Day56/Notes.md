## Notes
### Selectors
- class and id selectors
- ID is defined with # and class is defined with .
- these selectors refers to the class/id attributes of elements in the HTML file
- in other words, you can define a group elements in a HTML file and style them in CSS

### Grouping in CSS
- you can group selectors together. Separate them by commas
- you can nest groups together 
    - for example, you have elements that has a class of "cat". You can do .cat h1 to only style h1 elements with a class of "cat"
- you can also use a div/span tag and assign a class/id to it. Tags inside the div/span tag will automatically be associated with the class/id

### Pseudo Classes
- pseudo classes are attached to selectors to specify a state or relation to the tag
- form: selector:pseudo_class {property: value}
- for example 
    - a:link
    - a:visited
    - these two are p_c of the a tag (the link tag). The style the state of the link (when it's visited or not)
- dynamic p_c (applied to something when something happens)
    - active: clicked on
    - hover: cursor over 
    - focus: gains focus/selected/ready for keyboard input

### Background Images
- [more detailed](https://www.htmldog.com/guides/css/intermediate/backgroundimages/)
- background shorthand property
- background: white url("dog.png") no-repeat top right
- properties: bg-color, bg-image, bg-repeat, bg-position

### lazy
- [display](https://www.htmldog.com/guides/css/intermediate/display/)
- [Pseudo-elements](https://www.htmldog.com/guides/css/intermediate/pseudoelements/)
- [Page layout](https://www.htmldog.com/guides/css/intermediate/layout/)
