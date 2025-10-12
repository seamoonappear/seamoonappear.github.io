---
layout: page
title: "照片"
permalink: /photo/
icon: fas fa-camera
order: 5
---

<div class="photo-container">
  <!-- 标签导航 -->
  <div class="photo-nav">
    <div class="nav-highlight"></div>
    {% assign first = true %}
    {% for tab in site.data.photo %}
      {% assign tab_id = tab[0] %}
      {% assign tab_data = tab[1] %}
      <button class="nav-btn {% if first %}active{% endif %}" data-tab="{{ tab_id }}">
        {{ tab_data.name }}
      </button>
      {% assign first = false %}
    {% endfor %}
  </div>

  <!-- 图片网格 -->
  <div class="tab-content">
    {% assign first = true %}
    {% for tab in site.data.photo %}
      {% assign tab_id = tab[0] %}
      {% assign tab_data = tab[1] %}
      <div id="{{ tab_id }}" class="tab-pane {% if first %}active{% endif %}">
        <div class="photo-grid">
          {% for img in tab_data.images %}
            <div class="photo-item">
              <img src="{{ img.path | relative_url }}" alt="{{ img.desc }}" data-desc="{{ img.desc }}">
              <div class="photo-caption">{{ img.desc }}</div>
            </div>
          {% endfor %}
        </div>
      </div>
      {% assign first = false %}
    {% endfor %}
  </div>
</div>

<style>
.photo-container { max-width: 960px; margin: 0 auto; }
.photo-nav {
  display: flex; justify-content: center; overflow-x: auto; white-space: nowrap;
  position: relative; padding: 8px; background: var(--color-gray-100); border-radius: var(--radius-lg);
}
.nav-btn {
  margin: 0 4px; padding: 6px 12px; cursor: pointer;
  border-radius: var(--radius-md); border: 1px solid var(--color-gray-300);
  background: var(--color-white); color: var(--color-gray-700);
  font-size: 0.875rem; transition: all 0.3s;
}
.nav-btn.active { font-weight: 600; color: var(--color-gray-900); }
.nav-highlight {
  position: absolute; bottom: 4px; height: 3px;
  background: var(--color-gray-900); border-radius: 2px; transition: all 0.3s;
}

.tab-pane { display: none; }
.tab-pane.active { display: block; }

.photo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 12px;
}
.photo-item { display: flex; flex-direction: column; }
.photo-item img {
  width: 100%; height: 180px; object-fit: cover; border-radius: 12px;
  cursor: pointer; transition: transform 0.3s, box-shadow 0.3s;
}
.photo-item img:hover { transform: scale(1.05); box-shadow: 0 5px 15px rgba(0,0,0,0.2); }
.photo-caption { text-align: center; font-size: 0.8rem; color: var(--color-gray-600); margin-top: 6px; }

.photo-overlay {
  position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
  background: rgba(0,0,0,0.85); display: flex; justify-content: center; align-items: center;
  z-index: 9999; cursor: zoom-out;
}
.photo-overlay img.photo-large {
  max-width: 90%; max-height: 80%; border-radius: 12px; object-fit: contain;
  box-shadow: 0 4px 20px rgba(255,255,255,0.2);
}
.photo-desc {
  color: #fff; font-size: 1rem; margin-top: 12px; text-align: center;
  background: rgba(0,0,0,0.4); padding: 6px 16px; border-radius: var(--radius-md);
  backdrop-filter: blur(4px);
}

@media (max-width: 768px) {
  .photo-grid { grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); }
  .photo-item img { height: 140px; }
  .nav-btn { font-size: 0.8rem; padding: 0.4rem 0.8rem; }
}
</style>

<script>
document.addEventListener("DOMContentLoaded", function() {
  const nav = document.querySelector(".photo-nav");
  const highlight = nav.querySelector(".nav-highlight");
  const tabPanes = document.querySelectorAll(".tab-pane");

  function updateTabs(button) {
    const targetTab = button.dataset.tab;
    // 切换按钮 active
    nav.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
    button.classList.add("active");
    // 切换 tab-pane
    tabPanes.forEach(p => p.id === targetTab ? p.classList.add("active") : p.classList.remove("active"));
    // 更新高亮条
    const rect = button.getBoundingClientRect();
    const navRect = nav.getBoundingClientRect();
    highlight.style.width = rect.width + "px";
    highlight.style.left = (rect.left - navRect.left + nav.scrollLeft) + "px";
  }

  // 给按钮绑定事件
  nav.querySelectorAll(".nav-btn").forEach(btn => {
    btn.addEventListener("click", () => updateTabs(btn));
  });

  // 初始化高亮条
  const activeBtn = nav.querySelector(".nav-btn.active") || nav.querySelector(".nav-btn");
  if (activeBtn) updateTabs(activeBtn);

  // 图片放大
  document.querySelectorAll(".photo-item img").forEach(img => {
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
});
</script>