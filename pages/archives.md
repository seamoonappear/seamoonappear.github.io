---
layout: page
title: "时间轴"
permalink: /pages/archives/
---

<div class="timeline-container">
  {% assign posts_by_year = site.posts | group_by_exp: "post", "post.date | date: '%Y'" | sort: "name" | reverse %}
  
  {% for year in posts_by_year %}
  <div class="timeline-year">
    <!-- 年份点 -->
    <div class="timeline-year-marker">
      <span class="year">{{ year.name }}</span>
    </div>
    
    <!-- 年份下的文章 -->
    <div class="timeline-posts">
      {% assign posts_by_month = year.items | sort: "date" %}
      {% for post in posts_by_month %}
      <div class="timeline-post">
        <div class="post-date">{{ post.date | date: "%m-%d" }}</div>
        <div class="post-title"><a href="{{ post.url }}">{{ post.title }}</a></div>
      </div>
      {% endfor %}
    </div>
  </div>
  {% endfor %}
</div>

<style>
.timeline-container {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding-left: 60px; /* 给时间轴留空间 */
}

.timeline-year {
  position: relative;
  margin-bottom: 40px;
}

.timeline-year-marker {
  position: absolute;
  left: 0;
  top: 0;
  width: 20px;
  height: 20px;
  background: #007BFF;
  border-radius: 50%;
  text-align: center;
  line-height: 20px;
  color: #fff;
  font-weight: bold;
}

.timeline-year-marker .year {
  position: absolute;
  left: 30px;
  top: -2px;
  font-size: 18px;
  color: #007BFF;
}

.timeline-posts {
  margin-left: 40px; /* 文章靠右显示 */
  border-left: 2px solid #007BFF; /* 时间轴线 */
  padding-left: 20px;
  padding-top: 5px;
}

.timeline-post {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.timeline-post .post-date {
  width: 60px;
  font-weight: bold;
  color: #555;
}

.timeline-post .post-title a {
  color: #333;
  text-decoration: none;
}

.timeline-post .post-title a:hover {
  text-decoration: underline;
}
</style>