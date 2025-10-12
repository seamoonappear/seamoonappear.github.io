---
layout: page
title: "留影"
permalink: /photo/
icon: fas fa-camera
order: 5
---

<div class="photo-container">

  <!-- 📌 悬浮标题 -->
  <div class="photo-header">
    <h1>📷 留影集</h1>
    <p>Captured Moments</p>
  </div>

  <!-- 顶部类型导航 -->
  <div class="photo-nav">
    <button class="nav-btn active" data-tab="travel">旅游</button>
    <button class="nav-btn" data-tab="life">生活</button>
    <button class="nav-btn" data-tab="cat">猫</button>
    <button class="nav-btn" data-tab="random">随拍</button>
  </div>

  <!-- 🗺️ 旅游 -->
  <div id="travel" class="photo-grid">
    <img src="{{ '/assets/img/luwei20251007.jpg' | relative_url }}" alt="Travel 1">
    <img src="{{ '/assets/img/luwei20251007.jpg' | relative_url }}" alt="Travel 2">
    <img src="{{ '/assets/img/luwei20251007.jpg' | relative_url }}" alt="Travel 3">
    <img src="{{ '/assets/img/luwei20251007.jpg' | relative_url }}" alt="Travel 4">
    <img src="{{ '/assets/img/luwei20251007.jpg' | relative_url }}" alt="Travel 5">
    <img src="{{ '/assets/img/luwei20251007.jpg' | relative_url }}" alt="Travel 6">
  </div>

  <!-- 🏙️ 生活 -->
  <div id="life" class="photo-grid" style="display:none;">
    <img src="{{ '/assets/img/luwei20251007.jpg' | relative_url }}" alt="Life 1">
    <img src="{{ '/assets/img/luwei20251007.jpg' | relative_url }}" alt="Life 2">
    <img src="{{ '/assets/img/luwei20251007.jpg' | relative_url }}" alt="Life 3">
    <img src="{{ '/assets/img/luwei20251007.jpg' | relative_url }}" alt="Life 4">
    <img src="{{ '/assets/img/luwei20251007.jpg' | relative_url }}" alt="Life 5">
    <img src="{{ '/assets/img/luwei20251007.jpg' | relative_url }}" alt="Life 6">
  </div>

  <!-- 🐱 猫 -->
  <div id="cat" class="photo-grid" style="display:none;">
    <img src="{{ '/assets/img/luwei20251007.jpg' | relative_url }}" alt="Cat 1">
    <img src="{{ '/assets/img/luwei20251007.jpg' | relative_url }}" alt="Cat 2">
    <img src="{{ '/assets/img/luwei20251007.jpg' | relative_url }}" alt="Cat 3">
    <img src="{{ '/assets/img/luwei20251007.jpg' | relative_url }}" alt="Cat 4">
    <img src="{{ '/assets/img/luwei20251007.jpg' | relative_url }}" alt="Cat 5">
    <img src="{{ '/assets/img/luwei20251007.jpg' | relative_url }}" alt="Cat 6">
  </div>

  <!-- 📸 随拍 -->
  <div id="random" class="photo-grid" style="display:none;">
    <img src="{{ '/assets/img/luwei20251007.jpg' | relative_url }}" alt="Random 1">
    <img src="{{ '/assets/img/luwei20251007.jpg' | relative_url }}" alt="Random 2">
    <img src="{{ '/assets/img/luwei20251007.jpg' | relative_url }}" alt="Random 3">
    <img src="{{ '/assets/img/luwei20251007.jpg' | relative_url }}" alt="Random 4">
    <img src="{{ '/assets/img/luwei20251007.jpg' | relative_url }}" alt="Random 5">
    <img src="{{ '/assets/img/luwei20251007.jpg' | relative_url }}" alt="Random 6">
  </div>

</div>

<!-- 点击放大 -->
<div id="lightbox" class="lightbox">
  <span class="close-lightbox">&times;</span>
  <img class="lightbox-content" id="lightbox-img">
</div>

<style>
/* 黑色背景与白色文字 */
body, .page-content { background-color:#000; color:#fff; }
.photo-container { padding:20px; max-width:1200px; margin:0 auto; text-align:center; }
.photo-header { position:sticky; top:0; background-color:#000; padding:15px 0; border-bottom:1px solid rgba(255,255,255,0.1); z-index:999; animation:fadeIn 1s ease; }
.photo-header h1{ font-size:1.8rem; font-weight:600; margin-bottom:5px; }
.photo-header p{ font-size:1rem; color:#aaa; margin:0; }
.photo-nav{ display:flex; justify-content:center; gap:16px; margin-bottom:30px; flex-wrap:wrap; }
.photo-nav button{ background:none; border:2px solid #fff; color:#fff; padding:8px 18px; border-radius:25px; font-size:1rem; cursor:pointer; transition:all 0.3s; }
.photo-nav button.active, .photo-nav button:hover{ background-color:#fff; color:#000; }

/* 📸 响应式图片网格（桌面端每行三列，手机端也三列） */
.photo-grid{ display:grid; grid-template-columns:repeat(3,1fr); gap:15px; }
.photo-grid img{ width:100%; height:auto; border-radius:12px; cursor:pointer; transition: transform 0.3s ease, box-shadow 0.3s ease; border:1px solid rgba(255,255,255,0.15); box-shadow:0 4px 12px rgba(255,255,255,0.05); }
.photo-grid img:hover{ transform:scale(1.05); box-shadow:0 6px 18px rgba(255,255,255,0.15); }

/* 点击放大 */
.lightbox{ display:none; position:fixed; z-index:1000; padding-top:60px; left:0; top:0; width:100%; height:100%; overflow:auto; background-color:rgba(0,0,0,0.95);}
.lightbox-content{ margin:auto; display:block; max-width:90%; max-height:90%; }
.close-lightbox{ position:absolute; top:20px; right:35px; color:#fff; font-size:35px; font-weight:bold; cursor:pointer; }

/* 移动端优化 */
@media(max-width:1024px){ .photo-grid{ grid-template-columns:repeat(3,1fr); } }
@media(max-width:768px){ .photo-grid{ grid-template-columns:repeat(3,1fr); } }
@media(max-width:480px){ .photo-grid{ grid-template-columns:repeat(3,1fr); } }

@keyframes fadeIn{ from{opacity:0; transform:translateY(-10px);} to{opacity:1; transform:translateY(0);} }
</style>

<script>
// 切换导航
const navBtns = document.querySelectorAll('.nav-btn');
const grids = document.querySelectorAll('.photo-grid');
navBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    navBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const tab = btn.dataset.tab;
    grids.forEach(g => g.style.display = g.id===tab?'grid':'none');
  });
});

// 图片点击放大
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const close = document.querySelector(".close-lightbox");
document.querySelectorAll(".photo-grid img").forEach(img=>{
  img.onclick=function(){ lightbox.style.display="block"; lightboxImg.src=this.src; }
});
close.onclick=()=>lightbox.style.display="none";
lightbox.onclick=e=>{ if(e.target===lightbox) lightbox.style.display="none"; };
</script>