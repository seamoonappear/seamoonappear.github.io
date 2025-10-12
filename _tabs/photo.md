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
        <img src="{{ '/assets/photos/travel1.jpg' | relative_url }}" alt="风景1">
        <img src="{{ '/assets/photos/travel2.jpg' | relative_url }}" alt="风景2">
        <img src="{{ '/assets/photos/travel3.jpg' | relative_url }}" alt="风景3">
        <img src="{{ '/assets/photos/travel4.jpg' | relative_url }}" alt="风景4">
        <img src="{{ '/assets/photos/travel5.jpg' | relative_url }}" alt="风景5">
        <img src="{{ '/assets/photos/travel1.jpg' | relative_url }}" alt="风景6">
      </div>
    </div>

    <!-- 人物 -->
    <div id="people" class="tab-pane">
      <div class="photo-grid">
        <img src="{{ '/assets/photos/person1.jpg' | relative_url }}" alt="人物1">
        <img src="{{ '/assets/photos/person2.jpg' | relative_url }}" alt="人物2">
        <img src="{{ '/assets/photos/person3.jpg' | relative_url }}" alt="人物3">
        <img src="{{ '/assets/photos/person4.jpg' | relative_url }}" alt="人物4">
        <img src="{{ '/assets/photos/person5.jpg' | relative_url }}" alt="人物5">
        <img src="{{ '/assets/photos/person6.jpg' | relative_url }}" alt="人物6">
        <img src="{{ '/assets/photos/person7.jpg' | relative_url }}" alt="人物7">
        <img src="{{ '/assets/photos/person8.jpg' | relative_url }}" alt="人物8">
        <img src="{{ '/assets/photos/person9.jpg' | relative_url }}" alt="人物9">
      </div>
    </div>

    <!-- 生活 -->
    <div id="life" class="tab-pane">
      <div class="photo-grid">
        <img src="{{ '/assets/photos/live1.jpg' | relative_url }}" alt="生活1">
        <img src="{{ '/assets/photos/live2.jpg' | relative_url }}" alt="生活2">
        <img src="{{ '/assets/photos/live3.jpg' | relative_url }}" alt="生活3">
        <img src="{{ '/assets/photos/live4.jpg' | relative_url }}" alt="生活4">
      </div>
    </div>

    <!-- 猫 -->
    <div id="cat" class="tab-pane">
      <div class="photo-grid">
        <img src="{{ '/assets/photos/cat1.jpg' | relative_url }}" alt="猫1">
        <img src="{{ '/assets/photo/cat2.jpg' | relative_url }}" alt="猫2">
        <img src="{{ '/assets/photos/cat3.jpg' | relative_url }}" alt="猫3">
        <img src="{{ '/assets/photos/cat4.jpg' | relative_url }}" alt="猫4">
        <img src="{{ '/assets/photos/cat5.jpg' | relative_url }}" alt="猫5">
        <img src="{{ '/assets/photos/cat6.jpg' | relative_url }}" alt="猫6">
      </div>
    </div>

    <!-- 随手拍 -->
    <div id="random" class="tab-pane">
      <div class="photo-grid">
        <img src="{{ '/assets/photos/suishou1.jpg' | relative_url }}" alt="随手拍1">
        <img src="{{ '/assets/photos/suishou2.jpg' | relative_url }}" alt="随手拍2">
        <img src="{{ '/assets/photos/suishou3.jpg' | relative_url }}" alt="随手拍3">
        <img src="{{ '/assets/photos/suishou4.jpg' | relative_url }}" alt="随手拍4">
        <img src="{{ '/assets/photos/suishou5.jpg' | relative_url }}" alt="随手拍5">
        <img src="{{ '/assets/photos/suishou6.jpg' | relative_url }}" alt="随手拍6">        
        <img src="{{ '/assets/photos/suishou7.jpg' | relative_url }}" alt="随手拍7">
        <img src="{{ '/assets/photos/suishou8.jpg' | relative_url }}" alt="随手拍8">
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

/* 响应式 */
@media (max-width: 768px) {
  .photo-nav { justify-content: flex-start; padding: 6px; }
  .nav-btn { font-size: 0.8rem; padding: 0.4rem 0.8rem; }
  .photo-grid img { height: 140px; }
}
</style>

<script>
document.addEventListener("pjax:complete", initPhotoTabs);
document.addEventListener("DOMContentLoaded", initPhotoTabs);

function initPhotoTabs() {
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

  // 点击图片放大
  document.querySelectorAll('.photo-grid img').forEach(img => {
    img.addEventListener('click', () => {
      const overlay = document.createElement('div');
      overlay.style.position = 'fixed';
      overlay.style.top = 0;
      overlay.style.left = 0;
      overlay.style.width = '100%';
      overlay.style.height = '100%';
      overlay.style.background = 'rgba(0,0,0,0.8)';
      overlay.style.display = 'flex';
      overlay.style.alignItems = 'center';
      overlay.style.justifyContent = 'center';
      overlay.style.cursor = 'zoom-out';
      overlay.style.zIndex = 9999;

      const imgLarge = document.createElement('img');
      imgLarge.src = img.src;
      imgLarge.style.maxWidth = '90%';
      imgLarge.style.maxHeight = '90%';
      imgLarge.style.borderRadius = '12px';
      overlay.appendChild(imgLarge);

      overlay.addEventListener('click', () => overlay.remove());
      document.body.appendChild(overlay);
    });
  });
}
</script>
