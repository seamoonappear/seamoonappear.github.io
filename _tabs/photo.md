---
layout: page
title: "照片"
permalink: /photo/
icon: fas fa-camera
order: 5
---

<div id="photo-page" class="photo-container">
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
#photo-page { max-width: 960px; margin: 0 auto; }
#photo-page .photo-nav {
  display: flex; justify-content: center; overflow-x: auto; white-space: nowrap;
  position: relative; padding: 8px; background: #f8f9fa; border-radius: 12px;
}
#photo-page .nav-btn {
  margin: 0 4px; padding: 6px 12px; cursor: pointer;
  border-radius: 12px; border: 1px solid #e0e0e0;
  background: #fff; color: #666; font-size: 0.875rem; transition: all 0.3s;
}
#photo-page .nav-btn.active { font-weight: 600; color: #000; }
#photo-page .nav-highlight {
  position: absolute; bottom: 4px; height: 3px; background: #000;
  border-radius: 2px; transition: all 0.3s;
}

#photo-page .tab-pane { display: none; }
#photo-page .tab-pane.active { display: block; }

#photo-page .photo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 12px;
}
#photo-page .photo-item img {
  width: 100%; height: 180px; object-fit: cover; border-radius: 12px;
  cursor: pointer; transition: transform 0.3s, box-shadow 0.3s;
}
#photo-page .photo-item img:hover {
  transform: scale(1.05); box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}
#photo-page .photo-caption {
  text-align: center; font-size: 0.8rem; color: #555; margin-top: 6px;
}

#photo-page .photo-overlay {
  position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
  background: rgba(0,0,0,0.85); display: flex; justify-content: center; align-items: center;
  z-index: 9999; cursor: zoom-out;
}
#photo-page .photo-overlay img.photo-large {
  max-width: 90%; max-height: 80%; border-radius: 12px; object-fit: contain;
  box-shadow: 0 4px 20px rgba(255,255,255,0.2);
}
#photo-page .photo-desc {
  color: #fff; font-size: 1rem; margin-top: 12px; text-align: center;
  background: rgba(0,0,0,0.4); padding: 6px 16px; border-radius: 12px;
  backdrop-filter: blur(4px);
}

@media (max-width: 768px) {
  #photo-page .photo-grid { grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); }
  #photo-page .photo-item img { height: 140px; }
  #photo-page .nav-btn { font-size: 0.8rem; padding: 0.4rem 0.8rem; }
}
</style>

<script>
document.addEventListener("DOMContentLoaded", function() {
  const container = document.getElementById("photo-page");
  const nav = container.querySelector(".photo-nav");
  const highlight = nav.querySelector(".nav-highlight");
  const tabPanes = container.querySelectorAll(".tab-pane");
  const buttons = nav.querySelectorAll(".nav-btn");

  function activateTab(button) {
    const target = button.dataset.tab;
    buttons.forEach(b => b.classList.remove("active"));
    button.classList.add("active");
    tabPanes.forEach(p => {
      if (p.id === target) p.classList.add("active");
      else p.classList.remove("active");
    });
    // 高亮条
    const rect = button.getBoundingClientRect();
    const navRect = nav.getBoundingClientRect();
    highlight.style.width = rect.width + "px";
    highlight.style.left = (rect.left - navRect.left + nav.scrollLeft) + "px";
  }

  buttons.forEach(btn => {
    btn.addEventListener("click", () => activateTab(btn));
  });

  // 初始化默认标签
  const activeBtn = nav.querySelector(".nav-btn.active") || buttons[0];
  if (activeBtn) activateTab(activeBtn);

  // 图片放大
  container.querySelectorAll(".photo-item img").forEach(img => {
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