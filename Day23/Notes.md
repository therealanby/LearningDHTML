## Notes
**JS Intro**
- Javascript(js) can change HTML contents
- one common method is getElementById()
- example: document.getElementById("demo").innerHTML = "Hello";
    - the example gets the element with the "demo" id and sets teh innerHTML(the content of the element) to "Hello"
- single and double quotes are accepted in js
- js can also change attributes
- example: \<button onclick = "document.getElementById('myImage'). src = 'pic_bulbon.gif' "> Turn on the light \</button>
- in the example, onclick runs the script in the quotation. The script gets the myImage id element and sets the src attribute to something else
- Js can change styles(CSS)
- example: document.getElementById("demo").style.fontSize = "35px";
- you can hide and show stuff using JS by using the display property in CSS