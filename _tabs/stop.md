---
layout: page
title: "停留"
permalink: /stop/
icon: fas fa-map-marker-alt
order: 5
---

# 🕰️ 我的停留时间轴

> 记录这些年的足迹与片段，从现在回望，从2004开始。

<div class="timeline">
  <div class="timeline-line"></div>

  <!-- 每一年 -->
  <div class="timeline-item">
    <div class="timeline-year">2025</div>
    <div class="timeline-content">杭州 · 平静与思考的一年</div>
  </div>

  <div class="timeline-item">
    <div class="timeline-year">2024</div>
    <div class="timeline-content">上海 · 新的开始</div>
  </div>

  <div class="timeline-item">
    <div class="timeline-year">2023</div>
    <div class="timeline-content">苏州 · 工作与生活并进</div>
  </div>

  <div class="timeline-item">
    <div class="timeline-year">2022</div>
    <div class="timeline-content">南京 · 雨季与安静</div>
  </div>

  <div class="timeline-item">
    <div class="timeline-year">2021</div>
    <div class="timeline-content">连云港 · 回归与整理</div>
  </div>

  <div class="timeline-item">
    <div class="timeline-year">2020</div>
    <div class="timeline-content">北京 · 忙碌与成长</div>
  </div>

  <div class="timeline-item">
    <div class="timeline-year">2019</div>
    <div class="timeline-content">上海 · 夜色与梦想</div>
  </div>

  <div class="timeline-item">
    <div class="timeline-year">2018</div>
    <div class="timeline-content">东京 · 樱花与回忆</div>
  </div>

  <div class="timeline-item">
    <div class="timeline-year">2017</div>
    <div class="timeline-content">成都 · 美食与闲适</div>
  </div>

  <div class="timeline-item">
    <div class="timeline-year">2016</div>
    <div class="timeline-content">广州 · 南方的热</div>
  </div>

  <div class="timeline-item">
    <div class="timeline-year">2015</div>
    <div class="timeline-content">西安 · 古城的魅力</div>
  </div>

  <div class="timeline-item">
    <div class="timeline-year">2014</div>
    <div class="timeline-content">厦门 · 海边的风</div>
  </div>

  <div class="timeline-item">
    <div class="timeline-year">2013</div>
    <div class="timeline-content">青岛 · 记忆的夏天</div>
  </div>

  <div class="timeline-item">
    <div class="timeline-year">2012</div>
    <div class="timeline-content">重庆 · 山与夜景</div>
  </div>

  <div class="timeline-item">
    <div class="timeline-year">2011</div>
    <div class="timeline-content">武汉 · 河边的风</div>
  </div>

  <div class="timeline-item">
    <div class="timeline-year">2010</div>
    <div class="timeline-content">南京 · 青春的印记</div>
  </div>

  <div class="timeline-item">
    <div class="timeline-year">2009</div>
    <div class="timeline-content">郑州 · 旅途的节点</div>
  </div>

  <div class="timeline-item">
    <div class="timeline-year">2008</div>
    <div class="timeline-content">北京 · 奥运之年</div>
  </div>

  <div class="timeline-item">
    <div class="timeline-year">2007</div>
    <div class="timeline-content">连云港 · 少年的夏天</div>
  </div>

  <div class="timeline-item">
    <div class="timeline-year">2006</div>
    <div class="timeline-content">宿迁 · 第一次远行</div>
  </div>

  <div class="timeline-item">
    <div class="timeline-year">2005</div>
    <div class="timeline-content">徐州 · 新的视野</div>
  </div>

  <div class="timeline-item">
    <div class="timeline-year">2004</div>
    <div class="timeline-content">连云港 · 故乡的开始</div>
  </div>
</div>

---

*最后更新：{{ site.time | date: "%Y年%m月%d日" }}*

<style>
.timeline {
  position: relative;
  margin: 40px 0;
  padding-left: 40px;
  border-left: 2px solid #000;
}
.timeline-line {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #000;
}
.timeline-item {
  position: relative;
  margin: 20px 0 20px 20px;
}
.timeline-item::before {
  content: "";
  position: absolute;
  left: -30px;
  top: 6px;
  width: 12px;
  height: 12px;
  background: #fff;
  border: 2px solid #000;
  border-radius: 50%;
}
.timeline-year {
  font-weight: bold;
  font-size: 1.1em;
  color: #000;
  margin-bottom: 4px;
}
.timeline-content {
  color: #444;
  font-size: 0.95em;
  border-left: 2px solid transparent;
  padding-left: 10px;
}
.timeline-item:hover .timeline-content {
  border-left: 2px solid #000;
  transition: 0.3s;
}
</style>