---
layout: default
title: 'CSS'
parent: 'Client Side'
grand_parent: Application Design
nav_order: 8
modifiedDate: 2020-03-17
comments: true
is_display_Horizontal_Ads: true
---
{% include clock.html %}

Cascading style sheets (CSS) are used to format the layout of [HTML](html.md) pages. 
Most developers takes CSS for granted and not worry too much learning it, which breaks its sole purpose of [Separation of Concerns](separationofconcerns.md)


Most developers need basic understanding of CSS, even though they don't want to be a full time UI expert. CSS should be made in a way that the person maintaining the HTML and CSS are two different persons.

If the styles are written in a 'lets fix this now' attitude, sooner or later we may face the consequences maintaining it. The common problems in writing CSS

## Readability
These are the factors that affect readability.
### Inline styles. 
    The easiest one is to write styles inline, but in future the change can be as simple as to change the font color or increase the font size of all header texts. You will end up fixing the issues for a week or endlessly. 
    The one minute fix here is to spend five minutes initially to write a class and use it. Always remember people tend to keep the place clean if its already clean. Else everyone will add their minute contributions. 

### Inconsistent naming
Using multiple classes with same style definitions or not following a naming standard can affect the reusability of classes. Make use of generic classes, and you can add multiple classes for elements. 

```html
    .left {float:left}
    .right {float:right}
    <div id="hero-element" class="left">...</div>
```



#### Resources
Learn advanced [CSS](https://coding-artist.teachable.com/p/how-to-make-pure-css-images)

    