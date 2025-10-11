---
layout: page
title: "驻足"
permalink: /stop/
icon: fas fa-map-marker-alt
order: 5
---

# 🕰️ 我的驻足时间轴

> 记录这些年的足迹，从现在回望，从2024开始。

<div class="timeline">
  <div class="timeline-line"></div>

  <div class="timeline-item left"><div class="timeline-year">2025</div><div class="timeline-content">杭州</div></div>
  <div class="timeline-item right"><div class="timeline-year">2024</div><div class="timeline-content">上海</div></div>
  <div class="timeline-item left"><div class="timeline-year">2023</div><div class="timeline-content">苏州</div></div>
  <div class="timeline-item right"><div class="timeline-year">2022</div><div class="timeline-content">南京</div></div>
  <div class="timeline-item left"><div class="timeline-year">2021</div><div class="timeline-content">连云港</div></div>
  <div class="timeline-item right"><div class="timeline-year">2020</div><div class="timeline-content">北京</div></div>
  <div class="timeline-item left"><div class="timeline-year">2019</div><div class="timeline-content">上海</div></div>
  <div class="timeline-item right"><div class="timeline-year">2018</div><div class="timeline-content">东京</div></div>
  <div class="timeline-item left"><div class="timeline-year">2017</div><div class="timeline-content">成都</div></div>
  <div class="timeline-item right"><div class="timeline-year">2016</div><div class="timeline-content">广州</div></div>
  <div class="timeline-item left"><div class="timeline-year">2015</div><div class="timeline-content">西安</div></div>
  <div class="timeline-item right"><div class="timeline-year">2014</div><div class="timeline-content">厦门</div></div>
  <div class="timeline-item left"><div class="timeline-year">2013</div><div class="timeline-content">青岛</div></div>
  <div class="timeline-item right"><div class="timeline-year">2012</div><div class="timeline-content">重庆</div></div>
  <div class="timeline-item left"><div class="timeline-year">2011</div><div class="timeline-content">武汉</div></div>
  <div class="timeline-item right"><div class="timeline-year">2010</div><div class="timeline-content">南京</div></div>
  <div class="timeline-item left"><div class="timeline-year">2009</div><div class="timeline-content">郑州</div></div>
  <div class="timeline-item right"><div class="timeline-year">2008</div><div class="timeline-content">北京</div></div>
  <div class="timeline-item left"><div class="timeline-year">2007</div><div class="timeline-content">连云港</div></div>
  <div class="timeline-item right"><div class="timeline-year">2006</div><div class="timeline-content">宿迁</div></div>
  <div class="timeline-item left"><div class="timeline-year">2005</div><div class="timeline-content">徐州</div></div>
  <div class="timeline-item right"><div class="timeline-year">2004</div><div class="timeline-content">连云港</div></div>
</div>

---

*最后更新：{{ site.time | date: "%Y年%m月%d日" }}*

<style>
.timeline {
  position: relative;
  max-width: 800px;
  margin: 60px auto;
  padding: 0 10px;
}

/* 中轴线 */
.timeline-line {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 1.5px;
  background: #000;
  transform: translateX(-50%);
}

/* 时间节点 */
.timeline-item {
  position: relative;
  width: 50%;
  padding: 10px 20px;
  box-sizing: border-box;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.8s ease forwards;
}

/* 动画延迟，每个节点依次出现 */
.timeline-item:nth-child(1) { animation-delay: 0.1s; }
.timeline-item:nth-child(2) { animation-delay: 0.2s; }
.timeline-item:nth-child(3) { animation-delay: 0.3s; }
.timeline-item:nth-child(4) { animation-delay: 0.4s; }
.timeline-item:nth-child(5) { animation-delay: 0.5s; }
.timeline-item:nth-child(6) { animation-delay: 0.6s; }
.timeline-item:nth-child(7) { animation-delay: 0.7s; }
.timeline-item:nth-child(8) { animation-delay: 0.8s; }
.timeline-item:nth-child(9) { animation-delay: 0.9s; }
.timeline-item:nth-child(10) { animation-delay: 1s; }
.timeline-item:nth-child(11) { animation-delay: 1.1s; }
.timeline-item:nth-child(12) { animation-delay: 1.2s; }
.timeline-item:nth-child(13) { animation-delay: 1.3s; }
.timeline-item:nth-child(14) { animation-delay: 1.4s; }
.timeline-item:nth-child(15) { animation-delay: 1.5s; }
.timeline-item:nth-child(16) { animation-delay: 1.6s; }
.timeline-item:nth-child(17) { animation-delay: 1.7s; }
.timeline-item:nth-child(18) { animation-delay: 1.8s; }
.timeline-item:nth-child(19) { animation-delay: 1.9s; }
.timeline-item:nth-child(20) { animation-delay: 2s; }
.timeline-item:nth-child(21) { animation-delay: 2.1s; }
.timeline-item:nth-child(22) { animation-delay: 2.2s; }

/* 左右布局 */
.timeline-item.left { left: 0; text-align: right; }
.timeline-item.right { left: 50%; text-align: left; }

/* 节点圆点 */
.timeline-item::before {
  content: "";
  position: absolute;
  top: 14px;
  width: 10px;
  height: 10px;
  background: #fff;
  border: 2px solid #000;
  border-radius: 50%;
  z-index: 1;
}
.timeline-item.left::before { right: -6px; }
.timeline-item.right::before { left: -6px; }

/* 虚线 */
.timeline-item::after {
  content: "";
  position: absolute;
  top: 22px;
  bottom: -20px;
  width: 1px;
  background: repeating-linear-gradient(
    to bottom,
    transparent,
    transparent 4px,
    #ccc 4px,
    #ccc 6px
  );
}
.timeline-item.left::after { right: -2px; }
.timeline-item.right::after { left: -2px; }

/* 年份 */
.timeline-year {
  font-weight: 600;
  font-size: 1.05em;
  color: #000;
  margin-bottom: 4px;
}

/* 城市 */
.timeline-content {
  color: #555;
  font-size: 0.95em;
  border-top: 1px dashed #ccc;
  margin-top: 6px;
  padding-top: 4px;
}

/* 动画 */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* 手机端单列 */
@media (max-width: 768px) {
  .timeline-item, .timeline-item.left, .timeline-item.right {
    left: 0;
    width: 100%;
    text-align: left;
    padding-left: 40px;
  }
  .timeline-line { left: 20px; }
  .timeline-item::before { left: 14px; }
  .timeline-item::after { left: 19px; }
}
</style>