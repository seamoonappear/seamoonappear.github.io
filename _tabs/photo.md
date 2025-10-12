---
layout: page
title: "照片"
permalink: /photo/
icon: fas fa-camera
order: 5
---

<div class="photo-container">
  <!-- 导航标签 -->
  <div class="photo-nav">
    <div class="nav-highlight"></div>
    {% assign first = true %}
    {% for tab_id, tab in site.data.photo %}
      <button class="nav-btn {% if first %}active{% endif %}" data-tab="{{ tab_id }}">
        {{ tab.name }}
      </button>
      {% assign first = false %}
    {% endfor %}
  </div>

  <!-- 图片内容 -->
  <div class="tab-content">
    {% assign first = true %}
    {% for tab_id, tab in site.data.photo %}
      <div id="{{ tab_id }}" class="tab-pane {% if first %}active{% endif %}">
        <div class="photo-grid">
          {% for img in tab.images %}
            <img src="{{ img.path | relative_url }}" alt="{{ img.desc }}" data-desc="{{ img.desc }}">
          {% endfor %}
        </div>
      </div>
      {% assign first = false %}
    {% endfor %}
  </div>
</div>

<style>
/* --- 样式同之前版本 --- */
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