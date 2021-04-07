## Notes

**CSS Overview**
- CSS stands for Cascading Style Sheets
- CSS is very useful
- It can control the layout of multiple web pages
- It is used to control the format of the layout of the page
- you can control color, font, text size, spacing, element positioning, background images, device display, screen size, and some more
- word cascading in CSS actually does stuff. It means that if you apply something to the parent element, all child elements will also have that attribute unless specified otherwise

**Implementing CSS**
1. Inline - using the style attribute inside elements
2. Internal - style(\<style></style>) element in the \<head> section 
3. External - link(\<link>) element to link an external CSS file

- 3rd method is probably best. In fact, it's the most common

**Inline**
- used to apply an unique style to a single element
- you use the style attribute
- example: <br>\<h1 style = "color:blue;">Blue\</h1> <br>\<p style = "color:red;">Red\</p>

**Internal**
- define a style for a single html page
- defined in the head section within a style element
- basically, you specify elements and what style they will be in. 
- normally, all instances of that element will be set to that style but there are ways to divide elements into groups so that each group has a style
- that will not be covered today so for now, all instances will be set to a style
- format: \<style></style> [element name] {[thing to style]:[value];} [another element] {[thing to style]:[value]; [another thing to style]:value;}\</style>
- example: 
\<style></style>
body {background-color: powderblue;}
h1 {color: blue;}
p {color: red;}
\</style>

**External**
- an external style sheet is used to define a style for many HTML pages
- to use one, add a link to it in the \<head> section of each HTML page that you want to have that style
- linking: \<link rel = "stylesheet" href = "style.css">
- rel is an attribute to define the relationship between current page and linked page
- href is an attribute to define the link or name (style.css is a name and not a link. This means that there must be a style.css file in the directory)
- the stylesheet cannot contain HTML code. The syntax is different. It must be saved with a .css extension
- The format of the code in the sheet is similar to the code within the style element of the internal css thing. This excludes the \<style></style> tag
- Nice thing about external sheets is that changing one sheet will change all pages that is linked to the sheet. This means that you can change the style of an entire website will one sheet.

**Common CSS properties**
- template (used for internal and external)<br>
[element name] {<br>
  [property]:[value];<br>
  [property]:[value];  
}
- properties: 
    - color - defines text color
    - font-family - defines font
    - font-size - defines size of font (in %)
    - border - a border around the element (can have multiple values: size, style, color)
    - padding - space between text and border (in px)
    - margin - space outside border (in px)

**Linking external CSS**
- full URL to style sheet "\<link rel="stylesheet" href="https://www.w3schools.com/html/styles.css">"
- relative path (in same folder/directory) "\<link rel="stylesheet" href="/html/styles.css">"