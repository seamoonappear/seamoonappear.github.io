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
        <img src="{{ '/assets/photos/travel1.jpg' | relative_url }}" alt="风景1" data-desc="日出海景">
        <img src="{{ '/assets/photos/travel2.jpg' | relative_url }}" alt="风景2" data-desc="山间小路">
        <img src="{{ '/assets/photos/travel3.jpg' | relative_url }}" alt="风景3" data-desc="湖边倒影">
        <img src="{{ '/assets/photos/travel4.jpg' | relative_url }}" alt="风景4" data-desc="秋日森林">
        <img src="{{ '/assets/photos/travel5.jpg' | relative_url }}" alt="风景5" data-desc="雪山风光">
        <img src="{{ '/assets/photos/travel1.jpg' | relative_url }}" alt="风景6" data-desc="海边礁石">
      </div>
    </div>

    <!-- 人物 -->
    <div id="people" class="tab-pane">
      <div class="photo-grid">
        <img src="{{ '/assets/photos/person1.jpg' | relative_url }}" alt="人物1" data-desc="街头行人">
        <img src="{{ '/assets/photos/person2.jpg' | relative_url }}" alt="人物2" data-desc="微笑少女">
        <img src="{{ '/assets/photos/person3.jpg' | relative_url }}" alt="人物3" data-desc="咖啡时光">
        <img src="{{ '/assets/photos/person4.jpg' | relative_url }}" alt="人物4" data-desc="街头艺术家">
        <img src="{{ '/assets/photos/person5.jpg' | relative_url }}" alt="人物5" data-desc="老者肖像">
        <img src="{{ '/assets/photos/person6.jpg' | relative_url }}" alt="人物6" data-desc="骑行少年">
        <img src="{{ '/assets/photos/person7.jpg' | relative_url }}" alt="人物7" data-desc="舞者瞬间">
        <img src="{{ '/assets/photos/person8.jpg' | relative_url }}" alt="人物8" data-desc="儿童玩耍">
        <img src="{{ '/assets/photos/person9.jpg' | relative_url }}" alt="人物9" data-desc="朋友聚会">
      </div>
    </div>

    <!-- 生活 -->
    <div id="life" class="tab-pane">
      <div class="photo-grid">
        <img src="{{ '/assets/photos/live1.jpg' | relative_url }}" alt="生活1" data-desc="书桌一角">
        <img src="{{ '/assets/photos/live2.jpg' | relative_url }}" alt="生活2" data-desc="咖啡与书">
        <img src="{{ '/assets/photos/live3.jpg' | relative_url }}" alt="生活3" data-desc="厨房美食">
        <img src="{{ '/assets/photos/live4.jpg' | relative_url }}" alt="生活4" data-desc="阳台花草">
      </div>
    </div>

    <!-- 猫 -->
    <div id="cat" class="tab-pane">
      <div class="photo-grid">
        <img src="{{ '/assets/photos/cat1.jpg' | relative_url }}" alt="猫1" data-desc="睡觉的小猫">
        <img src="{{ '/assets/photos/cat2.jpg' | relative_url }}" alt="猫2" data-desc="好奇的猫">
        <img src="{{ '/assets/photos/cat3.jpg' | relative_url }}" alt="猫3" data-desc="晒太阳的猫">
        <img src="{{ '/assets/photos/cat4.jpg' | relative_url }}" alt="猫4" data-desc="抓玩具猫">
        <img src="{{ '/assets/photos/cat5.jpg' | relative_url }}" alt="猫5" data-desc="猫咪懒觉">
        <img src="{{ '/assets/photos/cat6.jpg' | relative_url }}" alt="猫6" data-desc="窗台猫">
      </div>
    </div>

    <!-- 随手拍 -->
    <div id="random" class="tab-pane">
      <div class="photo-grid">
        <img src="{{ '/assets/photos/suishou1.jpg' | relative_url }}" alt="随手拍1" data-desc="街头风景">
        <img src="{{ '/assets/photos/suishou2.jpg' | relative_url }}" alt="随手拍2" data-desc="咖啡杯">
        <img src="{{ '/assets/photos/suishou3.jpg' | relative_url }}" alt="随手拍3" data-desc="书本特写">
        <img src="{{ '/assets/photos/suishou4.jpg' | relative_url }}" alt="随手拍4" data-desc="日落余晖">
        <img src="{{ '/assets/photos/suishou5.jpg' | relative_url }}" alt="随手拍5" data-desc="街边小店">
        <img src="{{ '/assets/photos/suishou6.jpg' | relative_url }}" alt="随手拍6" data-desc="夜晚灯光">
        <img src="{{ '/assets/photos/suishou7.jpg' | relative_url }}" alt="随手拍7" data-desc="公园长椅">
        <img src="{{ '/assets/photos/suishou8.jpg' | relative_url }}" alt="随手拍8" data-desc="窗外雨景">
      </div>
    </div>
  </div>
</div>

<style>
.photo-container { max-width: 900px; margin: 0 auto; }
.photo-nav { position: relative; display: flex; justify-content: center; margin: 2rem 0; overflow-x: auto; white-space: nowrap; background: #f8f9fa; border-radius: 8px; padding: 8px; }
.nav-btn { padding: 0.6rem 1.2rem; margin: 0 0.25rem; background: white; border: 1px solid #e0e0e0; cursor: pointer; font-size: 0.85rem; color: #666; border-radius: 6px; transition: all 0.3s ease; box-shadow: 0 1px 3px rgba(0,0,0,0.05); position: relative; z-index: 1; }
.nav-btn:hover { color: #111; background-color: #f3f3f3; transform: translateY(-1px); box-shadow: 0 2px 5px rgba(0,0,0,0.08); }
.nav-btn.active { color: #000; font-weight: 600; }
.nav-highlight { position: absolute; bottom: 5px; height: 3px; background: linear-gradient(90deg,#000,#444); border-radius: 2px; transition: all 0.3s ease; z-index: 0; }
.tab-content { margin: 2rem 0; }
.tab-pane { display: none; animation: fadeIn 0.3s ease; }
.tab-pane.active { display: block; }
@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
.photo-grid { display: grid; grid-template-columns: repeat(auto-fill,minmax(250px,1fr)); gap:12px; }
.photo-grid img { width:100%; height:180px; object-fit:cover; border-radius:12px; cursor:pointer; transition: transform 0.3s ease, box-shadow 0.3s ease; }
.photo-grid img:hover { transform: scale(1.05); box-shadow:0 5px 15px rgba(0,0,0,0.2); }
@media (max-width:768px){ .photo-nav{justify-content:flex-start;padding:6px;} .nav-btn{font-size:0.8rem;padding:0.4rem 0.8rem;} .photo-grid img{height:140px;} }
</style>

<script>
document.addEventListener("turbo:load", initPhotoTabs);

function initPhotoTabs() {
  const navButtons = document.querySelectorAll(".nav-btn");
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
    button.onclick = (e) => {
      e.preventDefault();
      const targetTab = button.dataset.tab;
      navButtons.forEach(b => b.classList.remove("active"));
      button.classList.add("active");
      tabPanes.forEach(p => p.classList.remove("active"));
      const targetPane = document.getElementById(targetTab);
      if (targetPane) targetPane.classList.add("active");
      moveHighlight(button);
      bindPhotoZoom(targetPane);
    };
  });

  const activeButton = document.querySelector(".nav-btn.active") || navButtons[0];
  if (activeButton) moveHighlight(activeButton);
  tabPanes.forEach(p => bindPhotoZoom(p));

  function bindPhotoZoom(container){
    if(!container) return;
    container.querySelectorAll('img').forEach(img => {
      img.onclick = () => {
        const overlay=document.createElement('div');
        overlay.style.position='fixed';
        overlay.style.top=0;
        overlay.style.left=0;
        overlay.style.width='100%';
        overlay.style.height='100%';
        overlay.style.background='rgba(0,0,0,0.8)';
        overlay.style.display='flex';
        overlay.style.flexDirection='column';
        overlay.style.alignItems='center';
        overlay.style.justifyContent='center';
        overlay.style.cursor='zoom-out';
        overlay.style.zIndex=9999;

        const imgLarge=document.createElement('img');
        imgLarge.src=img.src;
        imgLarge.style.maxWidth='90%';
        imgLarge.style.maxHeight='80%';
        imgLarge.style.borderRadius='12px';

        const desc=document.createElement('div');
        desc.textContent=img.dataset.desc || '';
        desc.style.color='#fff';
        desc.style.marginTop='12px';
        desc.style.fontSize='1rem';
        desc.style.textAlign='center';

        overlay.appendChild(imgLarge);
        overlay.appendChild(desc);

        overlay.onclick=()=>overlay.remove();
        document.body.appendChild(overlay);
      };
    });
  }
}
</script>