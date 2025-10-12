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
          <div class="photo-caption">风景描述1</div>
        </div>
        <div class="photo-item">
          <img src="{{ '/assets/photos/travel2.jpg' | relative_url }}" alt="风景2">
          <div class="photo-caption">风景描述2</div>
        </div>
        <div class="photo-item">
          <img src="{{ '/assets/photos/travel3.jpg' | relative_url }}" alt="风景3">
          <div class="photo-caption">风景描述3</div>
        </div>
        <div class="photo-item">
          <img src="{{ '/assets/photos/travel4.jpg' | relative_url }}" alt="风景4">
          <div class="photo-caption">风景描述4</div>
        </div>
        <div class="photo-item">
          <img src="{{ '/assets/photos/travel5.jpg' | relative_url }}" alt="风景5">
          <div class="photo-caption">风景描述5</div>
        </div>
        <div class="photo-item">
          <img src="{{ '/assets/photos/travel1.jpg' | relative_url }}" alt="风景6">
          <div class="photo-caption">风景描述6</div>
        </div>
      </div>
    </div>

    <!-- 人物 -->
    <div id="people" class="tab-pane">
      <div class="photo-grid">
        <div class="photo-item">
          <img src="{{ '/assets/photos/person1.jpg' | relative_url }}" alt="人物1">
          <div class="photo-caption">人物描述1</div>
        </div>
        <div class="photo-item">
          <img src="{{ '/assets/photos/person2.jpg' | relative_url }}" alt="人物2">
          <div class="photo-caption">人物描述2</div>
        </div>
        <div class="photo-item">
          <img src="{{ '/assets/photos/person3.jpg' | relative_url }}" alt="人物3">
          <div class="photo-caption">人物描述3</div>
        </div>
        <div class="photo-item">
          <img src="{{ '/assets/photos/person4.jpg' | relative_url }}" alt="人物4">
          <div class="photo-caption">人物描述4</div>
        </div>
        <div class="photo-item">
          <img src="{{ '/assets/photos/person5.jpg' | relative_url }}" alt="人物5">
          <div class="photo-caption">人物描述5</div>
        </div>
        <div class="photo-item">
          <img src="{{ '/assets/photos/person6.jpg' | relative_url }}" alt="人物6">
          <div class="photo-caption">人物描述6</div>
        </div>
      </div>
    </div>

    <!-- 生活 -->
    <div id="life" class="tab-pane">
      <div class="photo-grid">
        <div class="photo-item">
          <img src="{{ '/assets/photos/live1.jpg' | relative_url }}" alt="生活1">
          <div class="photo-caption">生活描述1</div>
        </div>
        <div class="photo-item">
          <img src="{{ '/assets/photos/live2.jpg' | relative_url }}" alt="生活2">
          <div class="photo-caption">生活描述2</div>
        </div>
        <div class="photo-item">
          <img src="{{ '/assets/photos/live3.jpg' | relative_url }}" alt="生活3">
          <div class="photo-caption">生活描述3</div>
        </div>
        <div class="photo-item">
          <img src="{{ '/assets/photos/live4.jpg' | relative_url }}" alt="生活4">
          <div class="photo-caption">生活描述4</div>
        </div>
        <div class="photo-item">
          <img src="{{ '/assets/photos/live1.jpg' | relative_url }}" alt="生活5">
          <div class="photo-caption">生活描述5</div>
        </div>
        <div class="photo-item">
          <img src="{{ '/assets/photos/live2.jpg' | relative_url }}" alt="生活6">
          <div class="photo-caption">生活描述6</div>
        </div>
      </div>
    </div>

    <!-- 猫 -->
    <div id="cat" class="tab-pane">
      <div class="photo-grid">
        <div class="photo-item">
          <img src="{{ '/assets/photos/cat1.jpg' | relative_url }}" alt="猫1">
          <div class="photo-caption">猫描述1</div>
        </div>
        <div class="photo-item">
          <img src="{{ '/assets/photos/cat2.jpg' | relative_url }}" alt="猫2">
          <div class="photo-caption">猫描述2</div>
        </div>
        <div class="photo-item">
          <img src="{{ '/assets/photos/cat3.jpg' | relative_url }}" alt="猫3">
          <div class="photo-caption">猫描述3</div>
        </div>
        <div class="photo-item">
          <img src="{{ '/assets/photos/cat4.jpg' | relative_url }}" alt="猫4">
          <div class="photo-caption">猫描述4</div>
        </div>
        <div class="photo-item">
          <img src="{{ '/assets/photos/cat5.jpg' | relative_url }}" alt="猫5">
          <div class="photo-caption">猫描述5</div>
        </div>
        <div class="photo-item">
          <img src="{{ '/assets/photos/cat6.jpg' | relative_url }}" alt="猫6">
          <div class="photo-caption">猫描述6</div>
        </div>
      </div>
    </div>

    <!-- 随手拍 -->
    <div id="random" class="tab-pane">
      <div class="photo-grid">
        <div class="photo-item">
          <img src="{{ '/assets/photos/suishou1.jpg' | relative_url }}" alt="随手拍1">
          <div class="photo-caption">随手拍描述1</div>
        </div>
        <div class="photo-item">
          <img src="{{ '/assets/photos/suishou2.jpg' | relative_url }}" alt="随手拍2">
          <div class="photo-caption">随手拍描述2</div>
        </div>
        <div class="photo-item">
          <img src="{{ '/assets/photos/suishou3.jpg' | relative_url }}" alt="随手拍3">
          <div class="photo-caption">随手拍描述3</div>
        </div>
        <div class="photo-item">
          <img src="{{ '/assets/photos/suishou4.jpg' | relative_url }}" alt="随手拍4">
          <div class="photo-caption">随手拍描述4</div>
        </div>
        <div class="photo-item">
          <img src="{{ '/assets/photos/suishou5.jpg' | relative_url }}" alt="随手拍5">
          <div class="photo-caption">随手拍描述5</div>
        </div>
        <div class="photo-item">
          <img src="{{ '/assets/photos/suishou6.jpg' | relative_url }}" alt="随手拍6">
          <div class="photo-caption">随手拍描述6</div>
        </div>
      </div>
    </div>

  </div>
</div>

<style>
.photo-container { max-width:900px; margin:0 auto; }
.photo-nav { position:relative; display:flex; justify-content:center; margin:2rem 0; overflow-x:auto; white-space:nowrap; background:#f8f9fa; border-radius:8px; padding:8px; }
.nav-btn { padding:0.6rem 1.2rem; margin:0 0.25rem; background:white; border:1px solid #e0e0e0; cursor:pointer; font-size:0.85rem; color:#666; border-radius:6px; transition:all 0.3s ease; box-shadow:0 1px 3px rgba(0,0,0,0.05); position:relative; z-index:1; }
.nav-btn:hover { color:#111; background:#f3f3f3; transform:translateY(-1px); box-shadow:0 2px 5px rgba(0,0,0,0.08); }
.nav-btn.active { color:#000; font-weight:600; }
.nav-highlight { position:absolute; bottom:5px; height:3px; background:linear-gradient(90deg,#000,#444); border-radius:2px; transition:all 0.3s ease; z-index:0; }
.tab-content { margin:2rem 0; }
.tab-pane { display:none; animation:fadeIn 0.3s ease; }
.tab-pane.active { display:block; }
@keyframes fadeIn { from{opacity:0;} to{opacity:1;} }

.photo-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:12px; }
.photo-item { position:relative; border-radius:12px; overflow:hidden; }
.photo-item img { width:100%; height:180px; object-fit:cover; border-radius:12px; cursor:pointer; transition: transform 0.3s ease, box-shadow 0.3s ease; }
.photo-item img:hover { transform:scale(1.05); box-shadow:0 5px 15px rgba(0,0,0,0.2); }
.photo-caption { position:absolute; bottom:0; left:0; width:100%; padding:6px 0; text-align:center; background:rgba(0,0,0,0.5); color:#fff; font-size:0.85rem; opacity:0; transition:opacity 0.3s ease; border-bottom-left-radius:12px; border-bottom-right-radius:12px; }
.photo-item:hover .photo-caption { opacity:1; }

@media(max-width:768px) { .photo-nav { justify-content:flex-start; padding:6px; } .nav-btn { font-size:0.8rem; padding:0.4rem 0.8rem; } .photo-grid { grid-template-columns:repeat(2,1fr); } .photo-item img { height:140px; } }
</style>

<script>
document.addEventListener("DOMContentLoaded", initPhotoTabs);
document.addEventListener("pjax:complete", initPhotoTabs);

function initPhotoTabs() {
  const navButtons=document.querySelectorAll(".nav-btn");
  const tabPanes=document.querySelectorAll(".tab-pane");
  const highlight=document.querySelector(".nav-highlight");
  if(!navButtons.length||!tabPanes.length||!highlight)return;

  const moveHighlight=btn=>{
    const rect=btn.getBoundingClientRect();
    const containerRect=btn.parentElement.getBoundingClientRect();
    highlight.style.width=rect.width+"px";
    highlight.style.left=rect.left-containerRect.left+"px";
  }

  navButtons.forEach(button=>{
    button.addEventListener("click",e=>{
      e.preventDefault();
      const targetTab=button.getAttribute("data-tab");
      navButtons.forEach(b=>b.classList.remove("active"));
      button.classList.add("active");
      tabPanes.forEach(p=>p.classList.remove("active"));
      const targetPane=document.getElementById(targetTab);
      if(targetPane)targetPane.classList.add("active");
      moveHighlight(button);
    });
  });

  const activeButton=document.querySelector(".nav-btn.active")||navButtons[0];
  if(activeButton)moveHighlight(activeButton);

  document.querySelectorAll('.photo-item img').forEach(img=>{
    img.addEventListener('click',()=>{
      const overlay=document.createElement('div');
      overlay.style.cssText="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.8);display:flex;align-items:center;justify-content:center;cursor:zoom-out;z-index:9999;";
      const imgLarge=document.createElement('img');
      imgLarge.src=img.src;
      imgLarge.style.cssText="max-width:90%;max-height:90%;border-radius:12px;";
      overlay.appendChild(imgLarge);
      overlay.addEventListener('click',()=>overlay.remove());
      document.body.appendChild(overlay);
    });
  });
}
</script>