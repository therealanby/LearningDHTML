# Notes
### Getting started
- HTML files are basically text files read as instructions for browsers to load websites
- In other words, in can use notepad to type HTML
- .html file extension
- HTML document include tags and closing tags
- some tags are elements. Elements make up a webpage
- some tags can contain attributes that include more information about the element.
- structure(top to bottom): declaration of doctype, html tag, head tag, ...[tags inside head element]..., head close, body, ..., body close, html close.
- title tag in header for title
- p tag in body for paragraphs
- different tags can be used inside p tag to style text (bold, underline, ...)
- headers are used to separate content
- unordered and ordered lists (ul and ol) to specify. List items (li) to actually show the items
- you can nest the tags to make a list in a list
- \<!--"insert comment here"-->
- a tag with href attribute (put link or #id or .class to jump to a sepcific element or site)
- img tag with src attribute (and some other attributes to change width and stuff)
    - commonly used image formats
    - JPEG - compressed image (photos)
    - GIF - low color range and transparency (icon, logo)
    - PNG - a GIF but much more colors and alpha transparency (most versatile in compex design but not supported by all browsers)
- tables (arrrrrrrrgh)
- table tag to start things off
- tr tag (table row) to start a row
- td tag (table data) to add a data cell
- th tag (table head) for data cell but bolded/more important I guess
- forms (static since this is html)(you need JS and some other stuff to actually get the info sent somewhere)
- attributes:
    - action - where to send content
    - method - how to send
        - values
        - get - short chunks of non-sensitive
        - post - lengthier and secure submissions
- input tag
- attributes:
    - type = 
    - "text" - textbox
    - "password" - hidden text textbox
    - "checkbox" - box
    - "radio" - radio button
    - "sumbit" - submit button
- textarea tag is multi-line text box
- select tag for dropdown boxes
- option tag for options for the select tag
- name attribute to link to a script
- value attribute for text to show up for input(input doesn't have closing tag)