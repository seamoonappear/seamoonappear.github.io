---
layout: page
title: "分类"
permalink: /categories/
icon: fas fa-list-alt
---

<h2>文章分类</h2>

<ul>
  {% for category in site.categories %}
    <li><a href="{{ site.baseurl }}/categories/{{ category[0] }}">{{ category[0] }}</a> ({{ category[1].size }})</li>
  {% endfor %}
</ul>