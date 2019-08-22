---
layout: default
title: Home
nav_order: 1
description: "Welcome, This is my personal Blog"
permalink: /
modifiedDate: 09-Jun-1986
---

![Skill set ](\assets\images\skillset-cloud.png)

## Latest Post

{% assign pages_list = site.html_pages | sort:"modifiedDate" %}
{% for post in pages_list limit:2 %}
{% if post.title != 'Home' %}

### [{{ post.title }}]({{ post.url }})

{{ post.content }} [Read More...]({{ post.url }})
{% endif %}
{% endfor %}

### Recent Posts

{% for post in pages_list offset:1 limit:3 %}

* [{{ post.title }}]({{ post.url }})

{% endfor %}
