---
layout: page
title: "时间轴"
permalink: /pages/archives/
icon: fas fa-archive
---

<div class="archives-container">
  {% assign years = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}
  {% for year in years %}
    <div class="year-section" id="{{ year.name }}" style="margin-bottom: 40px;">
      <h2 style="font-size: 24px; color: #333; margin-bottom: 20px;">{{ year.name }} 年</h2>
      <ul style="list-style: none; padding-left: 0;">
        {% for post in year.items %}
          <li style="display: flex; align-items: center; margin-bottom: 10px;">
            <span style="width: 120px; font-size: 14px; color: #777;">{{ post.date | date: "%Y-%m-%d" }}</span>
            <a href="{{ post.url }}" style="font-size: 18px; color: #333; text-decoration: none;">{{ post.title }}</a>
          </li>
        {% endfor %}
      </ul>
    </div>
  {% endfor %}
</div>