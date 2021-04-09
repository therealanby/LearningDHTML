## Notes

**Links**
- Links allow users to click from page to page
- HTML links are called hyperlinks
- you can click on one and jump to another document
- hovering over a link will change the cursor to a hand
- link does not have to be text. It can be an image or some other HTML element
- active state is when mouse click is held

**HTML link syntax**
- \<a> defines a link
- syntax \<a href = "url">display text\</a>
- href indicates the destination of the link
- clicking on the text will send the clicker to the URL address
- default: unvisited link is blue, visited is purple and active is red. All three are underlined
- links can be styled with CSS

**target attribute**
- default, link will be displayed in current tab
- target attribute changes this
- values for target:
    - _self opens in same tab/window
    - _blank opens in new tab/window
    - _parent opens in "parent frame". I think that just means current tab
    - _top opens in full body of the window
    - example: \<a href = "www.google.com" target = "_blank">stuff\</a>

**absolute vs relative**
- href attribute URLs can be absolute or relative
- absolute URL is a full website address
- a local link/relative URL is a link to a page within the same website. The link excludes the "https://www" part

**using other elements as links**
- put a tag inside the \<a> tag instead of text
- \<a href = "google.com">\<img scr = "image.jpg" alt = "text" style = "width:42px; height:42px;">\</a>

**email address**
- href = "mailto:username@domain.com"
- use mailto:

**Button**
- to use a button, you have to add Javascript code
- Javascript allows you to specify what happens at certain events
- example: \<button onclick = "document.location = 'default.asp'">click here \</button>

**changing link style**
- in the css file, you have these tags:
    - a:link - uncliked
    - a:visited - visited
    - a:hover - what to do when cursor hovers over it
    - a:active - what to do when mouse is held
- properties:
    - color - text color
    - background-color - background color
    - text-decoration - text format (underline)
    - some more like display, padding, text-align...