## Notes
**Data types**
- variables can hold many data types: number, string, object, boolean, array
- dynamic typing(as opposed to static typing)
- numbers can be written with an e and a number after that e to represent big numbers(scientific notation)
- arrays are values inside [] as a list separated by commas
- objects are name:value pairs inside {} 
- typeof returns type of variable
- undefined value (typeof: undefined)
- null (typeof: object)

**Functions**
- function \[identifier]([parameters], [parameters], ...){[code body]}
- you can invoke/call functions 
- use return keyword to return a value in a function

**Objects**
- an object has a collecton of properties/values and methods
- objects are declared in variables. The individual properties are stored as a list within {}
- the values are stored in name:value pairs
- you can access by using: objectName["propertyname"] or objectName.propertyname
- remember you can store functions in variables 
- example: 
<pre>
var person = {
    firstName: "Bob",
    lastName: "Doe",
    id: 5345,
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
};
</pre>

**Events**
- HTML events are things that happen to HTML elements
- when JS is used, JS can "react"/do something when those events happen
- event can be something that the browser does or the user does
- examples:
    - HTML page finish loading
    - HTML input field was changed
    - HTML button was clicked
- template for in-tag JS: \<element event = "JS code">
- \<button onclick = "document.getElementById('demo').innerHTML = "hello"> say hello \</button>
- that will change the contents of the element with the Id 'demo' to hello
- since JS code can be pretty long, it's more common to see function calls after the event
- \<button onclick = "runFunction()"> hmm \</button> 
- Common events:
    - onchange - element has been changed
    - onclick - html element has been clicked
    - onmouseover - element has mouse moved over it
    - onmouseout - element has mouse moved away from element
    - onkeydown - keyboard key is pushed
    - onload - page is finished loading
    - lots more
- JS event handlers can handle/verify user input, action and browser actions
- learn more in HTML DOM