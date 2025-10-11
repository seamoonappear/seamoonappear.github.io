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
    <!-- 2025年照片 -->
    <div id="year-2025" class="tab-pane active">
      <div class="photo-grid">
        {% for i in (1..12) %}
        <div class="photo-item">
          <img src="/assets/img/photos/2025/photo{{ i }}.jpg" alt="2025年照片{{ i }}" loading="lazy">
        </div>
        {% endfor %}
      </div>
    </div>
    
    <!-- 2024年照片 -->
    <div id="year-2024" class="tab-pane">
      <div class="photo-grid">
        {% for i in (1..15) %}
        <div class="photo-item">
          <img src="/assets/img/photos/2024/photo{{ i }}.jpg" alt="2024年照片{{ i }}" loading="lazy">
        </div>
        {% endfor %}
      </div>
    </div>
    
    <!-- 2023年照片 -->
    <div id="year-2023" class="tab-pane">
      <div class="photo-grid">
        {% for i in (1..18) %}
        <div class="photo-item">
          <img src="/assets/img/photos/2023/photo{{ i }}.jpg" alt="2023年照片{{ i }}" loading="lazy">
        </div>
        {% endfor %}
      </div>
    </div>
    
    <!-- 2022年照片 -->
    <div id="year-2022" class="tab-pane">
      <div class="photo-grid">
        {% for i in (1..14) %}
        <div class="photo-item">
          <img src="/assets/img/photos/2022/photo{{ i }}.jpg" alt="2022年照片{{ i }}" loading="lazy">
        </div>
        {% endfor %}
      </div>
    </div>
    
    <!-- 2021年照片 -->
    <div id="year-2021" class="tab-pane">
      <div class="photo-grid">
        {% for i in (1..16) %}
        <div class="photo-item">
          <img src="/assets/img/photos/2021/photo{{ i }}.jpg" alt="2021年照片{{ i }}" loading="lazy">
        </div>
        {% endfor %}
      </div>
    </div>
    
    <!-- 2020年照片 -->
    <div id="year-2020" class="tab-pane">
      <div class="photo-grid">
        {% for i in (1..12) %}
        <div class="photo-item">
          <img src="/assets/img/photos/2020/photo{{ i }}.jpg" alt="2020年照片{{ i }}" loading="lazy">
        </div>
        {% endfor %}
      </div>
    </div>
    
    <!-- 2019年照片 -->
    <div id="year-2019" class="tab-pane">
      <div class="photo-grid">
        {% for i in (1..20) %}
        <div class="photo-item">
          <img src="/assets/img/photos/2019/photo{{ i }}.jpg" alt="2019年照片{{ i }}" loading="lazy">
        </div>
        {% endfor %}
      </div>
    </div>
    
    <!-- 2018年照片 -->
    <div id="year-2018" class="tab-pane">
      <div class="photo-grid">
        {% for i in (1..15) %}
        <div class="photo-item">
          <img src="/assets/img/photos/2018/photo{{ i }}.jpg" alt="2018年照片{{ i }}" loading="lazy">
        </div>
        {% endfor %}
      </div>
    </div>
    
    <!-- 2017年照片 -->
    <div id="year-2017" class="tab-pane">
      <div class="photo-grid">
        {% for i in (1..18) %}
        <div class="photo-item">
          <img src="/assets/img/photos/2017/photo{{ i }}.jpg" alt="2017年照片{{ i }}" loading="lazy">
        </div>
        {% endfor %}
      </div>
    </div>
    
    <!-- 2016年照片 -->
    <div id="year-2016" class="tab-pane">
      <div class="photo-grid">
        {% for i in (1..10) %}
        <div class="photo-item">
          <img src="/assets/img/photos/2016/photo{{ i }}.jpg" alt="2016年照片{{ i }}" loading="lazy">
        </div>
        {% endfor %}
      </div>
    </div>
    
    <!-- 2015年照片 -->
    <div id="year-2015" class="tab-pane">
      <div class="photo-grid">
        {% for i in (1..8) %}
        <div class="photo-item">
          <img src="/assets/img/photos/2015/photo{{ i }}.jpg" alt="2015年照片{{ i }}" loading="lazy">
        </div>
        {% endfor %}
      </div>
    </div>
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
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 15px;
}

.photo-item {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  aspect-ratio: 1 / 1;
}

.photo-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.15);
}

.photo-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  transition: transform 0.5s ease;
}

.photo-item:hover img {
  transform: scale(1.05);
}

/* 响应式 */
@media (max-width: 768px) {
  .photos-nav { 
    justify-content: flex-start; 
    padding: 6px; 
  }
  
  .nav-btn { 
    font-size: 0.8rem; 
    padding: 0.4rem 0.8rem; 
  }
  
  .photos-container { 
    padding: 0 10px; 
  }
  
  .photo-grid { 
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 10px;
  }
}

@media (max-width: 480px) {
  .photo-grid { 
    grid-template-columns: repeat(2, 1fr);
  }
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