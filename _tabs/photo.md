---
layout: page
title: "留影"
permalink: /photos/
icon: fas fa-camera
order: 6
---

# 留影

<div class="photos-container">
  <div class="photos-nav">
    <div class="nav-highlight"></div>
    {% assign years = "2025,2024,2023,2022,2021,2020,2019,2018,2017,2016,2015" | split: "," %}
    {% for year in years %}
      <button class="nav-btn {% if year == '2025' %}active{% endif %}" data-tab="year-{{ year }}">{{ year }}</button>
    {% endfor %}
  </div>

  <div class="tab-content">
    {% for year in years %}
    <div id="year-{{ year }}" class="tab-pane {% if year == '2025' %}active{% endif %}">
      <div class="photo-grid">
        {% for i in (1..21) %}
        <div class="photo-item">
          <img src="/assets/img/luwei20251007.jpg" alt="{{ year }}照片{{ i }}">
        </div>
        {% endfor %}
      </div>
    </div>
    {% endfor %}
  </div>
</div>

<style>
.photos-container {
  max-width: 1000px;
  margin: 0 auto;
}

.photos-nav {
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
  background-color: #e0e0e0;
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
  min-height: 400px;
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
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.photo-item img {
  width: 100%;
  height: auto;
  border-radius: 6px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.photo-item img:hover {
  transform: scale(1.05);
}

/* 响应式 */
@media (max-width: 768px) {
  .photos-nav { justify-content: flex-start; padding: 6px; }
  .nav-btn { font-size: 0.8rem; padding: 0.4rem 0.8rem; }
  .photos-container { padding: 0 10px; }
  .photo-grid { grid-template-columns: repeat(2, 1fr); }
}
</style>

<script>
document.addEventListener("pjax:complete", initPhotoTabs);
document.addEventListener("DOMContentLoaded", initPhotoTabs);

function initPhotoTabs() {
  const navButtons = document.querySelectorAll(".photos-nav .nav-btn");
  const tabPanes = document.querySelectorAll(".tab-pane");
  const highlight = document.querySelector(".nav-highlight");
  if (!navButtons.length || !tabPanes.length || !highlight) return;

  const moveHighlight = (btn) => {
    const rect = btn.getBoundingClientRect();
    const containerRect = btn.parentElement.getBoundingClientRect();
    highlight.style.width = rect.width + "px";
    highlight.style.left = rect.left - containerRect.left + "px";
  };

  navButtons.forEach(button => {
    button.addEventListener("click", e => {
      e.preventDefault();
      const targetTab = button.getAttribute("data-tab");

      navButtons.forEach(b => b.classList.remove("active"));
      button.classList.add("active");

      tabPanes.forEach(p => p.classList.remove("active"));
      const targetPane = document.getElementById(targetTab);
      if (targetPane) targetPane.classList.add("active");

      moveHighlight(button);
    });
  });

  const activeButton = document.querySelector(".nav-btn.active") || navButtons[0];
  if (activeButton) moveHighlight(activeButton);
}
</script>

最后更新：{{ site.time | date: "%Y年%m月%d日" }}