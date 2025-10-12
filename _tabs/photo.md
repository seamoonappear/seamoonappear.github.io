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
    <button class="nav-btn active" data-tab="scenery">风景</button>
    <button class="nav-btn" data-tab="people">人物</button>
    <button class="nav-btn" data-tab="life">生活</button>
    <button class="nav-btn" data-tab="cat">猫</button>
    <button class="nav-btn" data-tab="random">随手拍</button>
  </div>

  <div class="tab-content">
    <!-- 风景 -->
    <div id="scenery" class="tab-pane active">
      <div class="photo-grid">
        <div class="photo-item">
          <img src="{{ '/assets/photos/travel1.jpg' | relative_url }}" alt="风景1">
          <div class="photo-desc">晨雾中的群山</div>
        </div>
        <div class="photo-item">
          <img src="{{ '/assets/photos/travel2.jpg' | relative_url }}" alt="风景2">
          <div class="photo-desc">湖边的宁静</div>
        </div>
        <div class="photo-item">
          <img src="{{ '/assets/photos/travel3.jpg' | relative_url }}" alt="风景3">
          <div class="photo-desc">海边的落日</div>
        </div>
      </div>
    </div>

    <!-- 人物 -->
    <div id="people" class="tab-pane">
      <div class="photo-grid">
        <div class="photo-item">
          <img src="{{ '/assets/photos/person1.jpg' | relative_url }}" alt="人物1">
          <div class="photo-desc">街角的笑容</div>
        </div>
        <div class="photo-item">
          <img src="{{ '/assets/photos/person2.jpg' | relative_url }}" alt="人物2">
          <div class="photo-desc">咖啡馆一隅</div>
        </div>
        <div class="photo-item">
          <img src="{{ '/assets/photos/person3.jpg' | relative_url }}" alt="人物3">
          <div class="photo-desc">窗边的光影</div>
        </div>
      </div>
    </div>

    <!-- 生活 -->
    <div id="life" class="tab-pane">
      <div class="photo-grid">
        <div class="photo-item">
          <img src="{{ '/assets/photos/live1.jpg' | relative_url }}" alt="生活1">
          <div class="photo-desc">清晨的早餐</div>
        </div>
        <div class="photo-item">
          <img src="{{ '/assets/photos/live2.jpg' | relative_url }}" alt="生活2">
          <div class="photo-desc">街头的日常</div>
        </div>
      </div>
    </div>

    <!-- 猫 -->
    <div id="cat" class="tab-pane">
      <div class="photo-grid">
        <div class="photo-item">
          <img src="{{ '/assets/photos/cat1.jpg' | relative_url }}" alt="猫1">
          <div class="photo-desc">慵懒的午后</div>
        </div>
        <div class="photo-item">
          <img src="{{ '/assets/photos/cat2.jpg' | relative_url }}" alt="猫2">
          <div class="photo-desc">专注的眼神</div>
        </div>
      </div>
    </div>

    <!-- 随手拍 -->
    <div id="random" class="tab-pane">
      <div class="photo-grid">
        <div class="photo-item">
          <img src="{{ '/assets/photos/suishou1.jpg' | relative_url }}" alt="随手拍1">
          <div class="photo-desc">路边的光影</div>
        </div>
        <div class="photo-item">
          <img src="{{ '/assets/photos/suishou2.jpg' | relative_url }}" alt="随手拍2">
          <div class="photo-desc">旧墙上的涂鸦</div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
.photo-container { max-width: 900px; margin: 0 auto; }
.photo-nav { display:flex; justify-content:center; margin:2rem 0; overflow-x:auto; white-space:nowrap; background:#f8f9fa; border-radius:8px; padding:8px; position:relative; }
.nav-btn { padding:0.6rem 1.2rem; margin:0 0.25rem; background:white; border:1px solid #e0e0e0; cursor:pointer; border-radius:6px; color:#666; font-size:0.85rem; transition:all 0.3s; }
.nav-btn.active { font-weight:600; color:#000; }
.nav-highlight { position:absolute; bottom:5px; height:3px; background:#000; transition:0.3s; border-radius:2px; }
.tab-pane { display:none; }
.tab-pane.active { display:block; }
.photo-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(250px,1fr)); gap:12px; }
.photo-item { display:flex; flex-direction:column; }
.photo-item img { width:100%; height:200px; object-fit:cover; border-radius:12px; cursor:pointer; transition:transform 0.3s; }
.photo-item img:hover { transform:scale(1.05); }
.photo-desc { margin-top:6px; font-size:14px; color:#666; text-align:center; line-height:1.2em; height:1.2em; overflow:hidden; }
@media (max-width:768px){ .photo-grid img{height:140px;} .nav-btn{padding:0.4rem 0.8rem; font-size:0.8rem;} }
</style>

<script>
document.addEventListener("DOMContentLoaded", function() {
  const navButtons = document.querySelectorAll(".nav-btn");
  const panes = document.querySelectorAll(".tab-pane");
  const highlight = document.querySelector(".nav-highlight");

  function moveHighlight(btn){
    const rect = btn.getBoundingClientRect();
    const containerRect = btn.parentElement.getBoundingClientRect();
    highlight.style.width = rect.width + "px";
    highlight.style.left = (rect.left - containerRect.left) + "px";
  }

  navButtons.forEach(btn=>{
    btn.addEventListener("click", ()=>{
      navButtons.forEach(b=>b.classList.remove("active"));
      btn.classList.add("active");
      panes.forEach(p=>p.classList.remove("active"));
      const target = document.getElementById(btn.dataset.tab);
      if(target) target.classList.add("active");
      moveHighlight(btn);
    });
  });

  const activeBtn = document.querySelector(".nav-btn.active");
  if(activeBtn) moveHighlight(activeBtn);

  // 图片点击放大（不显示文字）
  document.querySelectorAll(".photo-item img").forEach(img=>{
    img.addEventListener("click", ()=>{
      const overlay = document.createElement("div");
      overlay.style.position="fixed";
      overlay.style.top="0"; overlay.style.left="0"; overlay.style.width="100%"; overlay.style.height="100%";
      overlay.style.background="rgba(0,0,0,0.85)"; overlay.style.display="flex"; overlay.style.justifyContent="center"; overlay.style.alignItems="center";
      overlay.style.zIndex="9999"; overlay.style.cursor="zoom-out";

      const large = document.createElement("img");
      large.src = img.src;
      large.style.maxWidth="90%";
      large.style.maxHeight="90%";
      large.style.borderRadius="12px";
      overlay.appendChild(large);

      overlay.addEventListener("click", ()=>overlay.remove());
      document.body.appendChild(overlay);
    });
  });
});
</script>