---
layout: page
title: "照片"
permalink: /photo/
icon: fas fa-camera
order: 5
---

<div class="photo-container">
  <!-- 导航标签 -->
  <nav class="photo-nav">
    <div class="nav-container">
      <button class="nav-btn active" data-tab="scenery">风景</button>
      <button class="nav-btn" data-tab="people">人物</button>
      <button class="nav-btn" data-tab="life">生活</button>
      <button class="nav-btn" data-tab="cat">猫</button>
      <button class="nav-btn" data-tab="random">随手拍</button>
      <div class="nav-highlight"></div>
    </div>
  </nav>

  <!-- 内容区域 -->
  <div class="tab-content">
    <!-- 风景 -->
    <div id="scenery" class="tab-pane active">
      <div class="photo-grid">
        <div class="photo-card">
          <img src="{{ '/assets/photos/travel1.jpg' | relative_url }}" alt="晨雾中的群山" loading="lazy">
          <div class="photo-info">晨雾中的群山</div>
        </div>
        <div class="photo-card">
          <img src="{{ '/assets/photos/travel2.jpg' | relative_url }}" alt="湖边的宁静" loading="lazy">
          <div class="photo-info">湖边的宁静</div>
        </div>
        <div class="photo-card">
          <img src="{{ '/assets/photos/travel3.jpg' | relative_url }}" alt="海边的落日" loading="lazy">
          <div class="photo-info">海边的落日</div>
        </div>
        <div class="photo-card">
          <img src="{{ '/assets/photos/travel4.jpg' | relative_url }}" alt="林间的光影" loading="lazy">
          <div class="photo-info">林间的光影</div>
        </div>
        <div class="photo-card">
          <img src="{{ '/assets/photos/travel5.jpg' | relative_url }}" alt="雪后的小镇" loading="lazy">
          <div class="photo-info">雪后的小镇</div>
        </div>
        <div class="photo-card">
          <img src="{{ '/assets/photos/travel1.jpg' | relative_url }}" alt="山谷的晨光" loading="lazy">
          <div class="photo-info">山谷的晨光</div>
        </div>
      </div>
    </div>

    <!-- 人物 -->
    <div id="people" class="tab-pane">
      <div class="photo-grid">
        <div class="photo-card">
          <img src="{{ '/assets/photos/person1.jpg' | relative_url }}" alt="街角的笑容" loading="lazy">
          <div class="photo-info">街角的笑容</div>
        </div>
        <div class="photo-card">
          <img src="{{ '/assets/photos/person2.jpg' | relative_url }}" alt="咖啡馆一隅" loading="lazy">
          <div class="photo-info">咖啡馆一隅</div>
        </div>
        <div class="photo-card">
          <img src="{{ '/assets/photos/person3.jpg' | relative_url }}" alt="窗边的光影" loading="lazy">
          <div class="photo-info">窗边的光影</div>
        </div>
        <div class="photo-card">
          <img src="{{ '/assets/photos/person4.jpg' | relative_url }}" alt="旅行中的朋友" loading="lazy">
          <div class="photo-info">旅行中的朋友</div>
        </div>
        <div class="photo-card">
          <img src="{{ '/assets/photos/person5.jpg' | relative_url }}" alt="街头表演者" loading="lazy">
          <div class="photo-info">街头表演者</div>
        </div>
        <div class="photo-card">
          <img src="{{ '/assets/photos/person6.jpg' | relative_url }}" alt="回眸一笑" loading="lazy">
          <div class="photo-info">回眸一笑</div>
        </div>
      </div>
    </div>

    <!-- 生活 -->
    <div id="life" class="tab-pane">
      <div class="photo-grid">
        <div class="photo-card">
          <img src="{{ '/assets/photos/live1.jpg' | relative_url }}" alt="清晨的早餐" loading="lazy">
          <div class="photo-info">清晨的早餐</div>
        </div>
        <div class="photo-card">
          <img src="{{ '/assets/photos/live2.jpg' | relative_url }}" alt="街头的日常" loading="lazy">
          <div class="photo-info">街头的日常</div>
        </div>
        <div class="photo-card">
          <img src="{{ '/assets/photos/live3.jpg' | relative_url }}" alt="阳台上的花" loading="lazy">
          <div class="photo-info">阳台上的花</div>
        </div>
        <div class="photo-card">
          <img src="{{ '/assets/photos/live4.jpg' | relative_url }}" alt="傍晚的影子" loading="lazy">
          <div class="photo-info">傍晚的影子</div>
        </div>
      </div>
    </div>

    <!-- 猫 -->
    <div id="cat" class="tab-pane">
      <div class="photo-grid">
        <div class="photo-card">
          <img src="{{ '/assets/photos/cat1.jpg' | relative_url }}" alt="慵懒的午后" loading="lazy">
          <div class="photo-info">慵懒的午后</div>
        </div>
        <div class="photo-card">
          <img src="{{ '/assets/photos/cat2.jpg' | relative_url }}" alt="专注的眼神" loading="lazy">
          <div class="photo-info">专注的眼神</div>
        </div>
        <div class="photo-card">
          <img src="{{ '/assets/photos/cat3.jpg' | relative_url }}" alt="趴在窗台上" loading="lazy">
          <div class="photo-info">趴在窗台上</div>
        </div>
        <div class="photo-card">
          <img src="{{ '/assets/photos/cat4.jpg' | relative_url }}" alt="打哈欠的瞬间" loading="lazy">
          <div class="photo-info">打哈欠的瞬间</div>
        </div>
        <div class="photo-card">
          <img src="{{ '/assets/photos/cat5.jpg' | relative_url }}" alt="藏在被窝里" loading="lazy">
          <div class="photo-info">藏在被窝里</div>
        </div>
        <div class="photo-card">
          <img src="{{ '/assets/photos/cat6.jpg' | relative_url }}" alt="等待晚餐的样子" loading="lazy">
          <div class="photo-info">等待晚餐的样子</div>
        </div>
      </div>
    </div>

    <!-- 随手拍 -->
    <div id="random" class="tab-pane">
      <div class="photo-grid">
        <div class="photo-card">
          <img src="{{ '/assets/photos/suishou1.jpg' | relative_url }}" alt="路边的光影" loading="lazy">
          <div class="photo-info">路边的光影</div>
        </div>
        <div class="photo-card">
          <img src="{{ '/assets/photos/suishou2.jpg' | relative_url }}" alt="旧墙上的涂鸦" loading="lazy">
          <div class="photo-info">旧墙上的涂鸦</div>
        </div>
        <div class="photo-card">
          <img src="{{ '/assets/photos/suishou3.jpg' | relative_url }}" alt="雨后的街道" loading="lazy">
          <div class="photo-info">雨后的街道</div>
        </div>
        <div class="photo-card">
          <img src="{{ '/assets/photos/suishou4.jpg' | relative_url }}" alt="书页之间的光" loading="lazy">
          <div class="photo-info">书页之间的光</div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- 图片放大层 -->
<div class="photo-modal" id="photoModal">
  <div class="modal-content">
    <img class="modal-image" src="" alt="">
    <div class="modal-info"></div>
    <button class="modal-close" aria-label="关闭">&times;</button>
  </div>
</div>

<style>
.photo-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* 导航样式优化 */
.photo-nav {
  margin: 2rem 0 3rem;
  position: relative;
}

.nav-container {
  position: relative;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  overflow-x: auto;
  padding: 0.5rem;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.nav-container::-webkit-scrollbar {
  display: none;
}

.nav-btn {
  padding: 0.75rem 1.5rem;
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  color: var(--text-muted);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;
  position: relative;
  z-index: 1;
}

.nav-btn:hover {
  color: var(--text-color);
  border-color: var(--primary-color);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.nav-btn.active {
  color: var(--text-color);
  font-weight: 600;
}

.nav-highlight {
  position: absolute;
  bottom: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
  border-radius: 1px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 2;
}

/* 标签内容切换动画 */
.tab-content {
  position: relative;
  min-height: 400px;
}

.tab-pane {
  display: none;
  animation: fadeInUp 0.4s ease-out;
}

.tab-pane.active {
  display: block;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 图片网格优化 */
.photo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  padding: 1rem 0;
}

.photo-card {
  background: var(--card-bg);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  border: 1px solid var(--border-color);
}

.photo-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.photo-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.photo-card:hover img {
  transform: scale(1.05);
}

.photo-info {
  padding: 1rem;
  font-size: 0.9rem;
  color: var(--text-color);
  text-align: center;
  background: var(--card-bg);
  border-top: 1px solid var(--border-color);
}

/* 图片放大模态框 */
.photo-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.92);
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.photo-modal.active {
  display: flex;
  opacity: 1;
  animation: modalFadeIn 0.3s ease;
}

@keyframes modalFadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.modal-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.modal-image {
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
}

.modal-info {
  color: white;
  margin-top: 1rem;
  font-size: 1rem;
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  backdrop-filter: blur(10px);
}

.modal-close {
  position: absolute;
  top: -40px;
  right: 0;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  font-size: 1.5rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.modal-close:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.1);
}

/* 响应式优化 */
@media (max-width: 768px) {
  .photo-container {
    padding: 0 0.5rem;
  }
  
  .nav-container {
    justify-content: flex-start;
    gap: 0.25rem;
  }
  
  .nav-btn {
    padding: 0.6rem 1rem;
    font-size: 0.85rem;
  }
  
  .photo-grid {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 1rem;
  }
  
  .photo-card img {
    height: 150px;
  }
  
  .photo-info {
    padding: 0.75rem;
    font-size: 0.85rem;
  }
  
  .modal-content {
    max-width: 95vw;
  }
  
  .modal-close {
    top: -50px;
    right: 50%;
    transform: translateX(50%);
  }
}

@media (max-width: 480px) {
  .photo-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
  }
  
  .photo-card img {
    height: 120px;
  }
  
  .nav-btn {
    padding: 0.5rem 0.75rem;
    font-size: 0.8rem;
  }
}
</style>

<script>
class PhotoGallery {
  constructor() {
    this.init();
  }

  init() {
    this.setupTabs();
    this.setupModal();
    this.setupKeyboardNavigation();
  }

  setupTabs() {
    const nav = document.querySelector('.photo-nav');
    const buttons = document.querySelectorAll('.nav-btn');
    const panes = document.querySelectorAll('.tab-pane');
    const highlight = document.querySelector('.nav-highlight');

    if (!buttons.length || !panes.length || !highlight) return;

    // 初始化高亮位置
    this.updateHighlight(buttons[0], highlight);

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const targetTab = button.dataset.tab;
        
        // 更新按钮状态
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // 更新内容区域
        panes.forEach(pane => pane.classList.remove('active'));
        const targetPane = document.getElementById(targetTab);
        if (targetPane) targetPane.classList.add('active');
        
        // 更新高亮位置
        this.updateHighlight(button, highlight);
      });
    });
  }

  updateHighlight(button, highlight) {
    const rect = button.getBoundingClientRect();
    const containerRect = button.parentElement.getBoundingClientRect();
    
    highlight.style.width = `${rect.width}px`;
    highlight.style.left = `${rect.left - containerRect.left}px`;
  }

  setupModal() {
    const modal = document.getElementById('photoModal');
    const modalImage = modal.querySelector('.modal-image');
    const modalInfo = modal.querySelector('.modal-info');
    const closeBtn = modal.querySelector('.modal-close');

    // 图片点击事件
    document.querySelectorAll('.photo-card').forEach(card => {
      card.addEventListener('click', () => {
        const img = card.querySelector('img');
        const info = card.querySelector('.photo-info');
        
        modalImage.src = img.src;
        modalImage.alt = img.alt;
        modalInfo.textContent = info.textContent;
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    // 关闭模态框
    const closeModal = () => {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    };

    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  setupKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
      const modal = document.getElementById('photoModal');
      if (!modal.classList.contains('active')) return;

      if (e.key === 'Escape') {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }
}

// 初始化相册
document.addEventListener('DOMContentLoaded', () => {
  new PhotoGallery();
});

// 窗口大小改变时重新计算高亮位置
window.addEventListener('resize', () => {
  const activeBtn = document.querySelector('.nav-btn.active');
  const highlight = document.querySelector('.nav-highlight');
  if (activeBtn && highlight) {
    const rect = activeBtn.getBoundingClientRect();
    const containerRect = activeBtn.parentElement.getBoundingClientRect();
    
    highlight.style.width = `${rect.width}px`;
    highlight.style.left = `${rect.left - containerRect.left}px`;
  }
});
</script>