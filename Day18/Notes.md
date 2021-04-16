## Notes
**CSS Text Color**
- set text color with "color" property
- If you define color, then it's also good practice to define background color
- define background color with "background-color" property

**Text Alignment**
- "text-align" property
- values:
    - center
    - left
    - right
    - justify - all lines have equal width and margins are straight
- direction:
    - direction property with value of rtl (right to left)
    - unicode-bidi: bidi-override;  (must be included I think)
- vertical align
    - "vertical-align"
    - values: top, middle, bottom

**Text Decorations**
- text-decoration property
- values: none, overline, line-through, underline
- tip: underlining non-link text is confusing

**Text Transform**
- property "text-transform" 
- values: 
    - lowercase
    - uppercase
    - capitalize (capital first letter)

**Text Spacing**
- text-indent property (value is in units)
- letter-spacing property (space between letters) (can be negative) (value is in units)
- line-height property (space between lines)
- word-spacing property (size of space between words)
- white-space property (how white space is handled)
    - values: normal, nowrap, and some others

**Text shadow**
- text-shadow property
- value order: horizontal shadow, vertical shadow, blur, color

**Fonts**
- font-family property
- generic families:
    - serif: small strokes at edge of each letter (formality and elegance)
    - sans-serif: clean lines (no small strokes) (modern minimalistic look)
    - monospace: all letters have a fixed width (mechanical look)
    - cursive: human handwriting imitation 
    - fantasy: decorative/playful
- there should be multiple values separated by commas to act as a fallback in case some fonts are unavailable
- more than one word font names should be surrounded by quotation ("")

**Font style**
- font-style property
- values:
    - normal
    - italic
    - oblique
    - note: oblique is an incline of the font while italic is actually a whole new set of letters

**Font weight**
- font-weight
- values: normal, bold

**Font variants**
- font-variants
- sample value: small-caps

**Font size**
- font-size
- value
    - px
    - em (1em is 16px) (scalable so many devs use this)
    - %
    - vw (viewport width) (1vw = 1% of viewport width)

**Custom fonts**
- import using \<link rel = "stylesheet" href = "link"> in the html file
- link is the link to the custom fonts
- example: https://fonts.googleapis.com/css?family=Audiowide
- you can add multiple fonts using multiple link elements
- or separate the names at the end of the link using the pipeline character("|")
- example: https://fonts.googleapis.com/css?family=Audiowide|Sofia|Trirong
- look into font effects that google allows

**Pairings**
- [too lazy to take notes](https://www.w3schools.com/css/css_font_pairings.asp)

**Font Shorthand**
- font property
- order: font-stlye, *-variant, *-weight, *-size/line-height, *-family
- required: font-size and font-family. default values for the others will be used if missing