## Notes
**Math**
- Math object
- has no constructors
- is static
- all methods and properties (fields) can be used without creating an instance/object
- constants:
    - Math.property to access
    - Math.E - Euler's number
    - .PI - pi
    - .SQRT2 - square root of 2
    - .SQRT1_2 - sr of 1/2
    - .LN2 - natural log of 2
    - .LN10 - nat log of 10
    - .LOG2E - base 2 log e
    - .LOG10E - base 10 log e
- methods:
    - .round()
    - .ceil()
    - .floor()
    - .trunc()
    - .sign() - returns 1 for positive, -1 for negative, and 0 for 0
    - .pow()
    - .sqrt()
    - .abs()
    - .sin()
    - .cos()
    - .tan()
    - .min() and .max()
    - .random()
    - .log()

**Random**
- Math.random()
- to use: Math.floor(Math.random() * x) + y
- this will round down. The integer will be in the range: y - (x-1) (inclusive I believe)
- [more info](https://www.w3schools.com/js/js_random.asp)

**Conversion**
- String() is a global method to convert to string
- Number()
- [more info](https://www.w3schools.com/js/js_type_conversion.asp)

**Regex**
- methods:
    - .search() - will return index. -1 if not found
    - .replace() - will replace
- syntax: /pattern/modifier
- you can search a string or regex pattern
- [more info](https://www.w3schools.com/js/js_regexp.asp)

**error handling**
- <pre>try{
        //code to test
    }catch(err){
        //handling
    }</pre>
- throw keyword to throw error
- [more info](https://www.w3schools.com/js/js_errors.asp)

**strict mode**
- "use strict"; at beginning to enable strict mode
- this mode is more safe
- [more info](https://www.w3schools.com/js/js_strict.asp)

**arrow**
- [link](https://www.w3schools.com/js/js_arrow_function.asp)

**classes**
- [too lazy to take notes on a whole concept](https://www.w3schools.com/js/js_classes.asp)

**JSON**
- Javascript object notation
- `{
    [object]:[value],
    [object]:[value]
    }`
- stores objects
- JSON.parse([json text]) - convert json text into objects (or a list of them)
- [more info](https://www.w3schools.com/js/js_json.asp)

**debugging**
- Console.log()
- [more info](https://www.w3schools.com/js/js_debugging.asp)

**more stuff**
- [stuff](https://www.w3schools.com/js/js_conventions.asp)
- contains good JS style, practice, mistakes to fix, how to improve performance by altering code, and reserved words 