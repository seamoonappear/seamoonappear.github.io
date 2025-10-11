---
layout: page
title: "留影"
permalink: /photo/
icon: fas fa-camera
order: 6
---

<!-- 年份导航 -->
<div class="year-tabs" id="year-tabs">
  <!-- 导航按钮由 JS 动态生成 -->
</div>

<!-- 年份对应图片内容 -->
<div class="year-content-container" id="year-content-container">
  <!-- JS 动态生成每年的图片网格 -->
</div>

<!-- Lightbox 弹窗 -->
<div id="lightbox" class="lightbox">
  <span class="close" onclick="closeLightbox()">&times;</span>
  <img class="lightbox-content" id="lightbox-img">
</div>

<style>
body {
  background-color: #000 !important;
  color: #fff !important;
  font-family: sans-serif;
  margin: 0;
  padding: 0;
}

/* 年份导航栏 */
.year-tabs {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  padding: 1rem 0;
  background: #111;
  border-bottom: 1px solid #444;
}

.year-tab {
  padding: 8px 14px;
  background: #222;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  color: #fff;
  font-weight: 600;
}

.year-tab.active,
.year-tab:hover {
  background: #fffcc0;
  color: #000;
}

/* 年份内容网格 */
.year-content {
  display: none;
  max-width: 1200px;
  margin: 1rem auto;
  padding: 1rem;
}

.year-content.active {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.photo-item {
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  opacity: 0;
  transition: transform 0.3s ease, box-shadow 0.3s ease, opacity 0.5s ease;
}

.photo-item.loaded {
  opacity: 1;
}

.photo-item img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
}

.photo-item:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 15px rgba(255,255,255,0.2);
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
  .year-content.active {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
}

@media(max-width:576px) {
  .year-content.active {
    grid-template-columns: 1fr;
  }
}
</style>

<script>
// 年份列表
const years = [];
for(let y=2025; y>=2015; y--){
  years.push(y);
}

const yearTabs = document.getElementById('year-tabs');
const yearContentContainer = document.getElementById('year-content-container');

// 生成导航按钮和每年图片网格
years.forEach((year, index) => {
  // 导航按钮
  const tab = document.createElement('div');
  tab.className = 'year-tab';
  tab.innerText = year;
  if(index===0) tab.classList.add('active'); // 默认选中最新年份
  tab.addEventListener('click', () => {
    document.querySelectorAll('.year-tab').forEach(t=>t.classList.remove('active'));
    tab.classList.add('active');
    document.querySelectorAll('.year-content').forEach(c=>c.classList.remove('active'));
    document.getElementById('year-' + year).classList.add('active');
  });
  yearTabs.appendChild(tab);

  // 图片网格
  const contentDiv = document.createElement('div');
  contentDiv.className = 'year-content';
  if(index===0) contentDiv.classList.add('active'); // 默认显示
  contentDiv.id = 'year-' + year;

  for(let i=0;i<21;i++){ // 每年21张图片
    const photoDiv = document.createElement('div');
    photoDiv.className = 'photo-item';
    const img = document.createElement('img');
    img.src = '/assets/img/luwei20251007.jpg';
    img.alt = `照片 ${i+1}`;
    photoDiv.appendChild(img);
    contentDiv.appendChild(photoDiv);

    // 点击放大
    img.addEventListener('click', () => {
      lightbox.style.display = 'block';
      lightboxImg.src = img.src;
    });

    // 图片淡入
    if(img.complete){
      photoDiv.classList.add('loaded');
    } else {
      img.onload = () => photoDiv.classList.add('loaded');
    }
  }

  yearContentContainer.appendChild(contentDiv);
});

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

function closeLightbox(){
  lightbox.style.display = 'none';
}
</script>