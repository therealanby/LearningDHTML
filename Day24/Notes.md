## Notes
**adding JS to HTML**
- JS code can be put between \<script> tags
- example: \<script> document.getElementById("demo").innerHTML = "hello"; \</script>
- JS function is a block of JS code that can be executed when called for. The calling can also be considered an event (example of an event: user clicks button)
- scripts can be placed in the head or body of a HTML page
- you can define functions in the head and then call them in the body
- you can also define the functions in the body and it will work the same
- you can place scripts in an external file
- external files are practical because it can be reused
- to do this: \<script src = "fileName.js">\</script>
- the reference can be placed in either head or body
- you can add several scripts with multiple script tags
- you can also link a js file

**JS displays/output**
- "display data in different way"
    - write to html element using innerHTML
    - HTML output using document.write()
    - alert box using window.alert()
    - browser console using console.log()
- note: using document.write() will erase all exisiting HTML on page when it is called
- so document.write() should only be used for testing
- for window.alert(), you can omit window.

**JS statements**
- a computer program is a list of instructions to be executed by the computer
- instructions are called statements
- A JS program is a list of programming statements and is run by the web browser
- JS statements are made up of values, operators, expressions, keywords, and comments
- statements are executed one by one in the same order as they are written
- all statements end in a semicolon 
- white space, line breaks and tabs for readability
- use curly brackets ({}) to group code together. One example of this are functions
- most keywords are recognizable from other programming languages (I already know a few so I'll skim)
    - break - terminate loops
    - continue - terminate current loop run
    - do ... while - runs loops at least once and run again if condition is met
    - for - loop
    - function - declare function
    - if, else - conditional
    - return  - exits function
    - switch - conditional 
    - try, catch - error handling
    - var - declares variable

**JS syntax**
- fixed values: literals
- variable values: variables
- literals: 
    - numbers can be written with or without decimals
    - strings are text surrounded by single or double quotes
- declare variables with var and assign with '='
- operators to compute values 
- '=' for assignment
- expressions are a combination of values, variables and operators and evaluates to something
- // for JS comments
- identifiers are names for functions and variables
- basic programming naming rules apply
    - cannot be a reserved word/keywords
    - case sensitive
    - first character must be a letter, _ or $
    - following characters can be letters, digits, _, or $
- camel case or _ for separating words

**JS comments**
- // single line
- /* text here */ multi-line
