---
layout: page
title: "照片"
permalink: /photo/
icon: fas fa-camera
order: 4
---

<style>
.media-container {
  width: 100%;
  text-align: center;
}

.media-nav {
  position: relative;
  display: inline-flex;
  gap: 16px;
  border-bottom: 2px solid #e0e0e0;
  margin-bottom: 20px;
}

.media-nav .nav-btn {
  background: none;
  border: none;
  font-size: 16px;
  padding: 10px 14px;
  cursor: pointer;
  position: relative;
  color: #666;
  transition: color 0.2s;
}

.media-nav .nav-btn.active {
  color: #000;
  font-weight: 500;
}

.media-nav .nav-highlight {
  position: absolute;
  bottom: -2px;
  height: 2px;
  background: #000;
  transition: all 0.3s ease;
}

.tab-pane {
  display: none;
  animation: fadeIn 0.4s ease;
}

.tab-pane.active {
  display: block;
}

.photo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 10px;
  padding: 10px;
}

.photo-grid img {
  width: 100%;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.photo-grid img:hover {
  transform: scale(1.03);
}

/* 点击放大样式 */
.photo-overlay {
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  background: rgba(0,0,0,0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.photo-overlay img.photo-large {
  max-width: 90%;
  max-height: 80%;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(255,255,255,0.3);
}

@keyframes fadeIn {
  from {opacity: 0;}
  to {opacity: 1;}
}
</style>

<div class="media-container">
  <div class="media-nav">
    <div class="nav-highlight"></div>
    <button class="nav-btn active" data-tab="travel">旅游</button>
    <button class="nav-btn" data-tab="life">生活</button>
    <button class="nav-btn" data-tab="cat">猫</button>
    <button class="nav-btn" data-tab="casual">随手拍</button>
  </div>

  <!-- 旅游 -->
  <div class="tab-pane active" id="travel">
    <div class="photo-grid">
      <img src="{{ '/assets/photos/travel1.jpg' | relative_url }}" alt="">
      <img src="{{ '/assets/photos/travel2.jpg' | relative_url }}" alt="">
      <img src="{{ '/assets/photos/travel3.jpg' | relative_url }}" alt="">
      <img src="{{ '/assets/photos/travel4.jpg' | relative_url }}" alt="">
      <img src="{{ '/assets/photos/travel5.jpg' | relative_url }}" alt="">
      <img src="{{ '/assets/photos/travel6.jpg' | relative_url }}" alt="">
    </div>
  </div>

  <!-- 生活 -->
  <div class="tab-pane" id="life">
    <div class="photo-grid">
      <img src="{{ '/assets/photos/life1.jpg' | relative_url }}" alt="">
      <img src="{{ '/assets/photos/life2.jpg' | relative_url }}" alt="">
      <img src="{{ '/assets/photos/life3.jpg' | relative_url }}" alt="">
      <img src="{{ '/assets/photos/life4.jpg' | relative_url }}" alt="">
      <img src="{{ '/assets/photos/life5.jpg' | relative_url }}" alt="">
      <img src="{{ '/assets/photos/life6.jpg' | relative_url }}" alt="">
    </div>
  </div>

  <!-- 猫 -->
  <div class="tab-pane" id="cat">
    <div class="photo-grid">
      <img src="{{ '/assets/photos/cat1.jpg' | relative_url }}" alt="">
      <img src="{{ '/assets/photos/cat2.jpg' | relative_url }}" alt="">
      <img src="{{ '/assets/photos/cat3.jpg' | relative_url }}" alt="">
      <img src="{{ '/assets/photos/cat4.jpg' | relative_url }}" alt="">
      <img src="{{ '/assets/photos/cat5.jpg' | relative_url }}" alt="">
      <img src="{{ '/assets/photos/cat6.jpg' | relative_url }}" alt="">
    </div>
  </div>

  <!-- 随手拍 -->
  <div class="tab-pane" id="casual">
    <div class="photo-grid">
      <img src="{{ '/assets/photos/casual1.jpg' | relative_url }}" alt="">
      <img src="{{ '/assets/photos/casual2.jpg' | relative_url }}" alt="">
      <img src="{{ '/assets/photos/casual3.jpg' | relative_url }}" alt="">
      <img src="{{ '/assets/photos/casual4.jpg' | relative_url }}" alt="">
      <img src="{{ '/assets/photos/casual5.jpg' | relative_url }}" alt="">
      <img src="{{ '/assets/photos/casual6.jpg' | relative_url }}" alt="">
    </div>
  </div>
</div>

<script>
function initPhotoTabs() {
  const container = document.querySelector(".media-container");
  if (!container) return;

  const nav = container.querySelector(".media-nav");
  const buttons = nav.querySelectorAll(".nav-btn");
  const tabPanes = container.querySelectorAll(".tab-pane");
  const highlight = nav.querySelector(".nav-highlight");

  // 点击切换标签
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      // 激活按钮
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      // 切换内容
      tabPanes.forEach(pane => {
        pane.classList.remove("active");
        if (pane.id === btn.dataset.tab) pane.classList.add("active");
      });

      // 移动高亮条
      const rect = btn.getBoundingClientRect();
      const navRect = nav.getBoundingClientRect();
      highlight.style.width = rect.width + "px";
      highlight.style.left = (rect.left - navRect.left) + "px";
    });
  });

  // 初始化高亮条
  const activeBtn = nav.querySelector(".nav-btn.active");
  if (activeBtn) {
    const rect = activeBtn.getBoundingClientRect();
    const navRect = nav.getBoundingClientRect();
    highlight.style.width = rect.width + "px";
    highlight.style.left = (rect.left - navRect.left) + "px";
  }

  // 点击图片放大
  const allImgs = container.querySelectorAll(".photo-grid img");
  allImgs.forEach(img => {
    img.addEventListener("click", () => {
      const overlay = document.createElement("div");
      overlay.className = "photo-overlay";
      overlay.innerHTML = `<img class="photo-large" src="${img.src}" alt="">`;
      document.body.appendChild(overlay);
      overlay.addEventListener("click", () => overlay.remove());
    });
  });
}

document.addEventListener("DOMContentLoaded", initPhotoTabs);
document.addEventListener("pjax:complete", initPhotoTabs);
</script>