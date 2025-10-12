---
layout: page
title: "消费"
permalink: /media/
icon: fas fa-book
order: 4
---

<style>
.media-container {
  width: 90%;
  margin: 0 auto;
  text-align: center;
}

.media-nav {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
  position: relative;
}

.media-nav .nav-btn {
  background: none;
  border: none;
  font-size: 18px;
  padding: 10px 20px;
  cursor: pointer;
  transition: 0.3s;
  color: #555;
}

.media-nav .nav-btn.active {
  border-bottom: 2px solid #000;
  font-weight: bold;
  color: #000;
}

.media-section {
  display: none;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.media-section.active {
  display: flex;
}

.media-item {
  width: 30%;
  text-align: center;
  cursor: pointer;
  position: relative;
}

.media-item img {
  width: 100%;
  border-radius: 10px;
  transition: transform 0.3s ease;
}

.media-item:hover img {
  transform: scale(1.05);
}

.media-desc {
  margin-top: 8px;
  font-size: 14px;
  color: #666;
}

/* 放大图片遮罩层 */
.modal {
  display: none;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.8);
  justify-content: center;
  align-items: center;
}

.modal img {
  max-width: 90%;
  max-height: 90%;
  border-radius: 10px;
}
</style>

<div class="media-container">
  <div class="media-nav">
    <button class="nav-btn active" data-tab="hobby">爱好</button>
    <button class="nav-btn" data-tab="books">书</button>
    <button class="nav-btn" data-tab="movies">电影</button>
    <button class="nav-btn" data-tab="music">音乐</button>
    <button class="nav-btn" data-tab="travel">旅行</button>
  </div>

  <!-- 爱好 -->
  <div id="hobby" class="media-section active">
    <div class="media-item">
      <img src="{{ '/assets/media/hobby1.jpg' | relative_url }}" alt="绘画">
      <div class="media-desc">周末随笔绘画练习</div>
    </div>
    <div class="media-item">
      <img src="{{ '/assets/media/hobby2.jpg' | relative_url }}" alt="手工">
      <div class="media-desc">闲暇手工与陶艺</div>
    </div>
    <div class="media-item">
      <img src="{{ '/assets/media/hobby3.jpg' | relative_url }}" alt="烹饪">
      <div class="media-desc">新尝试的甜点配方</div>
    </div>
  </div>

  <!-- 书 -->
  <div id="books" class="media-section">
    <div class="media-item">
      <img src="{{ '/assets/media/book1.jpg' | relative_url }}" alt="阅读">
      <div class="media-desc">最近读完的小说</div>
    </div>
    <div class="media-item">
      <img src="{{ '/assets/media/book2.jpg' | relative_url }}" alt="书架">
      <div class="media-desc">书架一角</div>
    </div>
    <div class="media-item">
      <img src="{{ '/assets/media/book3.jpg' | relative_url }}" alt="笔记">
      <div class="media-desc">读书笔记片段</div>
    </div>
  </div>

  <!-- 电影 -->
  <div id="movies" class="media-section">
    <div class="media-item">
      <img src="{{ '/assets/media/movie1.jpg' | relative_url }}" alt="观影">
      <div class="media-desc">影院周末场</div>
    </div>
    <div class="media-item">
      <img src="{{ '/assets/media/movie2.jpg' | relative_url }}" alt="收藏">
      <div class="media-desc">最爱的影碟收藏</div>
    </div>
    <div class="media-item">
      <img src="{{ '/assets/media/movie3.jpg' | relative_url }}" alt="经典">
      <div class="media-desc">重温黑白经典</div>
    </div>
  </div>

  <!-- 音乐 -->
  <div id="music" class="media-section">
    <div class="media-item">
      <img src="{{ '/assets/media/music1.jpg' | relative_url }}" alt="黑胶">
      <div class="media-desc">黑胶唱片收藏</div>
    </div>
    <div class="media-item">
      <img src="{{ '/assets/media/music2.jpg' | relative_url }}" alt="演出">
      <div class="media-desc">现场音乐节瞬间</div>
    </div>
    <div class="media-item">
      <img src="{{ '/assets/media/music3.jpg' | relative_url }}" alt="乐器">
      <div class="media-desc">练琴的日常</div>
    </div>
  </div>

  <!-- 旅行 -->
  <div id="travel" class="media-section">
    <div class="media-item">
      <img src="{{ '/assets/media/travel1.jpg' | relative_url }}" alt="城市">
      <div class="media-desc">东京街角的咖啡馆</div>
    </div>
    <div class="media-item">
      <img src="{{ '/assets/media/travel2.jpg' | relative_url }}" alt="海边">
      <div class="media-desc">海边清晨散步</div>
    </div>
    <div class="media-item">
      <img src="{{ '/assets/media/travel3.jpg' | relative_url }}" alt="山景">
      <div class="media-desc">山中秋色之旅</div>
    </div>
  </div>
</div>

<!-- 图片放大模态框 -->
<div id="imgModal" class="modal">
  <img id="modalImg" src="" alt="">
</div>

<script>
const navButtons = document.querySelectorAll('.nav-btn');
const sections = document.querySelectorAll('.media-section');

navButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    navButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    sections.forEach(sec => sec.classList.remove('active'));
    document.getElementById(btn.dataset.tab).classList.add('active');
  });
});

const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");

document.querySelectorAll('.media-item img').forEach(img => {
  img.onclick = () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
  };
});

modal.onclick = () => modal.style.display = "none";
</script>