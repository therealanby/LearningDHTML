## Notes
### Labels and groups
- form fields should have labels
- label tag
- 'for' attribute in the label tag with the value set to the value of the id of 
the input field
- the input field should have an id to go with label and a name attribute to go with the form to handle the field
- fieldset tag to group fields together
- legend tag to name the group
- optgroup tag for option tags inside select tag
- will group options inside the dropdown menu
- set the name of the group with the label attribute
- you can also set accesskey and tabindex attributes to fields 
for easier access 

### More form stuff
- [link to page](https://www.htmldog.com/guides/html/advanced/html5forms1/)
- [link to 2nd page](https://www.htmldog.com/guides/html/advanced/html5forms2/)
- basically talks about more advanced form features

### Embed stuff
- video tag with src for local or absolute link to video
    - controls and autoplay attribute
    - you can also set the height and width 
    - poster attribute for placeholder image before the video is played
    - fallback content between the opening and closing video tag if video does not load 
    (you can use an image tag for example)
    - video fallback: instead of including the link as an attribute, include a link and backup links as the src 
    attribute in source tags between video tag
    - example: \<video controls><br>
    \<source src="kitties.mp4" type="video/mp4; codecs='avc1, mp4a'"><br>
    \<source src="kitties.webm" type="video/webm; codecs='vp8.0, vorbis'"><br>
    \<p>Browser no likey HTML 5.</p>
</video>
- audio tag with same src thing as video tag
- canvas tag with id, width, and height attribute (there could be more attributes to add)
- canvas is used with JS to paint stuff
