---
layout: page
title: "文章分类"
permalink: /categories/
---

# 所有分类

<ul>
  {% for category in site.categories %}
    {% assign category_slug = category[0] | slugify %}
    <li>
      <a href="{{ site.baseurl }}/categories/{{ category_slug }}/">
        {{ category[0] }} ({{ category[1].size }}篇文章)
      </a>
    </li>
  {% endfor %}
</ul>