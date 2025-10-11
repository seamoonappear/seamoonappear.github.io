---
layout: page
title: "留影"
permalink: /photo/
icon: fas fa-camera
order: 6
---

<!-- 顶部浮动卡片 -->
<div class="photo-header-card">
  <div class="avatar-container">
    <img src="/assets/img/avatar.jpg" alt="头像" class="avatar">
    <div class="camera-icon">
      <i class="fas fa-camera"></i>
    </div>
  </div>
  <div class="photo-info">
    <div class="photo-count">共 <span id="photo-number">6</span> 张照片</div>
    <div class="sort-buttons">
      <button onclick="sortPhotos('asc')">最早</button>
      <button onclick="sortPhotos('desc')">最新</button>
    </div>
  </div>
</div>

<!-- 图片展示区 -->
<div class="photos-container">
  <div class="photos-grid" id="photos-grid">
    <div class="photo-item" data-year="2023">
      <img src="/assets/img/photos/photo1.jpg" alt="瞬间1" loading="lazy">
    </div>
    <div class="photo-item" data-year="2023">
      <img src="/assets/img/photos/photo2.jpg" alt="瞬间2" loading="lazy">
    </div>
    <div class="photo-item" data-year="2022">
      <img src="/assets/img/photos/photo3.jpg" alt="瞬间3" loading="lazy">
    </div>
    <div class="photo-item" data-year="2022">
      <img src="/assets/img/photos/photo4.jpg" alt="瞬间4" loading="lazy">
    </div>
    <div class="photo-item" data-year="2021">
      <img src="/assets/img/photos/photo5.jpg" alt="瞬间5" loading="lazy">
    </div>
    <div class="photo-item" data-year="2021">
      <img src="/assets/img/photos/photo6.jpg" alt="瞬间6" loading="lazy">
    </div>
  </div>
</div>

<!-- 图片放大弹窗 -->
<div id="lightbox" class="lightbox">
  <span class="close" onclick="closeLightbox()">&times;</span>
  <img class="lightbox-content" id="lightbox-img">
</div>

<style>
/* 顶部浮动卡片 */
.photo-header-card {
  display: flex;
  align-items: center;
  gap: 25px;
  max-width: 900px;
  margin: 0 auto 2rem auto;
  padding: 1rem 2rem;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
  flex-wrap: wrap;
}

.avatar-container {
  position: relative;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #eee;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

.camera-icon {
  position: absolute;
  bottom: -5px;
  right: -5px;
  background: #fffa;
  border-radius: 50%;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
  transition: transform 0.3s ease;
}

.camera-icon i {
  font-size: 16px;
  color: #333;
}

.avatar-container:hover .camera-icon {
  transform: scale(1.1);
}

.photo-info {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.photo-info .photo-count {
  font-weight: 600;
  font-size: 1rem;
}

.sort-buttons button {
  margin-right: 10px;
  padding: 6px 14px;
  border: 1px solid #ccc;
  background: #f9f9f9;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.2s ease;
}

.sort-buttons button:hover {
  background: #eee;
  transform: translateY(-2px);
}

/* 图片网格 */
.photos-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}

.photos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.photo-item {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease, opacity 0.5s ease;
  cursor: pointer;
  opacity: 0;
}

.photo-item.loaded {
  opacity: 1;
}

.photo-item:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}

.photo-item img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
  border-radius: 12px;
}

/* Lightbox 弹窗 */
.lightbox {
  display: none;
  position: fixed;
  z-index: 9999;
  padding-top: 60px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.95);
  animation: fadeIn 0.3s ease;
}

.lightbox-content {
  margin: auto;
  display: block;
  max-width: 90%;
  max-height: 85%;
  border-radius: 8px;
}

.close {
  position: absolute;
  top: 20px;
  right: 35px;
  color: #fff;
  font-size: 40px;
  font-weight: bold;
  cursor: pointer;
}

/* 响应式 */
@media(max-width:768px) {
  .photos-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
}

@media(max-width:576px) {
  .photos-grid {
    grid-template-columns: 1fr;
  }

  .photo-header-card {
    justify-content: center;
  }
}

/* 淡入动画 */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>

<script>
// 图片淡入加载
document.querySelectorAll('.photo-item').forEach(item => {
  const img = item.querySelector('img');
  if (img.complete) {
    item.classList.add('loaded');
  } else {
    img.onload = () => {
      item.classList.add('loaded');
    };
  }
});

// 排序功能，带动画
function sortPhotos(order) {
  const grid = document.getElementById('photos-grid');
  const items = Array.from(grid.children);
  items.forEach(i => i.classList.remove('loaded')); // 重置淡入
  items.sort((a, b) => {
    const yearA = parseInt(a.getAttribute('data-year'));
    const yearB = parseInt(b.getAttribute('data-year'));
    return order === 'asc' ? yearA - yearB : yearB - yearA;
  });
  items.forEach(item => {
    grid.appendChild(item);
    setTimeout(() => item.classList.add('loaded'), 50); // 动画淡入
  });
}

// Lightbox 功能
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

document.querySelectorAll('.photo-item img').forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'block';
    lightboxImg.src = img.src;
  });
});

function closeLightbox() {
  lightbox.style.display = 'none';
}
</script>