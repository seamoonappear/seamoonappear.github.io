---
layout: default
title: "时间轴"
permalink: /archives/
icon: fas fa-calendar-alt
---

<!-- 页面说明 -->

> 回顾博客文章，从最新到最早。

<div class="timeline">
  <div class="timeline-line"></div>

  {% assign posts_by_year = site.posts | group_by_exp: "post", "post.date | date: '%Y'" | sort: "name" | reverse %}
  
  {% for year in posts_by_year %}
  <div class="timeline-item">
    <div class="timeline-year">{{ year.name }}</div>
    <div class="timeline-content">
      {% assign posts_by_month = year.items | sort: "date" | reverse %}
      {% for post in posts_by_month %}
      <div>
        <span>{{ post.date | date: "%m-%d" }}</span> — <a href="{{ post.url }}">{{ post.title }}</a>
      </div>
      {% endfor %}
    </div>
  </div>
  {% endfor %}
</div>

---

*最后更新：{{ site.time | date: "%Y年%m月%d日" }}*

<style>
/* ===== 顶部横幅 ===== */
.banner {
  position: relative;
  width: 100%;
  height: 260px;
  overflow: hidden;
  border-radius: 12px;
  margin-bottom: 40px;
}

.banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.75);
  transition: all 0.6s ease;
}

.banner:hover img {
  filter: brightness(0.9);
  transform: scale(1.02);
}

/* ===== 时间轴样式 ===== */
.timeline {
  position: relative;
  max-width: 800px;
  margin: 60px auto;
  padding-left: 40px;
}

.timeline-line {
  position: absolute;
  left: 20px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #000;
}

.timeline-item {
  position: relative;
  margin-bottom: 40px;
  padding-left: 40px;
  animation: fadeInUp 0.8s ease forwards;
  opacity: 0;
  transform: translateY(20px);
}

.timeline-item::before {
  content: "";
  position: absolute;
  top: 8px;
  left: 14px;
  width: 10px;
  height: 10px;
  background: #fff;
  border: 2px solid #000;
  border-radius: 50%;
  z-index: 1;
}

.timeline-year {
  font-weight: 600;
  font-size: 1.05em;
  color: #000;
  margin-bottom: 4px;
}

.timeline-content {
  color: #555;
  font-size: 0.95em;
  border-left: 2px dashed #ccc;
  padding-left: 12px;
  margin-left: 6px;
}

.timeline-content a {
  color: #333;
  text-decoration: none;
}

.timeline-content a:hover {
  text-decoration: underline;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* 手机端优化 */
@media (max-width: 768px) {
  .banner { height: 200px; border-radius: 0; }
  .timeline { padding-left: 30px; }
  .timeline-line { left: 15px; }
  .timeline-item { padding-left: 36px; }
  .timeline-item::before { left: 10px; }
}
</style>
