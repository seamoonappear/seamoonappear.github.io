---
layout: page
title: "时间轴"
permalink: /pages/archives/
---

<div class="archives-container">
  <div class="timeline">
    {% assign years = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}
    {% for year in years %}
      <div class="timeline-item">
        <a href="#{{ year.name }}" class="year-link">{{ year.name }}</a>
      </div>
    {% endfor %}
  </div>

  <div class="archives-content">
    {% assign years = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}
    {% for year in years %}
      <div class="year-section" id="{{ year.name }}">
        <h2>{{ year.name }} 年</h2>
        <ul>
          {% for post in year.items %}
            <li>
              <a href="{{ post.url }}">{{ post.title }}</a>
              <span>{{ post.date | date: "%Y-%m-%d" }}</span>
            </li>
          {% endfor %}
        </ul>
      </div>
    {% endfor %}
  </div>
</div>
