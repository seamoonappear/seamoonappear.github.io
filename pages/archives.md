---
layout: page
title: "时间轴"
permalink: /pages/archives/
icon: fas fa-archive
---

<div class="archives-container" style="display: flex;">

  <!-- 左侧年份时间轴 -->
  <div class="timeline" style="width: 15%; padding-right: 20px;">
    {% assign years = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}
    {% for year in years %}
      <div class="timeline-item" style="margin-bottom: 20px;">
        <a href="#{{ year.name }}" style="font-size: 18px; color: #007BFF; text-decoration: none; display: block;">{{ year.name }}</a>
      </div>
    {% endfor %}
  </div>

  <!-- 右侧内容 -->
  <div class="archives-content" style="width: 85%;">
    {% assign years = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}
    {% for year in years %}
      <div class="year-section" id="{{ year.name }}" style="margin-bottom: 40px;">
        <h2 style="font-size: 24px; color: #333; margin-bottom: 20px;">{{ year.name }} 年</h2>
        <ul style="list-style: none; padding-left: 0;">
          {% for post in year.items %}
            <li style="display: flex; align-items: center; margin-bottom: 10px;">
              <!-- 中间显示月日 -->
              <span style="width: 80px; font-size: 14px; color: #777;">{{ post.date | date: "%m-%d" }}</span>
              <!-- 文章标题 -->
              <a href="{{ post.url }}" style="font-size: 18px; color: #333; text-decoration: none;">{{ post.title }}</a>
            </li>
          {% endfor %}
        </ul>
      </div>
    {% endfor %}
  </div>

</div>