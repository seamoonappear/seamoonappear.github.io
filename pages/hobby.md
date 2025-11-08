---
layout: default
title: 爱好
permalink: /pages/hobby/
---
<!-- ✅ 页面顶部 Banner -->
<div class="media-banner">
  <img src="{{ '/assets/banner/mediabanner.jpg' | relative_url }}" alt="Media Banner">
</div>

<div class="media-container">
  <div class="media-nav">
    <div class="nav-highlight"></div>
    <button class="nav-btn active" data-tab="hobby">爱好</button>
    <button class="nav-btn" data-tab="books">书</button>
    <button class="nav-btn" data-tab="music">音乐</button>
    <button class="nav-btn" data-tab="series">系列</button>
    <button class="nav-btn" data-tab="games">游戏</button>
    <button class="nav-btn" data-tab="others">其他</button>
  </div>

  <div class="tab-content">
    <!-- 爱好页 -->
    <div id="hobby" class="tab-pane active">
      <div class="media-item"><span class="item-name">摄影/调色/修图</span><span class="item-duration">13年</span></div>
      <div class="media-item"><span class="item-name">书法/篆刻/收藏钢笔</span><span class="item-duration">10年</span></div>
      <div class="media-item"><span class="item-name">登山/羽毛球/五子棋</span><span class="item-duration">9年</span></div>
      <div class="media-item"><span class="item-name">烹饪/烘焙</span><span class="item-duration">3年</span></div>
      <div class="media-item"><span class="item-name">网页前端</span><span class="item-duration">1年</span></div>
      <div class="media-item"><span class="item-name">养猫</span><span class="item-duration">1年</span></div>
    </div>

    <!-- 书页 -->
    <div id="books" class="tab-pane">
      <div class="media-item"><span class="item-name">三体</span><span class="item-author">刘慈欣</span></div>
      <div class="media-item"><span class="item-name">活着</span><span class="item-author">余华</span></div>
      <div class="media-item"><span class="item-name">百年孤独</span><span class="item-author">加西亚·马尔克斯</span></div>
      <div class="media-item"><span class="item-name">围城</span><span class="item-author">钱钟书</span></div>
      <div class="media-item"><span class="item-name">挪威的森林</span><span class="item-author">村上春树</span></div>
      <div class="media-item"><span class="item-name">人类简史</span><span class="item-author">尤瓦尔·赫拉利</span></div>
      <div class="media-item"><span class="item-name">原则</span><span class="item-author">瑞·达利欧</span></div>
      <div class="media-item"><span class="item-name">思考，快与慢</span><span class="item-author">丹尼尔·卡尼曼</span></div>
    </div>
    
    <!-- 音乐页 -->
    <div id="music" class="tab-pane">
      <div class="media-item"><span class="item-name">宋家王朝</span><span class="item-director">日系音乐</span></div>
      <div class="media-item"><span class="item-name">故宫的记忆</span><span class="item-director">日系音乐</span></div>
      <div class="media-item"><span class="item-name">英雄的黎明</span><span class="item-director">日系音乐</span></div>
      <div class="media-item"><span class="item-name">故乡的原风景</span><span class="item-director">日系音乐</span></div>
      <div class="media-item"><span class="item-name">风居住的街道</span><span class="item-director">日系音乐</span></div>
      <div class="media-item"><span class="item-name">天空之城</span><span class="item-director">日系音乐</span></div>
    </div>
    
    <!-- 系列页 -->
    <div id="series" class="tab-pane">
      <div class="media-item"><span class="item-name">权力的游戏</span><span class="item-info">美国, 2011</span></div>
      <div class="media-item"><span class="item-name">无耻之徒</span><span class="item-info">美国, 2011</span></div>
      <div class="media-item"><span class="item-name">漫长的季节</span><span class="item-info">中国, 2023</span></div>
      <div class="media-item"><span class="item-name">黑镜</span><span class="item-info">英国, 2011</span></div>
      <div class="media-item"><span class="item-name">纸牌屋</span><span class="item-info">美国, 2013</span></div>
    </div>
    
    <!-- 游戏页 -->
    <div id="games" class="tab-pane">
      <div class="media-item"><span class="item-name">英雄联盟</span><span class="item-year">2009</span></div>
    <!-- 其他页 -->
    <div id="others" class="tab-pane">
      <div class="media-item"><span class="item-name">占位内容1</span><span class="item-info">详细信息1</span></div>
      <div class="media-item"><span class="item-name">占位内容2</span><span class="item-info">详细信息2</span></div>
      <div class="media-item"><span class="item-name">占位内容3</span><span class="item-info">详细信息3</span></div>
    </div>
  </div>
</div>

<style>
/* ✅ Banner 样式 */
.media-banner {
  position: relative;
  width: 100%;
  height: 240px;
  overflow: hidden;
  border-radius: 12px;
  margin-bottom: 2rem;
}
.media-banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.85);
}

/* 主体布局 */
.media-container {
  max-width: 800px;
  margin: 0 auto;
}

.media-nav {
  position: relative;
  display: flex;
  justify-content: center;
  margin: 2rem 0;
  overflow-x: auto;
  white-space: nowrap;
  background: #f8f9fa;
  border-radius: 8px;
  padding: 8px;
}

.nav-btn {
  padding: 0.6rem 1.2rem;
  margin: 0 0.25rem;
  background: white;
  border: 1px solid #e0e0e0;
  cursor: pointer;
  font-size: 0.85rem;
  color: #666;
  border-radius: 6px;
  transition: all 0.3s ease;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
  position: relative;
  z-index: 1;
}

.nav-btn:hover {
  color: #111;
  background-color: #f3f3f3;
  transform: translateY(-1px);
  box-shadow: 0 2px 5px rgba(0,0,0,0.08);
}

.nav-btn.active {
  color: #000;
  font-weight: 600;
}

.nav-highlight {
  position: absolute;
  bottom: 5px;
  height: 3px;
  background: linear-gradient(90deg, #000, #444);
  border-radius: 2px;
  transition: all 0.3s ease;
  z-index: 0;
}

.tab-content {
  margin: 2rem 0;
  min-height: 400px;
}

.tab-pane {
  display: none;
  animation: fadeIn 0.3s ease;
}

.tab-pane.active {
  display: block;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.media-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid #f0f0f0;
  transition: background-color 0.3s ease;
}

.media-item:hover {
  background-color: #fafafa;
}

.item-name {
  font-weight: 500;
  color: #333;
}

.item-duration, .item-author, .item-director, .item-info, .item-year {
  color: #666;
  font-size: 0.9rem;
}

/* 响应式 */
@media (max-width: 768px) {
  .media-nav { justify-content: flex-start; padding: 6px; }
  .nav-btn { font-size: 0.8rem; padding: 0.4rem 0.8rem; }
  .media-container { padding: 0 10px; }
  .media-banner { height: 180px; }
}
</style>

<script>
document.addEventListener("pjax:complete", initMediaTabs);
document.addEventListener("DOMContentLoaded", initMediaTabs);

function initMediaTabs() {
  const navButtons = document.querySelectorAll(".nav-btn");
  const tabPanes = document.querySelectorAll(".tab-pane");
  const highlight = document.querySelector(".nav-highlight");
  if (!navButtons.length || !tabPanes.length || !highlight) return;

  navButtons.forEach(btn => {
    const newBtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(newBtn, btn);
  });

  const newButtons = document.querySelectorAll(".nav-btn");

  const moveHighlight = (btn) => {
    const rect = btn.getBoundingClientRect();
    const containerRect = btn.parentElement.getBoundingClientRect();
    highlight.style.width = rect.width + "px";
    highlight.style.left = rect.left - containerRect.left + "px";
  };

  newButtons.forEach(button => {
    button.addEventListener("click", e => {
      e.preventDefault();
      const targetTab = button.getAttribute("data-tab");
      newButtons.forEach(b => b.classList.remove("active"));
      button.classList.add("active");

      tabPanes.forEach(p => p.classList.remove("active"));
      const targetPane = document.getElementById(targetTab);
      if (targetPane) targetPane.classList.add("active");
    
      moveHighlight(button);
    });
  });

  const activeButton = document.querySelector(".nav-btn.active") || newButtons[0];
  if (activeButton) moveHighlight(activeButton);
}
</script>

---

> “艺术的目的不是要表现生活的外貌，而是表现生活的内在意义。” — 亚里士多德  

最后更新：{{ site.time | date: "%Y年%m月%d日" }}
