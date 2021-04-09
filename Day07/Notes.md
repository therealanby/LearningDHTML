## Notes

**Quotation and Citation**
- \<blockquote> indented text
    - attribute: cite = "[link here]"
- \<q> short quotation
- \<abbr> abbreviation
    - attribute: title = "[text]"
    - will show title if you hover over it
- \<address> contact info. will be shown in italics
- \<cite> citation of work. will be shown in italics
- \<bdo> bi directional override. will show text backwards

**HTML Comments**
- \<!-- insert text here -->
- example: <!-- this is an example -->
- good for debugging or putting reminders

**Color**
- html colors have pre-defined color names or you can use RGB, HEX, HSL, or other support color values
- color name examples: <p style ="color:tomato;">tomato</p><p style = "color:slateblue;">slateblue<p>
- background color: style = "background-color: tomato;"
- example: <p style = "background-color: tomato;">hello</p>
- text color: "color:tomato;"
- example: <p style = "color:tomato;">hello</p>
- border color: style = "border: 2px solid tomato;"
    - format: style = "border: [size]px [solid or some other style] [color];"
-example: <p style = "border: 5px dashed tomato;">hello<p>
- you can also replace the color values with other values
- style = "color: tomato" -> style = "color: rgb(...,...,...);"
- just replace the text value with the specified color value format and the number values in the parentheses