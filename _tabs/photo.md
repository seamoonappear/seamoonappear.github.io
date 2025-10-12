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
        <div class="photo-item">
          <img src="{{ '/assets/photos/travel1.jpg' | relative_url }}" alt="风景1">
          <div class="photo-caption">描述1</div>
        </div>
        <div class="photo-item">
          <img src="{{ '/assets/photos/travel2.jpg' | relative_url }}" alt="风景2">
          <div class="photo-caption">描述2</div>
        </div>
        <div class="photo-item">
          <img src="{{ '/assets/photos/travel3.jpg' | relative_url }}" alt="风景3">
          <div class="photo-caption">描述3</div>
        </div>
        <div class="photo-item">
          <img src="{{ '/assets/photos/travel4.jpg' | relative_url }}" alt="风景4">
          <div class="photo-caption">描述4</div>
        </div>
        <div class="photo-item">
          <img src="{{ '/assets/photos/travel5.jpg' | relative_url }}" alt="风景5">
          <div class="photo-caption">描述5</div>
        </div>
        <div class="photo-item">
          <img src="{{ '/assets/photos/travel1.jpg' | relative_url }}" alt="风景6">
          <div class="photo-caption">描述6</div>
        </div>
      </div>
    </div>

    <!-- 人物 -->
    <div id="people" class="tab-pane">
      <div class="photo-grid">
        {% for i in (1..9) %}
        <div class="photo-item">
          <img src="{{ '/assets/photos/person' | append: i | append: '.jpg' | relative_url }}" alt="人物{{ i }}">
          <div class="photo-caption">描述{{ i }}</div>
        </div>
        {% endfor %}
      </div>
    </div>

    <!-- 生活 -->
    <div id="life" class="tab-pane">
      <div class="photo-grid">
        {% for i in (1..4) %}
        <div class="photo-item">
          <img src="{{ '/assets/photos/live' | append: i | append: '.jpg' | relative_url }}" alt="生活{{ i }}">
          <div class="photo-caption">描述{{ i }}</div>
        </div>
        {% endfor %}
      </div>
    </div>

    <!-- 猫 -->
    <div id="cat" class="tab-pane">
      <div class="photo-grid">
        {% for i in (1..6) %}
        <div class="photo-item">
          <img src="{{ '/assets/photos/cat' | append: i | append: '.jpg' | relative_url }}" alt="猫{{ i }}">
          <div class="photo-caption">描述{{ i }}</div>
        </div>
        {% endfor %}
      </div>
    </div>

    <!-- 随手拍 -->
    <div id="random" class="tab-pane">
      <div class="photo-grid">
        {% for i in (1..8) %}
        <div class="photo-item">
          <img src="{{ '/assets/photos/suishou' | append: i | append: '.jpg' | relative_url }}" alt="随手拍{{ i }}">
          <div class="photo-caption">描述{{ i }}</div>
        </div>
        {% endfor %}
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
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 12px;
}

.photo-item {
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 12px;
}

.photo-item img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 12px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.photo-item img:hover {
  transform: scale(1.05);
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

/* 悬停显示文字描述 */
.photo-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 6px 0;
  text-align: center;
  background: rgba(0,0,0,0.5);
  color: #fff;
  font-size: 0.85rem;
  opacity: 0;
  transition: opacity 0.3s ease;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
}

.photo-item:hover .photo-caption {
  opacity: 1;
}

/* 响应式 */
@media (max-width: 768px) {
  .photo-nav { justify-content: flex-start; padding: 6px; }
  .nav-btn { font-size: 0.8rem; padding: 0.4rem 0.8rem; }
  .photo-item img { height: 140px; }
}
</style>

<script>
function initPhotoTabs() {
  const container = document.querySelector('.photo-container');
  if (!container) return;

  const navButtons = container.querySelectorAll('.nav-btn');
  const tabPanes = container.querySelectorAll('.tab-pane');
  const highlight = container.querySelector('.nav-highlight');
  if (!navButtons.length || !tabPanes.length || !highlight) return;

  const moveHighlight = (btn) => {
    const rect = btn.getBoundingClientRect();
    const containerRect = btn.parentElement.getBoundingClientRect();
    highlight.style.width = rect.width + 'px';
    highlight.style.left = rect.left - containerRect.left + 'px';
  };

  navButtons.forEach(button => {
    button.addEventListener('click', e => {
      e.preventDefault();
      const targetTab = button.getAttribute('data-tab');
      navButtons.forEach(b => b.classList.remove('active'));
      button.classList.add('active');
      tabPanes.forEach(p => p.classList.remove('active'));
      const targetPane = container.querySelector(`#${targetTab}`);
      if (targetPane) targetPane.classList.add('active');
      moveHighlight(button);
    });
  });

  const activeButton = container.querySelector('.nav-btn.active') || navButtons[0];
  if (activeButton) moveHighlight(activeButton);

  // 点击图片放大
  container.querySelectorAll('.photo-item img').forEach(img => {
    img.addEventListener('click', () => {
      const overlay = document.createElement('div');
      overlay.style.cssText = `
        position: fixed; top:0; left:0; width:100%; height:100%;
        background: rgba(0,0,0,0.8); display:flex;
        align-items:center; justify-content:center; cursor:zoom-out;
        z-index: 9999;
      `;
      const imgLarge = document.createElement('img');
      imgLarge.src = img.src;
      imgLarge.style.cssText = 'max-width:90%; max-height:90%; border-radius:12px;';
      overlay.appendChild(imgLarge);
      overlay.addEventListener('click', () => overlay.remove());
      document.body.appendChild(overlay);
    });
  });
}

document.addEventListener("DOMContentLoaded", initPhotoTabs);
document.addEventListener("pjax:complete", initPhotoTabs);
</script>