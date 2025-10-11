---
layout: page
title: "停留"
permalink: /stop/
icon: fas fa-map-marker-alt
order: 5
---

# 🕓 我的停留城市时间轴

<div class="timeline">

  <div class="timeline-item">
    <div class="timeline-year">2025</div>
    <div class="timeline-content">
      <h3>杭州</h3>
      <p>持续探索AI与创作的城市，西湖边的清晨最治愈。</p>
    </div>
  </div>

  <div class="timeline-item">
    <div class="timeline-year">2024</div>
    <div class="timeline-content">
      <h3>苏州</h3>
      <p>拙政园的水波倒映着温柔的日子。</p>
    </div>
  </div>

  <div class="timeline-item">
    <div class="timeline-year">2023</div>
    <div class="timeline-content">
      <h3>上海</h3>
      <p>在外滩看过最绚烂的夜色，也在咖啡馆写下许多文字。</p>
    </div>
  </div>

  <div class="timeline-item">
    <div class="timeline-year">2021</div>
    <div class="timeline-content">
      <h3>北京</h3>
      <p>走进故宫，登上长城，体会历史的厚重。</p>
    </div>
  </div>

  <div class="timeline-item">
    <div class="timeline-year">2018</div>
    <div class="timeline-content">
      <h3>东京 · 日本</h3>
      <p>樱花季的浅草寺，街角的便利店和雨中的小巷。</p>
    </div>
  </div>

  <div class="timeline-item">
    <div class="timeline-year">2004</div>
    <div class="timeline-content">
      <h3>连云港</h3>
      <p>一切开始的地方，海风和少年。</p>
    </div>
  </div>

</div>

> “旅行不是为了到达目的地，而是为了享受旅途中的每一刻。”

<style>
/* 时间轴整体布局 */
.timeline {
  position: relative;
  margin: 40px 0;
  padding-left: 40px;
  border-left: 3px solid #007acc;
}

/* 每一个时间点 */
.timeline-item {
  position: relative;
  margin-bottom: 40px;
}

/* 时间节点的圆点 */
.timeline-item::before {
  content: "";
  position: absolute;
  left: -9px;
  top: 6px;
  width: 14px;
  height: 14px;
  background-color: #007acc;
  border-radius: 50%;
  box-shadow: 0 0 0 4px #fff;
}

/* 年份 */
.timeline-year {
  font-weight: bold;
  font-size: 1.2em;
  color: #007acc;
  margin-bottom: 6px;
}

/* 内容块 */
.timeline-content {
  background: #f9f9f9;
  border-radius: 8px;
  padding: 12px 16px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.08);
  transition: transform 0.2s ease, background 0.3s ease;
}

.timeline-content:hover {
  background: #eef6ff;
  transform: translateY(-2px);
}

/* 小屏优化 */
@media (max-width: 600px) {
  .timeline {
    padding-left: 25px;
  }
  .timeline-year {
    font-size: 1em;
  }
}
</style>