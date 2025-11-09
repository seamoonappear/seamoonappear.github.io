---
layout: page
title: "文章分类"
permalink: /categories/
---

<h1>文章分类</h1>

<ul>
  {% for category in site.categories %}
    <li>
      <a href="{{ site.baseurl }}/categories/{{ category[0] | slugify }}/">
        {{ category[0] }} ({{ category[1].size }}篇文章)
      </a>
    </li>
  {% endfor %}
</ul>