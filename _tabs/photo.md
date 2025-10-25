---
layout: page
title: "照片"
permalink: /photo/
icon: fas fa-camera
order: 5
sidebar: true
---

<div class="photo-container">
  <!-- 导航标签 -->
  <div class="photo-nav">
    <div class="nav-highlight"></div>
    <button class="nav-btn active" data-tab="scenery">风景</button>
    <button class="nav-btn" data-tab="people">人物</button>
    <button class="nav-btn" data-tab="life">生活</button>
    <button class="nav-btn" data-tab="cat">猫</button>
    <button class="nav-btn" data-tab="random">随手拍</button>
  </div>

  <!-- 图片内容 -->
  <div class="tab-content">
    <!-- 风景 -->
    <div id="scenery" class="tab-pane active">
      <div class="photo-grid">
        <img src="{{ '/assets/photos/travel1.jpg' | relative_url }}" alt="风景1" data-desc="晨雾中的群山">
        <img src="{{ '/assets/photos/travel2.jpg' | relative_url }}" alt="风景2" data-desc="湖边的宁静">
        <img src="{{ '/assets/photos/travel3.jpg' | relative_url }}" alt="风景3" data-desc="海边的落日">
        <img src="{{ '/assets/photos/travel4.jpg' | relative_url }}" alt="风景4" data-desc="林间的光影">
        <img src="{{ '/assets/photos/travel5.jpg' | relative_url }}" alt="风景5" data-desc="雪后的小镇">
        <img src="{{ '/assets/photos/travel1.jpg' | relative_url }}" alt="风景6" data-desc="山谷的晨光">
      </div>
    </div>

    <!-- 人物 -->
    <div id="people" class="tab-pane">
      <div class="photo-grid">
        <img src="{{ '/assets/photos/person1.jpg' | relative_url }}" alt="人物1" data-desc="街角的笑容">
        <img src="{{ '/assets/photos/person2.jpg' | relative_url }}" alt="人物2" data-desc="咖啡馆一隅">
        <img src="{{ '/assets/photos/person3.jpg' | relative_url }}" alt="人物3" data-desc="窗边的光影">
        <img src="{{ '/assets/photos/person4.jpg' | relative_url }}" alt="人物4" data-desc="旅行中的朋友">
        <img src="{{ '/assets/photos/person5.jpg' | relative_url }}" alt="人物5" data-desc="街头表演者">
        <img src="{{ '/assets/photos/person6.jpg' | relative_url }}" alt="人物6" data-desc="回眸一笑">
        <img src="{{ '/assets/photos/person7.jpg' | relative_url }}" alt="人物7" data-desc="午后的小憩">
        <img src="{{ '/assets/photos/person8.jpg' | relative_url }}" alt="人物8" data-desc="远方的目光">
        <img src="{{ '/assets/photos/person9.jpg' | relative_url }}" alt="人物9" data-desc="雨中的伞影">
      </div>
    </div>

    <!-- 生活 -->
    <div id="life" class="tab-pane">
      <div class="photo-grid">
        <img src="{{ '/assets/photos/live1.jpg' | relative_url }}" alt="生活1" data-desc="清晨的早餐">
        <img src="{{ '/assets/photos/live2.jpg' | relative_url }}" alt="生活2" data-desc="街头的日常">
        <img src="{{ '/assets/photos/live3.jpg' | relative_url }}" alt="生活3" data-desc="阳台上的花">
        <img src="{{ '/assets/photos/live4.jpg' | relative_url }}" alt="生活4" data-desc="傍晚的影子">
      </div>
    </div>

    <!-- 猫 -->
    <div id="cat" class="tab-pane">
      <div class="photo-grid">
        <img src="{{ '/assets/photos/cat1.jpg' | relative_url }}" alt="猫1" data-desc="慵懒的午后">
        <img src="{{ '/assets/photos/cat2.jpg' | relative_url }}" alt="猫2" data-desc="专注的眼神">
        <img src="{{ '/assets/photos/cat3.jpg' | relative_url }}" alt="猫3" data-desc="趴在窗台上">
        <img src="{{ '/assets/photos/cat4.jpg' | relative_url }}" alt="猫4" data-desc="打哈欠的瞬间">
        <img src="{{ '/assets/photos/cat5.jpg' | relative_url }}" alt="猫5" data-desc="藏在被窝里">
        <img src="{{ '/assets/photos/cat6.jpg' | relative_url }}" alt="猫6" data-desc="等待晚餐的样子">
      </div>
    </div>

    <!-- 随手拍 -->
    <div id="random" class="tab-pane">
      <div class="photo-grid">
        <img src="{{ '/assets/photos/suishou1.jpg' | relative_url }}" alt="随手拍1" data-desc="路边的光影">
        <img src="{{ '/assets/photos/suishou2.jpg' | relative_url }}" alt="随手拍2" data-desc="旧墙上的涂鸦">
        <img src="{{ '/assets/photos/suishou3.jpg' | relative_url }}" alt="随手拍3" data-desc="雨后的街道">
        <img src="{{ '/assets/photos/suishou4.jpg' | relative_url }}" alt="随手拍4" data-desc="书页之间的光">
        <img src="{{ '/assets/photos/suishou5.jpg' | relative_url }}" alt="随手拍5" data-desc="橱窗里的世界">
        <img src="{{ '/assets/photos/suishou6.jpg' | relative_url }}" alt="随手拍6" data-desc="角落里的植物">
        <img src="{{ '/assets/photos/suishou7.jpg' | relative_url }}" alt="随手拍7" data-desc="晨光透过窗帘">
        <img src="{{ '/assets/photos/suishou8.jpg' | relative_url }}" alt="随手拍8" data-desc="夜色下的灯">
      </div>
    </div>
  </div>
</div>

<style>
.photo-container { max-width: 900px; margin: 0 auto; }
.photo-nav { position: relative; display: flex; justify-content: center; margin: 2rem 0; overflow-x: auto; white-space: nowrap; background: #f8f9fa; border-radius: 8px; padding: 8px; }
.nav-btn { padding: 0.6rem 1.2rem; margin: 0 0.25rem; background: white; border: 1px solid #e0e0e0; cursor: pointer; font-size: 0.85rem; color: #666; border-radius: 6px; transition: all 0.3s ease; box-shadow: 0 1px 3px rgba(0,0,0,0.05); position: relative; z-index: 1; }
.nav-btn:hover { color: #111; background-color: #f3f3f3; transform: translateY(-1px); box-shadow: 0 2px 5px rgba(0,0,0,0.08); }
.nav-btn.active { color: #000; font-weight: 600; }
.nav-highlight { position: absolute; bottom: 5px; height: 3px; background: linear-gradient(90deg, #000, #444); border-radius: 2px; transition: all 0.3s ease; z-index: 0; }
.tab-content { margin: 2rem 0; }
.tab-pane { display: none; animation: fadeIn 0.3s ease; }
.tab-pane.active { display: block; }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
.photo-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 12px; }
.photo-grid img { width: 100%; height: 180px; object-fit: cover; border-radius: 12px; cursor: pointer; transition: transform 0.3s ease, box-shadow 0.3s ease; }
.photo-grid img:hover { transform: scale(1.05); box-shadow: 0 5px 15px rgba(0,0,0,0.2); }
.photo-overlay { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0,0,0,0.85); display: flex; flex-direction: column; justify-content: center; align-items: center; z-index: 9999; cursor: zoom-out; }
.photo-overlay img.photo-large { max-width: 90%; max-height: 80%; border-radius: 12px; box-shadow: 0 4px 20px rgba(255,255,255,0.2); object-fit: contain; }
.photo-desc { color: #fff; font-size: 1rem; margin-top: 12px; text-align: center; background: rgba(0,0,0,0.4); padding: 6px 16px; border-radius: 8px; backdrop-filter: blur(4px); }
@media (max-width: 768px) { .photo-nav { justify-content: flex-start; padding: 6px; } .nav-btn { font-size: 0.8rem; padding: 0.4rem 0.8rem; } .photo-grid img { height: 140px; } }
</style>

<script>
function initPhotoTabs() {
  const container = document.querySelector(".photo-container");
  if (!container) return;

  const nav = container.querySelector(".photo-nav");
  const tabPanes = container.querySelectorAll(".tab-pane");
  const highlight = nav.querySelector(".nav-highlight");

  if (!nav || !tabPanes.length || !highlight) return;

  nav.addEventListener("click", function(e) {
    const button = e.target.closest(".nav-btn");
    if (!button) return;
    const targetTab = button.dataset.tab;

    nav.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
    button.classList.add("active");

    tabPanes.forEach(p => p.classList.remove("active"));
    const targetPane = container.querySelector("#" + targetTab);
    if (targetPane) targetPane.classList.add("active");

    const rect = button.getBoundingClientRect();
    const containerRect = nav.getBoundingClientRect();
    highlight.style.width = rect.width + "px";
    highlight.style.left = (rect.left - containerRect.left) + "px";
  });

  const activeButton = nav.querySelector(".nav-btn.active") || nav.querySelector(".nav-btn");
  if (activeButton) {
    const rect = activeButton.getBoundingClientRect();
    const containerRect = nav.getBoundingClientRect();
    highlight.style.width = rect.width + "px";
    highlight.style.left = (rect.left - containerRect.left) + "px";
  }

  document.querySelectorAll(".photo-grid img").forEach(img => {
    img.addEventListener("click", () => {
      const overlay = document.createElement("div");
      overlay.className = "photo-overlay";

      const largeImg = document.createElement("img");
      largeImg.src = img.src;
      largeImg.alt = img.alt;
      largeImg.className = "photo-large";

      const desc = document.createElement("div");
      desc.className = "photo-desc";
      desc.textContent = img.dataset.desc || "";

      overlay.appendChild(largeImg);
      if (desc.textContent) overlay.appendChild(desc);
      document.body.appendChild(overlay);

      overlay.addEventListener("click", () => overlay.remove());
    });
  });
}

document.addEventListener("DOMContentLoaded", initPhotoTabs);
</script>
