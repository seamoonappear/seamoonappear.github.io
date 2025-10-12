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
        <div class="photo-item"><img src="{{ '/assets/photos/travel1.jpg' | relative_url }}" alt="风景1"><div class="photo-caption">晨雾中的群山</div></div>
        <div class="photo-item"><img src="{{ '/assets/photos/travel2.jpg' | relative_url }}" alt="风景2"><div class="photo-caption">湖边的宁静</div></div>
        <div class="photo-item"><img src="{{ '/assets/photos/travel3.jpg' | relative_url }}" alt="风景3"><div class="photo-caption">海边的落日</div></div>
        <div class="photo-item"><img src="{{ '/assets/photos/travel4.jpg' | relative_url }}" alt="风景4"><div class="photo-caption">林间的光影</div></div>
        <div class="photo-item"><img src="{{ '/assets/photos/travel5.jpg' | relative_url }}" alt="风景5"><div class="photo-caption">雪后的小镇</div></div>
        <div class="photo-item"><img src="{{ '/assets/photos/travel1.jpg' | relative_url }}" alt="风景6"><div class="photo-caption">山谷的晨光</div></div>
      </div>
    </div>

    <!-- 人物 -->
    <div id="people" class="tab-pane">
      <div class="photo-grid">
        <div class="photo-item"><img src="{{ '/assets/photos/person1.jpg' | relative_url }}" alt="人物1"><div class="photo-caption">街角的笑容</div></div>
        <div class="photo-item"><img src="{{ '/assets/photos/person2.jpg' | relative_url }}" alt="人物2"><div class="photo-caption">咖啡馆一隅</div></div>
        <div class="photo-item"><img src="{{ '/assets/photos/person3.jpg' | relative_url }}" alt="人物3"><div class="photo-caption">窗边的光影</div></div>
        <div class="photo-item"><img src="{{ '/assets/photos/person4.jpg' | relative_url }}" alt="人物4"><div class="photo-caption">旅行中的朋友</div></div>
        <div class="photo-item"><img src="{{ '/assets/photos/person5.jpg' | relative_url }}" alt="人物5"><div class="photo-caption">街头表演者</div></div>
        <div class="photo-item"><img src="{{ '/assets/photos/person6.jpg' | relative_url }}" alt="人物6"><div class="photo-caption">回眸一笑</div></div>
        <div class="photo-item"><img src="{{ '/assets/photos/person7.jpg' | relative_url }}" alt="人物7"><div class="photo-caption">午后的小憩</div></div>
        <div class="photo-item"><img src="{{ '/assets/photos/person8.jpg' | relative_url }}" alt="人物8"><div class="photo-caption">远方的目光</div></div>
        <div class="photo-item"><img src="{{ '/assets/photos/person9.jpg' | relative_url }}" alt="人物9"><div class="photo-caption">雨中的伞影</div></div>
      </div>
    </div>

    <!-- 生活 -->
    <div id="life" class="tab-pane">
      <div class="photo-grid">
        <div class="photo-item"><img src="{{ '/assets/photos/live1.jpg' | relative_url }}" alt="生活1"><div class="photo-caption">清晨的早餐</div></div>
        <div class="photo-item"><img src="{{ '/assets/photos/live2.jpg' | relative_url }}" alt="生活2"><div class="photo-caption">街头的日常</div></div>
        <div class="photo-item"><img src="{{ '/assets/photos/live3.jpg' | relative_url }}" alt="生活3"><div class="photo-caption">阳台上的花</div></div>
        <div class="photo-item"><img src="{{ '/assets/photos/live4.jpg' | relative_url }}" alt="生活4"><div class="photo-caption">傍晚的影子</div></div>
      </div>
    </div>

    <!-- 猫 -->
    <div id="cat" class="tab-pane">
      <div class="photo-grid">
        <div class="photo-item"><img src="{{ '/assets/photos/cat1.jpg' | relative_url }}" alt="猫1"><div class="photo-caption">慵懒的午后</div></div>
        <div class="photo-item"><img src="{{ '/assets/photos/cat2.jpg' | relative_url }}" alt="猫2"><div class="photo-caption">专注的眼神</div></div>
        <div class="photo-item"><img src="{{ '/assets/photos/cat3.jpg' | relative_url }}" alt="猫3"><div class="photo-caption">趴在窗台上</div></div>
        <div class="photo-item"><img src="{{ '/assets/photos/cat4.jpg' | relative_url }}" alt="猫4"><div class="photo-caption">打哈欠的瞬间</div></div>
        <div class="photo-item"><img src="{{ '/assets/photos/cat5.jpg' | relative_url }}" alt="猫5"><div class="photo-caption">藏在被窝里</div></div>
        <div class="photo-item"><img src="{{ '/assets/photos/cat6.jpg' | relative_url }}" alt="猫6"><div class="photo-caption">等待晚餐的样子</div></div>
      </div>
    </div>

    <!-- 随手拍 -->
    <div id="random" class="tab-pane">
      <div class="photo-grid">
        <div class="photo-item"><img src="{{ '/assets/photos/suishou1.jpg' | relative_url }}" alt="随手拍1"><div class="photo-caption">路边的光影</div></div>
        <div class="photo-item"><img src="{{ '/assets/photos/suishou2.jpg' | relative_url }}" alt="随手拍2"><div class="photo-caption">旧墙上的涂鸦</div></div>
        <div class="photo-item"><img src="{{ '/assets/photos/suishou3.jpg' | relative_url }}" alt="随手拍3"><div class="photo-caption">雨后的街道</div></div>
        <div class="photo-item"><img src="{{ '/assets/photos/suishou4.jpg' | relative_url }}" alt="随手拍4"><div class="photo-caption">书页之间的光</div></div>
        <div class="photo-item"><img src="{{ '/assets/photos/suishou5.jpg' | relative_url }}" alt="随手拍5"><div class="photo-caption">橱窗里的世界</div></div>
        <div class="photo-item"><img src="{{ '/assets/photos/suishou6.jpg' | relative_url }}" alt="随手拍6"><div class="photo-caption">角落里的植物</div></div>
        <div class="photo-item"><img src="{{ '/assets/photos/suishou7.jpg' | relative_url }}" alt="随手拍7"><div class="photo-caption">晨光透过窗帘</div></div>
        <div class="photo-item"><img src="{{ '/assets/photos/suishou8.jpg' | relative_url }}" alt="随手拍8"><div class="photo-caption">夜色下的灯</div></div>
      </div>
    </div>
  </div>
</div>

<style>
.photo-container { max-width: 960px; margin:0 auto; }
.photo-nav { display:flex; justify-content:center; margin:2rem 0; overflow-x:auto; white-space:nowrap; background:#f8f9fa; border-radius:8px; padding:8px; position:relative; }
.nav-btn { padding:0.6rem 1.2rem; margin:0 0.25rem; background:white; border:1px solid #e0e0e0; cursor:pointer; border-radius:6px; color:#666; font-size:0.85rem; transition:all 0.3s; }
.nav-btn.active { font-weight:600; color:#000; }
.nav-highlight { position:absolute; bottom:5px; height:3px; background:linear-gradient(90deg,#000,#444); transition:0.3s; border-radius:2px; z-index:0; }
.tab-pane { display:none; }
.tab-pane.active { display:block; }
.photo-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(250px,1fr)); gap:12px; }
.photo-item { display:flex; flex-direction:column; }
.photo-item img { width:100%; height:200px; object-fit:cover; border-radius:12px; cursor:pointer; transition:transform 0.3s; }
.photo-item img:hover { transform:scale(1.05); }
.photo-caption { text-align:center; font-size:14px; color:#666; height:1.2em; overflow:hidden; margin-top:4px; }
@media (max-width:768px){ .photo-grid img{height:140px;} .nav-btn{padding:0.4rem 0.8rem; font-size:0.8rem;} }
</style>

<script>
document.addEventListener("DOMContentLoaded",()=>{
  const navButtons=document.querySelectorAll(".nav-btn");
  const panes=document.querySelectorAll(".tab-pane");
  const highlight=document.querySelector(".nav-highlight");
  if(!navButtons.length||!panes.length||!highlight) return;

  const moveHighlight=(btn)=>{
    const rect=btn.getBoundingClientRect();
    const containerRect=btn.parentElement.getBoundingClientRect();
    highlight.style.width=rect.width+"px";
    highlight.style.left=rect.left-containerRect.left+"px";
  };

  navButtons.forEach(btn=>{
    btn.addEventListener("click",()=>{
      navButtons.forEach(b=>b.classList.remove("active"));
      btn.classList.add("active");
      panes.forEach(p=>p.classList.remove("active"));
      const target=document.getElementById(btn.dataset.tab);
      if(target) target.classList.add("active");
      moveHighlight(btn);
    });
  });

  const activeBtn=document.querySelector(".nav-btn.active")||navButtons[0];
  if(activeBtn) moveHighlight(activeBtn);

  // 图片放大查看
  document.querySelectorAll(".photo-item img").forEach(img=>{
    img.addEventListener("click",()=>{
      const overlay=document.createElement("div");
      overlay.style.position="fixed";
      overlay.style.top=0; overlay.style.left=0; overlay.style.width="100%"; overlay.style.height="100%";
      overlay.style.background="rgba(0,0,0,0.85)"; overlay.style.display="flex"; overlay.style.justifyContent="center"; overlay.style.alignItems="center";
      overlay.style.zIndex="9999"; overlay.style.cursor="zoom-out";

      const large=document.createElement("img");
      large.src=img.src;
      large.style.maxWidth="90%"; large.style.maxHeight="90%"; large.style.borderRadius="12px";
      overlay.appendChild(large);

      overlay.addEventListener("click",()=>overlay.remove());
      document.body.appendChild(overlay);
    });
  });
});
</script>