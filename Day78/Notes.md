## Notes
### Tabbed Navigation 
- [link](https://www.htmldog.com/techniques/tabs/)
- popular navigation design
- group of links protruding from the area of content in the from of tabs
- note: this is a group of links meaning that clicking on it will send you to a different page
- note: this is similar looking to responsive tabs but it is different. This sends you to a new page while responsive tabs stays on the same page but switches the content in view
- steps
    - create a header tag to organize stuff at top. also create a nav tag to organize navigation tags.
    - create an unordered list with links as items (the link for the current page should have an id with value "selected")
    - create a section tag to organize section content (add id with value of "content" so it can be styled later)
    - repeat for other pages in the list
    - style the tabs
    - style the list items so that they are inline
    - add padding to link (a tag) so the tabs aren't squished
    - "Adjusting the padding of the a element box, rather than the li element boxes has the advantage of making the whole width of the tab clickable."
    - style content and selected so the current tab connects to the content. The content should have a border around it. 
    - note: the white background overlaps the black border so it looks like it's connected to the white background of the content. The black border line is still there but just covered.
    