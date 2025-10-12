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
        <img src="{{ '/assets/photos/travel1.jpg' | relative_url }}" alt="风景1" data-desc="日出海景">
        <img src="{{ '/assets/photos/travel2.jpg' | relative_url }}" alt="风景2" data-desc="山间小路">
        <img src="{{ '/assets/photos/travel3.jpg' | relative_url }}" alt="风景3" data-desc="湖边倒影">
      </div>
    </div>

    <!-- 人物 -->
    <div id="people" class="tab-pane">
      <div class="photo-grid">
        <img src="{{ '/assets/photos/person1.jpg' | relative_url }}" alt="人物1" data-desc="街头行人">
        <img src="{{ '/assets/photos/person2.jpg' | relative_url }}" alt="人物2" data-desc="微笑少女">
      </div>
    </div>

    <!-- 生活 -->
    <div id="life" class="tab-pane">
      <div class="photo-grid">
        <img src="{{ '/assets/photos/live1.jpg' | relative_url }}" alt="生活1" data-desc="书桌一角">
        <img src="{{ '/assets/photos/live2.jpg' | relative_url }}" alt="生活2" data-desc="咖啡与书">
      </div>
    </div>

    <!-- 猫 -->
    <div id="cat" class="tab-pane">
      <div class="photo-grid">
        <img src="{{ '/assets/photos/cat1.jpg' | relative_url }}" alt="猫1" data-desc="睡觉的小猫">
        <img src="{{ '/assets/photos/cat2.jpg' | relative_url }}" alt="猫2" data-desc="好奇的猫">
      </div>
    </div>

    <!-- 随手拍 -->
    <div id="random" class="tab-pane">
      <div class="photo-grid">
        <img src="{{ '/assets/photos/suishou1.jpg' | relative_url }}" alt="随手拍1" data-desc="街头风景">
        <img src="{{ '/assets/photos/suishou2.jpg' | relative_url }}" alt="随手拍2" data-desc="咖啡杯">
      </div>
    </div>
  </div>
</div>

<style>
.photo-container { max-width: 900px; margin: 0 auto; }
.photo-nav { position: relative; display: flex; justify-content: center; margin: 2rem 0; overflow-x: auto; white-space: nowrap; background: #f8f9fa; border-radius: 8px; padding: 8px; }
.nav-btn { padding: 0.6rem 1.2rem; margin: 0 0.25rem; background: white; border: 1px solid #e0e0e0; cursor: pointer; font-size: 0.85rem; color: #666; border-radius: 6px; transition: all 0.3s ease; position: relative; z-index: 1; }
.nav-btn:hover { color: #111; background-color: #f3f3f3; transform: translateY(-1px); box-shadow: 0 2px 5px rgba(0,0,0,0.08); }
.nav-btn.active { color: #000; font-weight: 600; }
.nav-highlight { position: absolute; bottom: 5px; height: 3px; background: linear-gradient(90deg,#000,#444); border-radius: 2px; transition: all 0.3s ease; z-index: 0; }
.tab-content { margin: 2rem 0; }
.tab-pane { display: none; animation: fadeIn 0.3s ease; }
.tab-pane.active { display: block; }
@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
.photo-grid { display: grid; grid-template-columns: repeat(auto-fill,minmax(250px,1fr)); gap:12px; }
.photo-grid img { width:100%; height:180px; object-fit:cover; border-radius:12px; cursor:pointer; transition: transform 0.3s ease, box-shadow 0.3s ease; }
.photo-grid img:hover { transform: scale(1.05); box-shadow:0 5px 15px rgba(0,0,0,0.2); }
@media (max-width:768px){ .photo-nav{justify-content:flex-start;padding:6px;} .nav-btn{font-size:0.8rem;padding:0.4rem 0.8rem;} .photo-grid img{height:140px;} }
</style>

<script>
document.addEventListener("DOMContentLoaded", function() {
  const container = document.querySelector(".photo-container");
  if (!container) return;

  const nav = container.querySelector(".photo-nav");
  const tabPanes = container.querySelectorAll(".tab-pane");
  const highlight = nav.querySelector(".nav-highlight");

  function activateTab(button) {
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
  }

  nav.addEventListener("click", function(e) {
    const button = e.target.closest(".nav-btn");
    if (button) activateTab(button);
  });

  // 初始化
  const activeButton = nav.querySelector(".nav-btn.active") || nav.querySelector(".nav-btn");
  if (activeButton) activateTab(activeButton);

  // 图片放大
  container.querySelectorAll(".photo-grid img").forEach(img => {
    img.addEventListener("click", function() {
      const overlay = document.createElement("div");
      overlay.style.position = "fixed";
      overlay.style.top = 0;
      overlay.style.left = 0;
      overlay.style.width = "100%";
      overlay.style.height = "100%";
      overlay.style.background = "rgba(0,0,0,0.8)";
      overlay.style.display = "flex";
      overlay.style.justifyContent = "center";
      overlay.style.alignItems = "center";
      overlay.style.zIndex = 9999;
      overlay.style.cursor = "zoom-out";

      const largeImg = document.createElement("img");
      largeImg.src = img.src;
      largeImg.style.maxWidth = "90%";
      largeImg.style.maxHeight = "90%";
      largeImg.style.borderRadius = "12px";
      largeImg.style.boxShadow = "0 10px 30px rgba(0,0,0,0.5)";

      overlay.appendChild(largeImg);
      document.body.appendChild(overlay);

      overlay.addEventListener("click", () => document.body.removeChild(overlay));
    });
  });
});
</script>