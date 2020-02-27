---
layout: default
title: Home
nav_order: 1
description: "Welcome to Rajakani's personal Blog"
permalink: /
---
{% include quotes-widget.html %}
<!-- {% assign pages_list =  site.html_pages | sort_natural:"modifiedDate" | reverse %}
{% for post in pages_list limit:5 %}
{% if post.title != 'Home' %}

## [{{ post.title }}]({{ post.url }})

{% if post.content contains "<!- more ->" %}
     {{ post.content | split:"<!- more ->" | first  }}     

     <a class="info">{{ post.url }}</a>

   {% else %}
     {{ post.content }}
   {% endif %}

{% endif %}
{% endfor %} -->

### Recent Posts

{% for post in pages_list offset:1 limit:5 %}

[{{ post.title }}]({{ post.url }})
{% endfor %}
