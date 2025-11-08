---
layout: default
title: 驻足
permalink: /pages/stops/
icon: fas fa-map-marker-alt
---
<!-- 顶部横幅 -->
<div class="banner">
  <img src="{{ '/assets/banner/stopbanner.jpg' | relative_url }}" alt="Stop Banner">
</div>

> 记录这些年的足迹，从现在回望，从2004开始。

<div class="timeline">
  <div class="timeline-line"></div>

  <div class="timeline-item"><div class="timeline-year">2025</div><div class="timeline-content">杭州 上海 南通 绍兴 南京 深圳 中山 佛山 东莞 广州 成都 徐州 西宁 德令哈 连云港</div></div>
  <div class="timeline-item"><div class="timeline-year">2024</div><div class="timeline-content">杭州 成都 上海 北京 广州 深圳 中山 东莞 湖州 嘉兴 绍兴 西宁 德令哈 连云港 香格里拉 楚雄 大理 昆明 </div></div>
  <div class="timeline-item"><div class="timeline-year">2023</div><div class="timeline-content">杭州 北京 广州 连云港</div></div>
  <div class="timeline-item"><div class="timeline-year">2022</div><div class="timeline-content">杭州 连云港</div></div>
  <div class="timeline-item"><div class="timeline-year">2021</div><div class="timeline-content">杭州 连云港</div></div>
  <div class="timeline-item"><div class="timeline-year">2020</div><div class="timeline-content">杭州·疫情亮码</div></div>
  <div class="timeline-item"><div class="timeline-year">2019</div><div class="timeline-content">杭州 西宁 连云港 上海 南京</div></div>
  <div class="timeline-item"><div class="timeline-year">2018</div><div class="timeline-content">杭州 上海 苏州 无锡 常州 合肥 连云港 湖州</div></div>
  <div class="timeline-item"><div class="timeline-year">2017</div><div class="timeline-content">杭州 徐州 枣庄 南京 连云港</div></div>
  <div class="timeline-item"><div class="timeline-year">2016</div><div class="timeline-content">杭州 温州 合肥 南宁</div></div>
  <div class="timeline-item"><div class="timeline-year">2015</div><div class="timeline-content">杭州 连云港 上海 南京 嘉兴 湖州 金华</div></div>
  <div class="timeline-item"><div class="timeline-year">2014</div><div class="timeline-content">杭州 连云港</div></div>
  <div class="timeline-item"><div class="timeline-year">2013</div><div class="timeline-content">杭州 广州 深圳 连云港</div></div>
  <div class="timeline-item"><div class="timeline-year">2012</div><div class="timeline-content">杭州 绍兴 嘉兴 连云港</div></div>
  <div class="timeline-item"><div class="timeline-year">2011</div><div class="timeline-content">杭州 南京 上海 连云港</div></div>
  <div class="timeline-item"><div class="timeline-year">2010</div><div class="timeline-content">杭州 南京 长沙 武汉 连云港</div></div>
  <div class="timeline-item"><div class="timeline-year">2009</div><div class="timeline-content">杭州</div></div>
  <div class="timeline-item"><div class="timeline-year">2008</div><div class="timeline-content">哈尔滨 成都 拉萨 北京</div></div>
  <div class="timeline-item"><div class="timeline-year">2007</div><div class="timeline-content">哈尔滨 长春 沈阳 连云港</div></div>
  <div class="timeline-item"><div class="timeline-year">2006</div><div class="timeline-content">哈尔滨 连云港</div></div>
  <div class="timeline-item"><div class="timeline-year">2005</div><div class="timeline-content">哈尔滨 连云港 徐州</div></div>
  <div class="timeline-item"><div class="timeline-year">2004</div><div class="timeline-content">哈尔滨·北上求学</div></div>
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

.banner-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
}

/* ===== 时间轴样式（统一左侧） ===== */
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

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* 手机端优化 */
@media (max-width: 768px) {
  .banner {
    height: 200px;
    border-radius: 0;
  }
  .timeline {
    padding-left: 30px;
  }
  .timeline-line {
    left: 15px;
  }
  .timeline-item {
    padding-left: 36px;
  }
  .timeline-item::before {
    left: 10px;
  }
}
</style>
