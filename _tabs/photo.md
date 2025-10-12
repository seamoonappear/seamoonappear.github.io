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
.tab-pane { display: none; }
.tab-pane.active { display: block; }
.photo-nav { display: flex; justify-content: center; overflow-x: auto; white-space: nowrap; position: relative; padding: 8px; background: #f8f9fa; border-radius: 8px; }
.nav-btn { margin: 0 4px; padding: 6px 12px; cursor: pointer; border-radius: 6px; border: 1px solid #ccc; background: #fff; transition: all 0.3s ease; }
.nav-btn.active { font-weight: bold; }
.nav-highlight { position: absolute; bottom: 4px; height: 3px; background: #000; border-radius: 2px; transition: all 0.3s ease; }
.photo-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 12px; }
.photo-item img { width: 100%; border-radius: 12px; cursor: pointer; transition: transform 0.3s; }
.photo-item img:hover { transform: scale(1.05); }
.photo-caption { text-align: center; font-size: 0.8rem; margin-top: 6px; }
</style>

<script>
document.addEventListener("DOMContentLoaded", function() {
  const navButtons = document.querySelectorAll(".nav-btn");
  const panes = document.querySelectorAll(".tab-pane");
  const highlight = document.querySelector(".nav-highlight");

  function updateHighlight(button) {
    const rect = button.getBoundingClientRect();
    const navRect = button.parentElement.getBoundingClientRect();
    highlight.style.width = rect.width + "px";
    highlight.style.left = (rect.left - navRect.left + button.parentElement.scrollLeft) + "px";
  }

  navButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      // 切换激活按钮
      navButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      // 切换显示面板
      const target = btn.dataset.tab;
      panes.forEach(p => p.classList.toggle("active", p.id === target));

      // 更新高亮条
      updateHighlight(btn);
    });
  });

  // 初始化高亮条
  const activeBtn = document.querySelector(".nav-btn.active");
  if (activeBtn) updateHighlight(activeBtn);
});
</script>