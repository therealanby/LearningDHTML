## Notes
### Super and subscript
- use span tag to assign class/id to in-line text
- using the super/subscript tag is bad because it alters the line height 
which results in inconsistent spacing in the paragraph
- a better method is to slightly nudge the text you want to sub/superscript 
using CSS
- adjust the size, color and other aspects of the sub/superscript to your liking

### Customized Underlines
- instead of using text-decoration: underline, you can use some CSS to make your own
- you can apply a border to the bottom of the link text. This gives you control of the color and pattern
- you can also use an image (add padding) (make sure to use background-size to size down the image so it can be used)
- you can add transitions to make cool effects when hovering over the link

### Rollovers
- when hovering over something, rollover will change that thing to something else
- you can achieve with the a tag and the hover pseudo-class
- you can also add a transition
- [more details](https://www.htmldog.com/techniques/rollovers/)