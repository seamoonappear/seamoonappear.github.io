---
layout: default
title: 关于
permalink: /pages/about/
icon: fas fa-info-circle
---

如果你有机会访问我的博客，看到一些有趣的内容或者想法，欢迎随时和我交流哦！我的微信：EastSea0，期待收到你的好友申请！

<div class="about-container">
  <div class="about-header">
    <!-- 头像部分 -->
    <img src="{{ '/assets/img/avatar.jpg' | relative_url }}" alt="王维头像" class="avatar">

    <!-- 简介部分 -->
    <div class="intro">
      <h1>王维</h1>
      <p>现居杭州｜40岁</p>
    </div>
  </div>

  <!-- 卡片内容 -->
  <div class="card-grid">

    <!-- 在职 -->
    <div class="card" data-color="#4f46e5">
      <div class="card-icon">💼</div>
      <h3>在职</h3>
      <h4>北京同仁堂健康药业（青海）有限公司</h4>
      <p><strong>职位：</strong> 包装解决方案专员</p>
      <p><strong>主要职责：</strong> 为食品及健康产品企业提供全方位包装解决方案，熟悉包装材料、工艺与成本控制。</p>
    </div>

    <!-- 爱好 -->
    <div class="card" data-color="#e11d48">
      <div class="card-icon">❤️</div>
      <h3>爱好</h3>
      <ul>
        <li>阅读与写作</li>
        <li>旅行与摄影</li>
        <li>书法与艺术鉴赏</li>
        <li>音乐欣赏</li>
        <li>烹饪与美食探索</li>
        <li>新技术学习</li>
      </ul>
    </div>

  </div>

  <!-- 分隔条 -->
  <div class="footer-divider">
    <div class="divider-bar"></div>
  </div>

  <div class="about-footer">
    <p>我相信 <strong>设计、营销与包装</strong> 是企业价值的重要体现，致力于用专业技能为每一个项目创造更大价值。</p>
  </div>
</div>

<style>
.about-container {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 1rem;
}

.about-header {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 3rem;
  padding: 2rem 0;
}

.about-header .avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease, filter 0.3s ease;
}

.about-header .avatar:hover {
  transform: translateY(-6px) scale(1.05) rotate(-2deg);
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.25);
  filter: brightness(1.1);
}

.about-header .intro {
  text-align: center;
}

.about-header .intro h1 {
  margin: 0 0 0.5rem;
  font-size: 2.2rem;
  font-weight: 700;
  color: #1f2937;
}

.about-header .intro p {
  margin: 0;
  color: #6b7280;
  font-size: 1.1rem;
  line-height: 1.6;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.card {
  background: linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%);
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(15, 23, 42, 0.05);
  transition: all 0.3s ease, transform 0.4s ease;
  position: relative;
}

.card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 18px 36px rgba(0, 0, 0, 0.18);
  border-color: #4f46e5;
}

.card-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
  transition: transform 0.3s ease, color 0.3s ease;
}

.card:hover .card-icon {
  transform: scale(1.3) rotate(10deg);
  color: #4f46e5;
}

.card h3 {
  margin: 0 0 1rem;
  font-size: 1.4rem;
  font-weight: 600;
  color: #1f2937;
}

.card h4 {
  margin: 0 0 0.75rem;
  font-size: 1.1rem;
  color: #4b5563;
  font-weight: 500;
}

.card p {
  margin: 0.5rem 0;
  color: #4b5563;
  line-height: 1.6;
}

.card ul {
  margin: 0;
  padding-left: 0;
  list-style: none;
}

.card ul li {
  position: relative;
  padding: 0.4rem 0 0.4rem 1.5rem;
  color: #4b5563;
  line-height: 1.5;
  transition: color 0.3s ease;
}

.card ul li::before {
  content: "•";
  color: #4f46e5;
  font-weight: bold;
  position: absolute;
  left: 0.5rem;
  font-size: 1.2rem;
}

.card ul li:hover {
  color: #4f46e5;
}

.about-footer {
  text-align: center;
  margin: 3rem 0 2rem;
  padding: 2rem 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.about-footer p {
  margin: 0;
  color: #555;
  font-size: 1.1rem;
  line-height: 1.7;
}

.about-footer strong {
  color: #4f46e5;
}

/* 分隔条 + 粒子效果 */
.footer-divider {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
  position: relative;
  overflow: hidden;
}

.divider-bar {
  width: 60%;
  height: 4px;
  border-radius: 2px;
  background: linear-gradient(270deg, #4f46e5, #8b5cf6, #4f46e5);
  background-size: 600% 600%;
  animation: gradientMove 4s ease infinite;
  transition: background 0.5s ease, transform 0.3s ease;
  position: relative;
  z-index: 1;
}

.divider-bar::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -10%;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 20px 0 0 rgba(255,255,255,0.5), 40px 0 0 rgba(255,255,255,0.3), 60px 0 0 rgba(255,255,255,0.5);
  animation: particleMove 2s linear infinite;
  z-index: 2;
}

@keyframes gradientMove {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes particleMove {
  0% { transform: translateX(0); }
  100% { transform: translateX(100%); }
}

/* 响应式 */
@media (max-width: 768px) { 
  .about-header .intro h1 { font-size: 1.8rem; }
  .about-header .intro p { font-size: 1rem; }
  .card-grid { grid-template-columns: 1fr; gap: 1rem; }
  .card { padding: 1.5rem; }
  .about-footer p { font-size: 1rem; }
  .divider-bar { width: 80%; }
}

@media (max-width: 480px) { 
  .about-header .avatar { width: 100px; height: 100px; }
  .card { padding: 1.25rem; }
  .card h3 { font-size: 1.3rem; }
  .divider-bar { width: 90%; }
}
</style>

<script>
const divider = document.querySelector('.divider-bar');
const defaultGradient = 'linear-gradient(270deg, #4f46e5, #8b5cf6, #4f46e5)';
const avatar = document.querySelector('.about-header .avatar');
const cards = document.querySelectorAll('.card');

// 头像悬停 → 多彩渐变
avatar.addEventListener('mouseenter', () => {
  divider.style.background = 'linear-gradient(270deg, #ff6b6b, #facc15, #4ade80, #4f46e5)';
  divider.style.animationDuration = '1.5s';
  divider.style.transform = 'scaleX(1.05)';
});

avatar.addEventListener('mouseleave', () => {
  divider.style.background = defaultGradient;
  divider.style.animationDuration = '4s';
  divider.style.transform = 'scaleX(1)';
});

// 卡片悬停 → 卡片主题色渐变
cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    const color = card.dataset.color || '#4f46e5';
    divider.style.background = `linear-gradient(270deg, ${color}, ${color}80, ${color})`;
    divider.style.animationDuration = '2s';
    divider.style.transform = 'scaleX(1.05)';
  });
  card.addEventListener('mouseleave', () => {
    divider.style.background = defaultGradient;
    divider.style.animationDuration = '4s';
    divider.style.transform = 'scaleX(1)';
  });
});
</script>