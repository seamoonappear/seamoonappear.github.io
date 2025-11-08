---
layout: page
title: "时间轴"
permalink: /pages/archives/
---

<div class="archives-container">
  <div class="timeline" style="float: left; width: 30%; padding-right: 20px;">
    {% assign years = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}
    {% for year in years %}
      <div class="timeline-item" style="margin-bottom: 20px;">
        <a href="#{{ year.name }}" class="year-link" style="font-size: 20px; color: #007BFF; text-decoration: none; padding: 5px 10px; border-radius: 5px; display: block;">{{ year.name }}</a>
      </div>
    {% endfor %}
  </div>

  <div class="archives-content" style="float: left; width: 65%;">
    {% assign years = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}
    {% for year in years %}
      <div class="year-section" id="{{ year.name }}" style="margin-bottom: 40px;">
        <h2 style="font-size: 24px; color: #333;">{{ year.name }} 年</h2>
        <ul style="list-style-type: none; padding-left: 0;">
          {% for post in year.items %}
            <li style="margin-bottom: 10px;">
              <a href="{{ post.url }}" style="font-size: 18px; color: #333; text-decoration: none;">{{ post.title }}</a>
              <span style="font-size: 14px; color: #777; margin-left: 10px;">{{ post.date | date: "%Y-%m-%d" }}</span>
            </li>
          {% endfor %}
        </ul>
      </div>
    {% endfor %}
  </div>
</div>

<div style="clear: both;"></div>
