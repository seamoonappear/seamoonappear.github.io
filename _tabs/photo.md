---
layout: page
title: "照片"
permalink: /photo/
icon: fas fa-camera
order: 5
---

<div class="photo-container">
  <div class="photo-nav">
    <div class="nav-highlight"></div>
    <button class="nav-btn active" data-tab="scenery">风景</button>
    <button class="nav-btn" data-tab="people">人物</button>
    <button class="nav-btn" data-tab="life">生活</button>
    <button class="nav-btn" data-tab="cat">猫</button>
    <button class="nav-btn" data-tab="random">随手拍</button>
  </div>

  <div class="tab-content">
    <!-- 风景 -->
    <div id="scenery" class="tab-pane active">
      <div class="photo-grid">
        <figure>
          <img src="{{ '/assets/photos/travel1.jpg' | relative_url }}" alt="风景1">
          <figcaption>山间晨雾</figcaption>
        </figure>
        <figure>
          <img src="{{ '/assets/photos/travel2.jpg' | relative_url }}" alt="风景2">
          <figcaption>湖边日落</figcaption>
        </figure>
        <figure>
          <img src="{{ '/assets/photos/travel3.jpg' | relative_url }}" alt="风景3">
          <figcaption>林间小径</figcaption>
        </figure>
        <figure>
          <img src="{{ '/assets/photos/travel4.jpg' | relative_url }}" alt="风景4">
          <figcaption>雪山远景</figcaption>
        </figure>
        <figure>
          <img src="{{ '/assets/photos/travel5.jpg' | relative_url }}" alt="风景5">
          <figcaption>海边礁石</figcaption>
        </figure>
        <figure>
          <img src="{{ '/assets/photos/travel1.jpg' | relative_url }}" alt="风景6">
          <figcaption>湖光山色</figcaption>
        </figure>
      </div>
    </div>

    <!-- 人物 -->
    <div id="people" class="tab-pane">
      <div class="photo-grid">
        <figure>
          <img src="{{ '/assets/photos/person1.jpg' | relative_url }}" alt="人物1">
          <figcaption>微笑的青年</figcaption>
        </figure>
        <figure>
          <img src="{{ '/assets/photos/person2.jpg' | relative_url }}" alt="人物2">
          <figcaption>街头表演</figcaption>
        </figure>
        <figure>
          <img src="{{ '/assets/photos/person3.jpg' | relative_url }}" alt="人物3">
          <figcaption>公园老人</figcaption>
        </figure>
        <figure>
          <img src="{{ '/assets/photos/person4.jpg' | relative_url }}" alt="人物4">
          <figcaption>咖啡馆读书</figcaption>
        </figure>
        <figure>
          <img src="{{ '/assets/photos/person5.jpg' | relative_url }}" alt="人物5">
          <figcaption>城市街拍</figcaption>
        </figure>
        <figure>
          <img src="{{ '/assets/photos/person6.jpg' | relative_url }}" alt="人物6">
          <figcaption>笑脸小孩</figcaption>
        </figure>
        <figure>
          <img src="{{ '/assets/photos/person7.jpg' | relative_url }}" alt="人物7">
          <figcaption>旅途伙伴</figcaption>
        </figure>
        <figure>
          <img src="{{ '/assets/photos/person8.jpg' | relative_url }}" alt="人物8">
          <figcaption>街头歌手</figcaption>
        </figure>
        <figure>
          <img src="{{ '/assets/photos/person9.jpg' | relative_url }}" alt="人物9">
          <figcaption>咖啡时光</figcaption>
        </figure>
      </div>
    </div>

    <!-- 生活 -->
    <div id="life" class="tab-pane">
      <div class="photo-grid">
        <figure>
          <img src="{{ '/assets/photos/live1.jpg' | relative_url }}" alt="生活1">
          <figcaption>早晨早餐</figcaption>
        </figure>
        <figure>
          <img src="{{ '/assets/photos/live2.jpg' | relative_url }}" alt="生活2">
          <figcaption>城市街景</figcaption>
        </figure>
        <figure>
          <img src="{{ '/assets/photos/live3.jpg' | relative_url }}" alt="生活3">
          <figcaption>夜晚灯光</figcaption>
        </figure>
        <figure>
          <img src="{{ '/assets/photos/live4.jpg' | relative_url }}" alt="生活4">
          <figcaption>市场风情</figcaption>
        </figure>
      </div>
    </div>

    <!-- 猫 -->
    <div id="cat" class="tab-pane">
      <div class="photo-grid">
        <figure>
          <img src="{{ '/assets/photos/cat1.jpg' | relative_url }}" alt="猫1">
          <figcaption>慵懒午后</figcaption>
        </figure>
        <figure>
          <img src="{{ '/assets/photos/cat2.jpg' | relative_url }}" alt="猫2">
          <figcaption>窗台打盹</figcaption>
        </figure>
        <figure>
          <img src="{{ '/assets/photos/cat3.jpg' | relative_url }}" alt="猫3">
          <figcaption>玩耍瞬间</figcaption>
        </figure>
        <figure>
          <img src="{{ '/assets/photos/cat4.jpg' | relative_url }}" alt="猫4">
          <figcaption>伸懒腰</figcaption>
        </figure>
        <figure>
          <img src="{{ '/assets/photos/cat5.jpg' | relative_url }}" alt="猫5">
          <figcaption>夜晚凝视</figcaption>
        </figure>
        <figure>
          <img src="{{ '/assets/photos/cat6.jpg' | relative_url }}" alt="猫6">
          <figcaption>窗外风景</figcaption>
        </figure>
      </div>
    </div>

    <!-- 随手拍 -->
    <div id="random" class="tab-pane">
      <div class="photo-grid">
        <figure>
          <img src="{{ '/assets/photos/suishou1.jpg' | relative_url }}" alt="随手拍1">
          <figcaption>街头瞬间</figcaption>
        </figure>
        <figure>
          <img src="{{ '/assets/photos/suishou2.jpg' | relative_url }}" alt="随手拍2">
          <figcaption>咖啡馆</figcaption>
        </figure>
        <figure>
          <img src="{{ '/assets/photos/suishou3.jpg' | relative_url }}" alt="随手拍3">
          <figcaption>午后阳光</figcaption>
        </figure>
        <figure>
          <img src="{{ '/assets/photos/suishou4.jpg' | relative_url }}" alt="随手拍4">
          <figcaption>书桌小景</figcaption>
        </figure>
        <figure>
          <img src="{{ '/assets/photos/suishou5.jpg' | relative_url }}" alt="随手拍5">
          <figcaption>街角涂鸦</figcaption>
        </figure>
        <figure>
          <img src="{{ '/assets/photos/suishou6.jpg' | relative_url }}" alt="随手拍6">
          <figcaption>公园花草</figcaption>
        </figure>
        <figure>
          <img src="{{ '/assets/photos/suishou7.jpg' | relative_url }}" alt="随手拍7">
          <figcaption>小巷人影</figcaption>
        </figure>
        <figure>
          <img src="{{ '/assets/photos/suishou8.jpg' | relative_url }}" alt="随手拍8">
          <figcaption>夜晚灯光</figcaption>
        </figure>
      </div>
    </div>
  </div>
</div>

<style>
.photo-container {
  max-width: 900px;
  margin: 0 auto;
}

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

.photo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 12px;
}

.photo-grid figure {
  margin: 0;
}

.photo-grid figcaption {
  text-align: center;
  font-size: 0.85rem;
  color: #555;
  margin-top: 4px;
}

.photo-grid img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 12px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.photo-grid img:hover {
  transform: scale(1.05);
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

@media (max-width: 768px) {
  .photo-nav { justify-content: flex-start; padding: 6px; }
  .nav-btn { font-size: 0.8rem; padding: 0.4rem 0.8rem; }
  .photo-grid img { height: 140px; }
}
</style>

<script>
document.addEventListener("turbo:load", initPhotoTabs);

function initPhotoTabs() {
  const navButtons = document.querySelectorAll(".nav-btn");
  const tabPanes = document.querySelectorAll(".tab-pane");
  const highlight = document.querySelector(".nav-highlight");
  if (!navButtons.length || !tabPanes.length || !highlight) return;

  const moveHighlight = (btn) => {
    const rect = btn.getBoundingClientRect();
    const containerRect = btn.parentElement.getBoundingClientRect();
    highlight.style.width = rect.width + "px";
    highlight.style.left