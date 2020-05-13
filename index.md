---
layout: default
title: Home
nav_order: 1
description: "Welcome to Rajakani's personal Blog"
permalink: /
---
<!--{% include quotes-widget.html %} -->
{% assign pages_list =  site.html_pages | sort_natural:"modifiedDate" | reverse %}
{% for post in pages_list %}
{% if post.title == 'Software Trends' %}
{{ post.content }}
{% endif %}
{% endfor %}

### Recent Posts

{% for post in pages_list offset:1 limit:5 %}

[{{ post.title }}]({{ post.url }})
{% endfor %}
