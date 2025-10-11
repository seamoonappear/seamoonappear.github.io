---
layout: page
title: "留影"
permalink: /photo/
icon: fas fa-camera
order: 6
---



<div class="photos-container">
  <div class="photos-grid">
    <!-- 第一行照片 -->
    <div class="photo-item">
      <img src="/assets/img/photos/photo1.jpg" alt="瞬间1" loading="lazy">
      <div class="photo-caption">晨光微熹 · 2023</div>
    </div>
    
    <div class="photo-item">
      <img src="/assets/img/photos/photo2.jpg" alt="瞬间2" loading="lazy">
      <div class="photo-caption">山色空蒙 · 2023</div>
    </div>
    
    <div class="photo-item">
      <img src="/assets/img/photos/photo3.jpg" alt="瞬间3" loading="lazy">
      <div class="photo-caption">海天一色 · 2022</div>
    </div>

    <!-- 第二行照片 -->
    <div class="photo-item">
      <img src="/assets/img/photos/photo4.jpg" alt="瞬间4" loading="lazy">
      <div class="photo-caption">秋意浓 · 2022</div>
    </div>
    
    <div class="photo-item">
      <img src="/assets/img/photos/photo5.jpg" alt="瞬间5" loading="lazy">
      <div class="photo-caption">城市夜景 · 2021</div>
    </div>
    
    <div class="photo-item">
      <img src="/assets/img/photos/photo6.jpg" alt="瞬间6" loading="lazy">
      <div class="photo-caption">旅途记忆 · 2021</div>
    </div>
  </div>
</div>

<style>
.photos-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.photos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.photo-item {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background: var(--card-bg);
}

.photo-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
}

.photo-item img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  display: block;
}

.photo-caption {
  padding: 0.8rem;
  text-align: center;
  background: var(--card-bg);
  font-size: 0.9rem;
  color: var(--text-muted);
  border-top: 1px solid var(--border-color);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .photos-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
  }
  
  .photos-container {
    padding: 1rem 0.5rem;
  }
}

@media (max-width: 576px) {
  .photos-grid {
    grid-template-columns: 1fr;
  }
}
</style>