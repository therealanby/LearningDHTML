## Notes
### Span and div
- span and div tags apply no meaning
- purpose of the two tags is to work in conjunction with CSS
- used to group chunks of HTML together and give some info to that chunk. 
Those info usually include attributes such as class and id values 
- span is used for in-line and thus used for small chunks of HTML code inside a line (such as a paragraph)
- div (division) is used for block-line (elements with a line break before and after) and thus used to group large chunks of HTML code
- div and span shouldn't be used that often (span especially). If there is an alternative, use it.
- example: if you want to add a span for a text to bold it, it's much better to just use the bold tag instead

### More text stuff
- abbr tag: used to abbreviate text. The usage of
the title attribute to define the abbreviation is recommended. 
- the abbr tag will underline the text. The title attribute will make the value appear after hovering over the element
- q tags: quotes
- blockquote tag: mult-line quote
- cite attribute to point quote to origins
- cite tag: cite text
- code tag: format text to look like code(doesn't do anything though)
    - var tag: variables
    - kbd: user input format
    - samp: sample output format
    - these are just formatting. Doesn't do anything
- pre tag: preformatted tag. white spaces and new lines will actually show up if 
you type it that way between the tags

### Meta tags
- meta tags don't affect the appearance
- they provide information for search engines to catalogue information about the webpage
- used inside head element
- attributes are used to describe stuff

### More about tables
- rowspan and colspan attribute
- header cells (already discussed yesterday)
- row and col span defines how big a cell is

### Description Lists
- a list of descriptions
- dl tag to start the list off
- dt tag (terms)
- dd tag (description for terms)
- this is kinda like a dictionary
- more dd can follow one dt

### More obscure tags
- address tag
- dfn tag (used like abbr with title attribute)
- bdo tag (dir attribute = "rtl") to display text right to left
- ins and del tag (underline and strikethrough?)

### Sectioning
- article tag to mark a standalone section of content
- section tag to mark a section and also can be used to break up parts of an article
- better to use these over div I think
- header and footer tags also create sections
- aside tag for content related to surrounding content
- figure and figcaption ...
- nav tag to group together navigation links