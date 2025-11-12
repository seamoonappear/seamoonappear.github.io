---
layout: default
title: 分类
permalink: /pages/categories/
---

{% assign sorted_categories = site.categories | sort %}

<div class="container my-5">
  <h1 class="mb-4 text-center">文章分类</h1>

  {% if sorted_categories.size > 0 %}
    {% for category in sorted_categories %}
      {% assign category_name = category | first %}
      {% assign posts = category | last %}

      <div id="{{ category_name }}" class="category-section mb-5">
        <h3 class="category-title border-bottom pb-2 mb-3">
          <i class="fas fa-folder-open text-secondary me-2"></i>
          {{ category_name }} <small class="text-muted">({{ posts.size }})</small>
        </h3>

        <ul class="list-unstyled ms-3">
          {% for post in posts %}
            <li class="mb-2">
              <a href="{{ post.url | relative_url }}" class="text-decoration-none">
                <i class="fas fa-file-alt me-2 text-muted"></i>{{ post.title }}
              </a>
              <span class="text-muted small"> - {{ post.date | date: "%Y年%-m月%-d日" }}</span>
            </li>
          {% endfor %}
        </ul>
      </div>
    {% endfor %}
  {% else %}
    <p class="text-center text-muted">暂时还没有分类内容。</p>
  {% endif %}
</div>