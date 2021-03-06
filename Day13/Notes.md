## Notes
**CSS Borders**
- CSS border properties allow you to change style, width, and color of a border
- "border-style" is the style
    - values:
    - dotted
    - dashed
    - solid
    - double - two lines
    - groove - 3D groove 
    - ridge  - 3D ridge
    - inset - 3D inset
    - outset - 3D outset
    - none
    - hidden
    - you can have multiple values in one declaration to describe each side of the border: top, right, bottom, left
    - this property needs to be set before working with other border properties
- "border-width" is the width
    - specific size(px, pt, cm, ...)
    - pre-defined: thin, medium, thick
    - you can define a value for each side: top, right, bottom, left
- "border-color" is the color
    - you can use any of the allowed color formats
    - you can define a value for each side: top, right, bottom, left
- you can put top, right, bottom, or left between the two words separated by dashes to specify the border side
    - bottom-top-style
- shorthand: "border"
    - you can specify side by adding the side name after thing separated by dash
    - border-width, style, color (this is the order to define the values)
- "border-radius" for roundness of border