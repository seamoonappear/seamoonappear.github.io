---
layout: page
title: "留影"
permalink: /photo/
icon: fas fa-camera
order: 5
---

<div class="media-container">

  <!-- 顶部类型导航 -->
  <div class="media-nav">
    <div class="nav-highlight"></div>
    <button class="nav-btn active" data-tab="travel">旅游</button>
    <button class="nav-btn" data-tab="life">生活</button>
    <button class="nav-btn" data-tab="cat">猫</button>
    <button class="nav-btn" data-tab="random">随拍</button>
  </div>

  <!-- 图片列表区域 -->
  <div class="media-content">

    <!-- 旅游 -->
    <div id="travel" class="media-tab">
      <img src="{{ '/assets/img/luwei20251007.jpg' | relative_url }}" alt="Travel 1">
      <img src="{{ '/assets/img/luwei20251007.jpg' | relative_url }}" alt="Travel 2">
      <img src="{{ '/assets/img/luwei20251007.jpg' | relative_url }}" alt="Travel 3">
      <img src="{{ '/assets/img/luwei20251007.jpg' | relative_url }}" alt="Travel 4">
      <img src="{{ '/assets/img/luwei20251007.jpg' | relative_url }}" alt="Travel 5">
      <img src="{{ '/assets/img/luwei20251007.jpg' | relative_url }}" alt="Travel 6">
    </div>

    <!-- 生活 -->
    <div id="life" class="media-tab" style="display:none;">
      <img src="{{ '/assets/img/luwei20251007.jpg' | relative_url }}" alt="Life 1">
      <img src="{{ '/assets/img/luwei20251007.jpg' | relative_url }}" alt="Life 2">
      <img src="{{ '/assets/img/luwei20251007.jpg' | relative_url }}" alt="Life 3">
      <img src="{{ '/assets/img/luwei20251007.jpg' | relative_url }}" alt="Life 4">
      <img src="{{ '/assets/img/luwei20251007.jpg' | relative_url }}" alt="Life 5">
      <img src="{{ '/assets/img/luwei20251007.jpg' | relative_url }}" alt="Life 6">
    </div>

    <!-- 猫 -->
    <div id="cat" class="media-tab" style="display:none;">
      <img src="{{ '/assets/img/luwei20251007.jpg' | relative_url }}" alt="Cat 1">
      <img src="{{ '/assets/img/luwei20251007.jpg' | relative_url }}" alt="Cat 2">
      <img src="{{ '/assets/img/luwei20251007.jpg' | relative_url }}" alt="Cat 3">
      <img src="{{ '/assets/img/luwei20251007.jpg' | relative_url }}" alt="Cat 4">
      <img src="{{ '/assets/img/luwei20251007.jpg' | relative_url }}" alt="Cat 5">
      <img src="{{ '/assets/img/luwei20251007.jpg' | relative_url }}" alt="Cat 6">
    </div>

    <!-- 随拍 -->
    <div id="random" class="media-tab" style="display:none;">
      <img src="{{ '/assets/img/luwei20251007.jpg' | relative_url }}" alt="Random 1">
      <img src="{{ '/assets/img/luwei20251007.jpg' | relative_url }}" alt="Random 2">
      <img src="{{ '/assets/img/luwei20251007.jpg' | relative_url }}" alt="Random 3">
      <img src="{{ '/assets/img/luwei20251007.jpg' | relative_url }}" alt="Random 4">
      <img src="{{ '/assets/img/luwei20251007.jpg' | relative_url }}" alt="Random 5">
      <img src="{{ '/assets/img/luwei20251007.jpg' | relative_url }}" alt="Random 6">
    </div>

  </div>

</div>

<!-- 点击放大 -->
<div id="lightbox" class="lightbox">
  <span class="close-lightbox">&times;</span>
  <img class="lightbox-content" id="lightbox-img">
</div>

<style>
/* 黑色背景、白色文字 */
body, .page-content { background-color:#000; color:#fff; }
.media-container { max-width:1200px; margin:0 auto; padding:20px; }
.media-nav { display:flex; justify-content:center; gap:20px; flex-wrap:wrap; margin-bottom:20px; position:relative; }
.media-nav button { background:none; border:2px solid #fff; color:#fff; padding:8px 20px; border-radius:25px; cursor:pointer; transition:0.3s; font-size:1rem; }
.media-nav button.active, .media-nav button:hover { background:#fff; color:#000; }

.media-content { display:grid; grid-template-columns:repeat(3,1fr); gap:15px; }
.media-tab img { width:100%; height:auto; border-radius:12px; cursor:pointer; transition: transform 0.3s, box-shadow 0.3s; border:1px solid rgba(255,255,255,0.15); }
.media-tab img:hover { transform:scale(1.05); box-shadow:0 6px 18px rgba(255,255,255,0.15); }

/* 点击放大 */
.lightbox{ display:none; position:fixed; z-index:1000; padding-top:60px; left:0; top:0; width:100%; height:100%; overflow:auto; background-color:rgba(0,0,0,0.95);}
.lightbox-content{ margin:auto; display:block; max-width:90%; max-height:90%; }
.close-lightbox{ position:absolute; top:20px; right:35px; color:#fff; font-size:35px; font-weight:bold; cursor:pointer; }

/* 响应式布局 */
@media(max-width:1024px){ .media-content { grid-template-columns:repeat(3,1fr); } }
@media(max-width:768px){ .media-content { grid-template-columns:repeat(2,1fr); } }
@media(max-width:480px){ .media-content { grid-template-columns:1fr; } }
</style>

<script>
// 切换分类导航
const navBtns = document.querySelectorAll('.nav-btn');
const mediaTabs = document.querySelectorAll('.media-tab');
navBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    navBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const tab = btn.dataset.tab;
    mediaTabs.forEach(t => t.style.display = t.id===tab?'block':'none');
  });
});

// 图片点击放大
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const close = document.querySelector(".close-lightbox");
document.querySelectorAll(".media-tab img").forEach(img=>{
  img.onclick=function(){ lightbox.style.display="block"; lightboxImg.src=this.src; }
});
close.onclick=()=>lightbox.style.display="none";
lightbox.onclick=e=>{ if(e.target===lightbox) lightbox.style.display="none"; };
</script>