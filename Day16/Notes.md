## Notes
**Margins**
- used to create space around of element outside of borders
- you can control the margins for each side
- margin-[top, right, bottom, left] is the property
- values: 
    - auto - browser calculates margin
    - length - measure units: px
    - % - percent
    - inherit - parent element inheritance
- negative values are allowed
- shorthand property: margin
    - the value order is: top, right, bottom, left
- bottom and top margins can sometimes merge/collapse into each other. 
    - example: 20 px bottom + 50 px top will become 50 px instead of 70

**Padding**
- used to create space inside borders
- padding-[top, right, bottom, left]
- values:
    - length
    - %
    - inherit
- no negative values
- shorthand: padding
- order of values is clockwise from top 
- padding will contribute/be added to the width of an element
- use property: box-sizing with a value of border-box to set it so that increased paddding will decrease available width

**Height/width**
- used to set height and width of an element
- max-width is used to set maximum
- values:
    - auto
    - length
    - %
    - initial - default value
    - inherit
- max-width overrides width