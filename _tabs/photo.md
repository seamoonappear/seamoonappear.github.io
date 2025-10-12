---
layout: page
title: "照片"
permalink: /photo/
icon: fas fa-camera
order: 5
---

<div class="photo-container">
  <!-- 导航 -->
  <div class="photo-nav">
    <div class="nav-highlight"></div>
    <button class="nav-btn active" data-tab="scenery">风景</button>
    <button class="nav-btn" data-tab="people">人物</button>
    <button class="nav-btn" data-tab="life">生活</button>
    <button class="nav-btn" data-tab="cat">猫</button>
    <button class="nav-btn" data-tab="random">随手拍</button>
  </div>

  <!-- 标签内容 -->
  <div class="tab-content">
    <!-- 风景 -->
    <div id="scenery" class="tab-pane active">
      <div class="photo-grid">
        <div class="photo-item">
          <img src="{{ '/assets/photos/travel1.jpg' | relative_url }}" alt="风景1">
          <div class="photo-caption">晨雾中的群山</div>
        </div>
        <div class="photo-item">
          <img src="{{ '/assets/photos/travel2.jpg' | relative_url }}" alt="风景2">
          <div class="photo-caption">湖边的宁静</div>
        </div>
        <div class="photo-item">
          <img src="{{ '/assets/photos/travel3.jpg' | relative_url }}" alt="风景3">
          <div class="photo-caption">海边的落日</div>
        </div>
        <div class="photo-item">
          <img src="{{ '/assets/photos/travel4.jpg' | relative_url }}" alt="风景4">
          <div class="photo-caption">林间的光影</div>
        </div>
        <div class="photo-item">
          <img src="{{ '/assets/photos/travel5.jpg' | relative_url }}" alt="风景5">
          <div class="photo-caption">雪后的小镇</div>
        </div>
        <div class="photo-item">
          <img src="{{ '/assets/photos/travel1.jpg' | relative_url }}" alt="风景6">
          <div class="photo-caption">山谷的晨光</div>
        </div>
      </div>
    </div>

    <!-- 人物 -->
    <div id="people" class="tab-pane">
      <div class="photo-grid">
        {% for i in (1..6) %}
        <div class="photo-item">
          <img src="{{ '/assets/photos/person' | append: i | append: '.jpg' | relative_url }}" alt="人物{{i}}">
          <div class="photo-caption">人物{{i}}简介</div>
        </div>
        {% endfor %}
      </div>
    </div>

    <!-- 生活 -->
    <div id="life" class="tab-pane">
      <div class="photo-grid">
        {% for i in (1..6) %}
        <div class="photo-item">
          <img src="{{ '/assets/photos/live' | append: i | append: '.jpg' | relative_url }}" alt="生活{{i}}">
          <div class="photo-caption">生活{{i}}简介</div>
        </div>
        {% endfor %}
      </div>
    </div>

    <!-- 猫 -->
    <div id="cat" class="tab-pane">
      <div class="photo-grid">
        {% for i in (1..6) %}
        <div class="photo-item">
          <img src="{{ '/assets/photos/cat' | append: i | append: '.jpg' | relative_url }}" alt="猫{{i}}">
          <div class="photo-caption">猫{{i}}简介</div>
        </div>
        {% endfor %}
      </div>
    </div>

    <!-- 随手拍 -->
    <div id="random" class="tab-pane">
      <div class="photo-grid">
        {% for i in (1..6) %}
        <div class="photo-item">
          <img src="{{ '/assets/photos/suishou' | append: i | append: '.jpg' | relative_url }}" alt="随手拍{{i}}">
          <div class="photo-caption">随手拍{{i}}简介</div>
        </div>
        {% endfor %}
      </div>
    </div>

  </div>
</div>

<style>
.photo-container { max-width: 960px; margin: 0 auto; }

.photo-nav {
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
  position: relative;
  z-index: 1;
}

.nav-btn:hover { color:#111; background:#f3f3f3; }

.nav-btn.active { font-weight:600; color:#000; }

.nav-highlight {
  position: absolute;
  bottom:0;
  height:3px;
  background: linear-gradient(90deg,#000,#444);
  border-radius:2px;
  transition: all 0.3s ease;
  z-index:0;
}

.tab-content { margin: 2rem 0; }
.tab-pane { display: none; }
.tab-pane.active { display: block; }

.photo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(250px,1fr));
  gap: 12px;
}

.photo-item { display: flex; flex-direction: column; }
.photo-item img {
  width: 100%;
  border-radius: 12px;
  cursor: pointer;
  transition: transform 0.3s ease;
}
.photo-item img:hover { transform: scale(1.05); }

.photo-caption {
  text-align: center;
  margin-top: 4px;
  font-size: 0.9rem;
  color: #555;
}

/* 放大 */
.photo-overlay {
  position: fixed;
  top:0; left:0; width:100vw; height:100vh;
  background: rgba(0,0,0,0.85);
  display:flex;
  justify-content:center;
  align-items:center;
  z-index:9999;
  cursor: zoom-out;
}
.photo-overlay img {
  max-width: 90%;
  max-height: 90%;
  border-radius:12px;
  object-fit:contain;
}

@media(max-width:768px){
  .photo-nav{justify-content:flex-start;padding:6px;}
  .nav-btn{font-size:0.8rem;padding:0.4rem 0.8rem;}
}
</style>

<script>
document.addEventListener("DOMContentLoaded", function() {
  const container = document.querySelector(".photo-container");
  const tabs = container.querySelectorAll(".tab-pane");
  const buttons = container.querySelectorAll(".nav-btn");
  const highlight = container.querySelector(".nav-highlight");

  // 切换标签
  buttons.forEach(btn=>{
    btn.addEventListener("click", ()=>{
      buttons.forEach(b=>b.classList.remove("active"));
      btn.classList.add("active");
      tabs.forEach(t=>t.classList.remove("active"));
      const target = container.querySelector("#"+btn.dataset.tab);
      if(target) target.classList.add("active");
      // 底部条
      const rect = btn.getBoundingClientRect();
      const parentRect = btn.parentElement.getBoundingClientRect();
      highlight.style.width = rect.width+"px";
      highlight.style.left = (rect.left - parentRect.left)+"px";
    });
  });

  // 初始化高亮条
  const activeBtn = container.querySelector(".nav-btn.active") || buttons[0];
  if(activeBtn){
    const rect = activeBtn.getBoundingClientRect();
    const parentRect = activeBtn.parentElement.getBoundingClientRect();
    highlight.style.width = rect.width+"px";
    highlight.style.left = (rect.left - parentRect.left)+"px";
  }

  // 点击放大
  container.querySelectorAll(".photo-item img").forEach(img=>{
    img.addEventListener("click", ()=>{
      const overlay = document.createElement("div");
      overlay.className="photo-overlay";
      const large = document.createElement("img");
      large.src = img.src;
      overlay.appendChild(large);
      document.body.appendChild(overlay);
      overlay.addEventListener("click", ()=>overlay.remove());
    });
  });
});
</script>