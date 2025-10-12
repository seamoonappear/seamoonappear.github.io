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
        <img src="{{ '/assets/photos/travel1.jpg' | relative_url }}" alt="风景1" data-desc="傍晚的山谷，光影柔和">
        <img src="{{ '/assets/photos/travel2.jpg' | relative_url }}" alt="风景2" data-desc="海边的落日，宁静如诗">
        <img src="{{ '/assets/photos/travel3.jpg' | relative_url }}" alt="风景3" data-desc="晨雾中的山脊">
        <img src="{{ '/assets/photos/travel4.jpg' | relative_url }}" alt="风景4" data-desc="湖畔的倒影世界">
        <img src="{{ '/assets/photos/travel5.jpg' | relative_url }}" alt="风景5" data-desc="远方的雪峰">
        <img src="{{ '/assets/photos/travel6.jpg' | relative_url }}" alt="风景6" data-desc="森林小径上的阳光">
      </div>
    </div>

    <!-- 人物 -->
    <div id="people" class="tab-pane">
      <div class="photo-grid">
        <img src="{{ '/assets/photos/person1.jpg' | relative_url }}" alt="人物1" data-desc="街头的笑容">
        <img src="{{ '/assets/photos/person2.jpg' | relative_url }}" alt="人物2" data-desc="光影中的剪影">
        <img src="{{ '/assets/photos/person3.jpg' | relative_url }}" alt="人物3" data-desc="午后咖啡馆一隅">
        <img src="{{ '/assets/photos/person4.jpg' | relative_url }}" alt="人物4" data-desc="回眸瞬间">
        <img src="{{ '/assets/photos/person5.jpg' | relative_url }}" alt="人物5" data-desc="雨中的伞影">
        <img src="{{ '/assets/photos/person6.jpg' | relative_url }}" alt="人物6" data-desc="夕阳下的背影">
      </div>
    </div>

    <!-- 生活 -->
    <div id="life" class="tab-pane">
      <div class="photo-grid">
        <img src="{{ '/assets/photos/live1.jpg' | relative_url }}" alt="生活1" data-desc="厨房里的烟火气">
        <img src="{{ '/assets/photos/live2.jpg' | relative_url }}" alt="生活2" data-desc="清晨的阳台">
        <img src="{{ '/assets/photos/live3.jpg' | relative_url }}" alt="生活3" data-desc="书桌上的光影">
        <img src="{{ '/assets/photos/live4.jpg' | relative_url }}" alt="生活4" data-desc="城市一角的安静">
      </div>
    </div>

    <!-- 猫 -->
    <div id="cat" class="tab-pane">
      <div class="photo-grid">
        <img src="{{ '/assets/photos/cat1.jpg' | relative_url }}" alt="猫1" data-desc="午睡的小猫">
        <img src="{{ '/assets/photos/cat2.jpg' | relative_url }}" alt="猫2" data-desc="慵懒的伸展">
        <img src="{{ '/assets/photos/cat3.jpg' | relative_url }}" alt="猫3" data-desc="窗边的凝视">
        <img src="{{ '/assets/photos/cat4.jpg' | relative_url }}" alt="猫4" data-desc="纸箱里的探头">
        <img src="{{ '/assets/photos/cat5.jpg' | relative_url }}" alt="猫5" data-desc="一脸不屑的喵">
        <img src="{{ '/assets/photos/cat6.jpg' | relative_url }}" alt="猫6" data-desc="午后阳光下的毛球">
      </div>
    </div>

    <!-- 随手拍 -->
    <div id="random" class="tab-pane">
      <div class="photo-grid">
        <img src="{{ '/assets/photos/suishou1.jpg' | relative_url }}" alt="随手拍1" data-desc="街角的橱窗">
        <img src="{{ '/assets/photos/suishou2.jpg' | relative_url }}" alt="随手拍2" data-desc="地铁里的光线">
        <img src="{{ '/assets/photos/suishou3.jpg' | relative_url }}" alt="随手拍3" data-desc="旧城的墙面">
        <img src="{{ '/assets/photos/suishou4.jpg' | relative_url }}" alt="随手拍4" data-desc="路边的小花">
        <img src="{{ '/assets/photos/suishou5.jpg' | relative_url }}" alt="随手拍5" data-desc="清晨的街道">
        <img src="{{ '/assets/photos/suishou6.jpg' | relative_url }}" alt="随手拍6" data-desc="天台上的猫影">
      </div>
    </div>

  </div>
</div>

<style>
.photo-container {
  max-width: 900px;
  margin: 0 auto;
}

.photo-nav {
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
  gap: 12px;
}
.photo-grid img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 12px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.photo-grid img:hover {
  transform: scale(1.05);
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

/* 图片放大 + 淡入切换效果 */
.photo-overlay {
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  background: rgba(0,0,0,0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 9999;
  animation: fadeIn 0.3s ease;
}

.photo-overlay img.photo-large {
  max-width: 90%;
  max-height: 80%;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(255,255,255,0.3);
  margin-bottom: 12px;
  transition: opacity 0.3s ease;
}

.photo-overlay .photo-desc {
  color: #fff;
  font-size: 1rem;
  text-align: center;
  background: rgba(0,0,0,0.5);
  padding: 6px 14px;
  border-radius: 8px;
  max-width: 80%;
}

.nav-btn-prev, .nav-btn-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: white;
  background: rgba(0,0,0,0.5);
  border: none;
  font-size: 2rem;
  padding: 10px 18px;
  cursor: pointer;
  border-radius: 50%;
  user-select: none;
  transition: all 0.2s ease;
}

.nav-btn-prev:hover, .nav-btn-next:hover {
  background: rgba(255,255,255,0.2);
}

.nav-btn-prev { left: 30px; }
.nav-btn-next { right: 30px; }

@media (max-width: 768px) {
  .photo-nav { justify-content: flex-start; padding: 6px; }
  .nav-btn { font-size: 0.8rem; padding: 0.4rem 0.8rem; }
  .photo-grid img { height: 140px; }
}
</style>

<script>
function initPhotoTabs() {
  const container = document.querySelector(".photo-container");
  if (!container) return;

  const nav = container.querySelector(".photo-nav");
  const tabPanes = container.querySelectorAll(".tab-pane");
  const highlight = nav.querySelector(".nav-highlight");

  if (nav && highlight) {
    nav.addEventListener("click", e => {
      const btn = e.target.closest(".nav-btn");
      if (!btn) return;
      const tab = btn.dataset.tab;
      nav.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      tabPanes.forEach(p => p.classList.remove("active"));
      const target = container.querySelector("#" + tab);
      if (target) target.classList.add("active");

      const rect = btn.getBoundingClientRect();
      const navRect = nav.getBoundingClientRect();
      highlight.style.width = rect.width + "px";
      highlight.style.left = (rect.left - navRect.left) + "px";
    });

    const activeBtn = nav.querySelector(".nav-btn.active") || nav.querySelector(".nav-btn");
    if (activeBtn) {
      const rect = activeBtn.getBoundingClientRect();
      const navRect = nav.getBoundingClientRect();
      highlight.style.width = rect.width + "px";
      highlight.style.left = (rect.left - navRect.left) + "px";
    }
  }

  const allImgs = Array.from(document.querySelectorAll(".photo-grid img"));
  let currentIndex = -1;
  let overlay = null;

  const showOverlay = index => {
    if (index < 0 || index >= allImgs.length) return;
    currentIndex = index;
    const img = allImgs[index];

    if (!overlay) {
      overlay = document.createElement("div");
      overlay.className = "photo-overlay";
      overlay.innerHTML = `
        <button class="nav-btn-prev">&#10094;</button>
        <img class="photo-large" src="" alt="">
        <div class="photo-desc"></div>
        <button class="nav-btn-next">&#10095;</button>
      `;
      document.body.appendChild(overlay);

      overlay.querySelector(".nav-btn-prev").addEventListener("click", e => {
        e.stopPropagation();
        showOverlay(currentIndex - 1);
      });
      overlay.querySelector(".nav-btn-next").addEventListener("click", e => {
        e.stopPropagation();
        showOverlay(currentIndex + 1);
      });
      overlay.addEventListener("click", e => {
        if (e.target === overlay) overlay.remove();
      });
      document.addEventListener("keydown", e => {
        if (!overlay) return;
        if (e.key === "ArrowLeft") showOverlay(currentIndex - 1);
        if (e.key === "ArrowRight") showOverlay(currentIndex + 1);
        if (e.key === "Escape") overlay.remove();
      });
    }

    const largeImg = overlay.querySelector(".photo-large");
    const desc = overlay.querySelector(".photo-desc");
    largeImg.style.opacity = "0";
    setTimeout(() => {
      largeImg.src = img.src;
      desc.textContent = img.dataset.desc || "";
      largeImg.style.opacity = "1";
    }, 150);

    overlay.querySelector(".nav-btn-prev").style.display = index > 0 ? "block" : "none";
    overlay.querySelector(".nav-btn-next").style.display = index < allImgs.length - 1 ? "block" : "none";
  };

  allImgs.forEach((img, i) => img.addEventListener("click", () => showOverlay(i)));
}

document.addEventListener("DOMContentLoaded", initPhotoTabs);
document.addEventListener("pjax:complete", initPhotoTabs);
</script>