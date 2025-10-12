---
layout: page
title: "摄影"
permalink: /photo/
icon: fas fa-camera
order: 5
---

<style>
.photo-container {
  text-align: center;
  margin-top: 20px;
}

.photo-nav {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 25px;
  position: relative;
}

.photo-nav .nav-btn {
  background: none;
  border: none;
  font-size: 1rem;
  padding: 6px 14px;
  cursor: pointer;
  color: #666;
  position: relative;
  transition: color 0.3s;
}

.photo-nav .nav-btn.active {
  color: #000;
  font-weight: bold;
}

.photo-nav .nav-highlight {
  position: absolute;
  bottom: 0;
  height: 2px;
  background: #000;
  width: 0;
  transition: all 0.3s ease;
}

.tab-pane {
  display: none;
  animation: fadeIn 0.4s ease-in-out;
}
.tab-pane.active {
  display: block;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.photo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 15px;
}

.photo-grid img {
  width: 100%;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.photo-grid img:hover {
  transform: scale(1.03);
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

/* 放大查看样式 */
.photo-overlay {
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  background: rgba(0,0,0,0.88);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 9999;
}

.photo-overlay img.photo-large {
  max-width: 90%;
  max-height: 80%;
  border-radius: 12px;
  box-shadow: 0 4px 25px rgba(255,255,255,0.2);
}

.photo-overlay .photo-meta {
  color: #ddd;
  font-size: 0.95rem;
  text-align: center;
  background: rgba(0,0,0,0.5);
  padding: 8px 16px;
  border-radius: 8px;
  margin-top: 15px;
  line-height: 1.6;
}

.photo-overlay.fade-in {
  animation: fadeInOverlay 0.3s ease;
}

@keyframes fadeInOverlay {
  from { opacity: 0; transform: scale(0.98); }
  to { opacity: 1; transform: scale(1); }
}
</style>

<div class="photo-container">
  <div class="photo-nav">
    <div class="nav-highlight"></div>
    <button class="nav-btn active" data-tab="travel">旅行</button>
    <button class="nav-btn" data-tab="life">生活</button>
    <button class="nav-btn" data-tab="cat">猫</button>
    <button class="nav-btn" data-tab="random">随手拍</button>
  </div>

  <!-- ✅ 旅行 -->
  <div class="tab-pane active" id="travel">
    <div class="photo-grid">
      <img src="{{ '/assets/photos/travel1.jpg' | relative_url }}" alt="" data-meta="拍摄时间：2024年夏｜地点：大理｜设备：Sony A7R4">
      <img src="{{ '/assets/photos/travel2.jpg' | relative_url }}" alt="" data-meta="拍摄时间：2023年秋｜地点：京都｜设备：Fuji X-T5">
      <img src="{{ '/assets/photos/travel3.jpg' | relative_url }}" alt="" data-meta="拍摄时间：2022年春｜地点：威尼斯｜设备：Canon EOS R6">
      <img src="{{ '/assets/photos/travel4.jpg' | relative_url }}" alt="" data-meta="拍摄时间：2021年冬｜地点：哈尔滨｜设备：Nikon Z6">
      <img src="{{ '/assets/photos/travel5.jpg' | relative_url }}" alt="" data-meta="拍摄时间：2020年夏｜地点：青岛｜设备：iPhone 15 Pro">
      <img src="{{ '/assets/photos/travel6.jpg' | relative_url }}" alt="" data-meta="拍摄时间：2019年秋｜地点：重庆｜设备：Sony RX100 VII">
    </div>
  </div>

  <!-- ✅ 生活 -->
  <div class="tab-pane" id="life">
    <div class="photo-grid">
      <img src="{{ '/assets/photos/life1.jpg' | relative_url }}" alt="" data-meta="拍摄时间：2024年春｜地点：厨房｜设备：Fuji X100V">
      <img src="{{ '/assets/photos/life2.jpg' | relative_url }}" alt="" data-meta="拍摄时间：2023年秋｜地点：家中阳台｜设备：iPhone 15 Pro">
      <img src="{{ '/assets/photos/life3.jpg' | relative_url }}" alt="" data-meta="拍摄时间：2022年夏｜地点：办公室｜设备：Sony A7C">
      <img src="{{ '/assets/photos/life4.jpg' | relative_url }}" alt="" data-meta="拍摄时间：2021年冬｜地点：咖啡馆｜设备：Fuji X-T30 II">
      <img src="{{ '/assets/photos/life5.jpg' | relative_url }}" alt="" data-meta="拍摄时间：2020年春｜地点：客厅｜设备：Nikon Z50">
      <img src="{{ '/assets/photos/life6.jpg' | relative_url }}" alt="" data-meta="拍摄时间：2019年秋｜地点：街角｜设备：iPhone X">
    </div>
  </div>

  <!-- ✅ 猫 -->
  <div class="tab-pane" id="cat">
    <div class="photo-grid">
      <img src="{{ '/assets/photos/cat1.jpg' | relative_url }}" alt="" data-meta="拍摄时间：2024年｜地点：家中｜设备：Fuji X100V">
      <img src="{{ '/assets/photos/cat2.jpg' | relative_url }}" alt="" data-meta="拍摄时间：2023年｜地点：阳台｜设备：iPhone 14 Pro">
      <img src="{{ '/assets/photos/cat3.jpg' | relative_url }}" alt="" data-meta="拍摄时间：2022年｜地点：卧室｜设备：Sony A7R3">
      <img src="{{ '/assets/photos/cat4.jpg' | relative_url }}" alt="" data-meta="拍摄时间：2021年｜地点：客厅｜设备：Fuji X-T4">
      <img src="{{ '/assets/photos/cat5.jpg' | relative_url }}" alt="" data-meta="拍摄时间：2020年｜地点：阳光下｜设备：Nikon D750">
      <img src="{{ '/assets/photos/cat6.jpg' | relative_url }}" alt="" data-meta="拍摄时间：2019年｜地点：沙发｜设备：Canon M6 II">
    </div>
  </div>

  <!-- ✅ 随手拍 -->
  <div class="tab-pane" id="random">
    <div class="photo-grid">
      <img src="{{ '/assets/photos/random1.jpg' | relative_url }}" alt="" data-meta="拍摄时间：2024年｜地点：街头｜设备：Fuji X100V">
      <img src="{{ '/assets/photos/random2.jpg' | relative_url }}" alt="" data-meta="拍摄时间：2023年｜地点：地铁｜设备：iPhone 15 Pro">
      <img src="{{ '/assets/photos/random3.jpg' | relative_url }}" alt="" data-meta="拍摄时间：2022年｜地点：商场｜设备：Sony A7C">
      <img src="{{ '/assets/photos/random4.jpg' | relative_url }}" alt="" data-meta="拍摄时间：2021年｜地点：雨天｜设备：Fuji X-T3">
      <img src="{{ '/assets/photos/random5.jpg' | relative_url }}" alt="" data-meta="拍摄时间：2020年｜地点：夜市｜设备：Nikon Z5">
      <img src="{{ '/assets/photos/random6.jpg' | relative_url }}" alt="" data-meta="拍摄时间：2019年｜地点：广场｜设备：Canon EOS R">
    </div>
  </div>
</div>

<script>
function initPhotoTabs() {
  const container = document.querySelector(".photo-container");
  if (!container) return;

  const nav = container.querySelector(".photo-nav");
  const tabPanes = container.querySelectorAll(".tab-pane");
  const highlight = nav.querySelector(".nav-highlight");

  // --- Tab 切换 ---
  nav.addEventListener("click", function(e) {
    const btn = e.target.closest(".nav-btn");
    if (!btn) return;
    const tab = btn.dataset.tab;

    nav.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    tabPanes.forEach(p => p.classList.remove("active"));
    const targetPane = container.querySelector("#" + tab);
    if (targetPane) targetPane.classList.add("active");

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

  // --- 图片放大查看 ---
  const allImgs = container.querySelectorAll(".photo-grid img");

  allImgs.forEach(img => {
    img.addEventListener("click", () => {
      const overlay = document.createElement("div");
      overlay.className = "photo-overlay fade-in";
      overlay.innerHTML = `
        <img class="photo-large" src="${img.src}" alt="">
        <div class="photo-meta">${img.dataset.meta || ''}</div>
      `;
      document.body.appendChild(overlay);

      overlay.addEventListener("click", e => {
        if (e.target === overlay) overlay.remove();
      });

      document.addEventListener("keydown", e => {
        if (e.key === "Escape") overlay.remove();
      });
    });
  });
}

document.addEventListener("DOMContentLoaded", initPhotoTabs);
document.addEventListener("pjax:complete", initPhotoTabs);
</script>