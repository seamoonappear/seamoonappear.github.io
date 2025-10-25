---
layout: page
title: 关于
icon: fas fa-user
order: 8
sidebar: ture
permalink: /about/
---

<div class="about-container">
  <!-- 头像与简介 -->
  <div class="about-header">
    <div class="avatar-container">
      <img src="{{ '/assets/img/avatar.jpg' | relative_url }}" alt="王维的头像" class="avatar" width="120" height="120">
      <div class="avatar-decoration"></div>
    </div>
    <div class="intro">
      <h1>王维</h1>
      <p class="location">现居杭州｜40岁</p>
      <div class="social-links">
        <a href="#" class="social-link" aria-label="邮箱">
          <i class="fas fa-envelope"></i>
        </a>
        <a href="#" class="social-link" aria-label="领英">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="#" class="social-link" aria-label="微信">
          <i class="fab fa-weixin"></i>
        </a>
      </div>
    </div>
  </div>

  <!-- 专业简介 -->
  <div class="professional-summary">
    <p>拥有<span class="highlight">15年+</span>包装设计与营销策划经验，专注于为食品及健康产品企业提供<span class="highlight">创新包装解决方案</span>，擅长结合市场趋势与品牌价值，创造兼具美学与功能性的包装设计。</p>
  </div>

  <!-- 卡片内容 -->
  <div class="card-grid">
    <!-- 在职 -->
    <div class="card">
      <div class="card-icon">
        <i class="fas fa-briefcase"></i>
      </div>
      <h3>职业经历</h3>
      <div class="company-info">
        <h4>北京同仁堂健康药业（青海）有限公司</h4>
        <p class="position">包装解决方案专员</p>
      </div>
      <ul class="responsibilities">
        <li>为食品及健康产品企业提供全方位包装解决方案</li>
        <li>熟悉各类包装材料特性与生产工艺</li>
        <li>精通成本控制与供应链管理</li>
        <li>协调设计、生产与市场部门确保项目落地</li>
      </ul>
    </div>

    <!-- 技能 -->
    <div class="card">
      <div class="card-icon">
        <i class="fas fa-tools"></i>
      </div>
      <h3>专业技能</h3>
      <div class="skills-container">
        <div class="skill-category">
          <h4>设计技能</h4>
          <div class="skill-tags">
            <span class="skill-tag">Photoshop</span>
            <span class="skill-tag">Illustrator</span>
            <span class="skill-tag">包装结构设计</span>
            <span class="skill-tag">品牌视觉设计</span>
          </div>
        </div>
        <div class="skill-category">
          <h4>营销与策划</h4>
          <div class="skill-tags">
            <span class="skill-tag">电商运营</span>
            <span class="skill-tag">电视购物策划</span>
            <span class="skill-tag">市场分析</span>
            <span class="skill-tag">品牌策略</span>
          </div>
        </div>
        <div class="skill-category">
          <h4>行业知识</h4>
          <div class="skill-tags">
            <span class="skill-tag">包装材料</span>
            <span class="skill-tag">生产工艺</span>
            <span class="skill-tag">成本控制</span>
            <span class="skill-tag">供应链管理</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 爱好 -->
    <div class="card">
      <div class="card-icon">
        <i class="fas fa-heart"></i>
      </div>
      <h3>个人兴趣</h3>
      <div class="hobbies-grid">
        <div class="hobby-item">
          <i class="fas fa-book"></i>
          <span>阅读与写作</span>
        </div>
        <div class="hobby-item">
          <i class="fas fa-camera"></i>
          <span>旅行摄影</span>
        </div>
        <div class="hobby-item">
          <i class="fas fa-paint-brush"></i>
          <span>书法艺术</span>
        </div>
        <div class="hobby-item">
          <i class="fas fa-music"></i>
          <span>音乐欣赏</span>
        </div>
        <div class="hobby-item">
          <i class="fas fa-utensils"></i>
          <span>美食探索</span>
        </div>
        <div class="hobby-item">
          <i class="fas fa-laptop-code"></i>
          <span>新技术学习</span>
        </div>
      </div>
    </div>
  </div>

  <!-- 职业理念 -->
  <div class="philosophy-section">
    <h2>职业理念</h2>
    <div class="philosophy-content">
      <div class="philosophy-item">
        <i class="fas fa-lightbulb"></i>
        <h4>创新思维</h4>
        <p>在传统包装基础上融入创新元素，平衡美学与功能性</p>
      </div>
      <div class="philosophy-item">
        <i class="fas fa-chart-line"></i>
        <h4>价值导向</h4>
        <p>关注包装对品牌价值和市场表现的实际影响</p>
      </div>
      <div class="philosophy-item">
        <i class="fas fa-recycle"></i>
        <h4>可持续性</h4>
        <p>注重环保材料与可持续包装解决方案</p>
      </div>
    </div>
  </div>

  <!-- 页脚 -->
  <div class="about-footer">
    <p>我相信<strong>设计、营销与包装</strong>是企业价值的重要体现，致力于用专业技能为每一个项目创造更大价值。</p>
    <a href="#contact" class="cta-button">与我联系</a>
  </div>
</div>

<style>
:root {
  --primary-color: #4f46e5;
  --primary-light: #6366f1;
  --primary-dark: #4338ca;
  --text-dark: #1f2937;
  --text-light: #6b7280;
  --text-lighter: #9ca3af;
  --bg-light: #f9fafb;
  --bg-white: #ffffff;
  --border-color: #e5e7eb;
  --shadow-light: 0 4px 16px rgba(0, 0, 0, 0.08);
  --shadow-medium: 0 8px 24px rgba(0, 0, 0, 0.12);
  --shadow-hover: 0 12px 32px rgba(0, 0, 0, 0.15);
  --border-radius: 16px;
  --transition: all 0.3s ease;
}

.about-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* 头部区域 */
.about-header {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  margin-bottom: 3rem;
  padding: 3rem 0;
  position: relative;
}

.avatar-container {
  position: relative;
  width: 140px;
  height: 140px;
}

.avatar {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: var(--shadow-medium);
  position: relative;
  z-index: 2;
  transition: var(--transition);
}

.avatar-decoration {
  position: absolute;
  top: -8px;
  left: -8px;
  right: -8px;
  bottom: -8px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-color), var(--primary-light));
  opacity: 0.2;
  z-index: 1;
  animation: pulse 3s infinite ease-in-out;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 0.2; }
  50% { transform: scale(1.05); opacity: 0.3; }
}

.avatar:hover {
  transform: translateY(-6px) scale(1.04);
  box-shadow: var(--shadow-hover);
}

.intro {
  text-align: center;
  max-width: 500px;
}

.intro h1 {
  margin: 0 0 0.5rem;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-dark);
  background: linear-gradient(135deg, var(--primary-dark), var(--primary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.tagline {
  font-size: 1.3rem;
  color: var(--primary-color);
  font-weight: 500;
  margin: 0 0 0.5rem;
}

.location {
  margin: 0 0 1.5rem;
  color: var(--text-light);
  font-size: 1.1rem;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--bg-light);
  color: var(--text-light);
  transition: var(--transition);
}

.social-link:hover {
  background-color: var(--primary-color);
  color: white;
  transform: translateY(-3px);
}

/* 专业简介 */
.professional-summary {
  background: var(--bg-light);
  padding: 2rem;
  border-radius: var(--border-radius);
  margin-bottom: 3rem;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.professional-summary::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: linear-gradient(to bottom, var(--primary-color), var(--primary-light));
}

.professional-summary p {
  margin: 0;
  font-size: 1.15rem;
  line-height: 1.7;
  color: var(--text-dark);
}

.highlight {
  color: var(--primary-color);
  font-weight: 600;
}

/* 卡片网格 */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.card {
  background: var(--bg-white);
  padding: 2.5rem 2rem;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-light);
  border: 1px solid var(--border-color);
  transition: var(--transition);
  position: relative;
  overflow: hidden;
}

.card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(to right, var(--primary-color), var(--primary-light));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.5s ease;
}

.card:hover::before {
  transform: scaleX(1);
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-hover);
}

.card-icon {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: rgba(79, 70, 229, 0.1);
}

.card h3 {
  margin: 0 0 1.5rem;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-dark);
  position: relative;
  padding-bottom: 0.75rem;
}

.card h3::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 3px;
  background: var(--primary-color);
  border-radius: 2px;
}

.company-info h4 {
  margin: 0 0 0.5rem;
  font-size: 1.2rem;
  color: var(--text-dark);
  font-weight: 600;
}

.position {
  color: var(--primary-color);
  font-weight: 500;
  margin: 0 0 0.25rem;
}

.duration {
  color: var(--text-light);
  font-size: 0.9rem;
  margin: 0 0 1.5rem;
}

.responsibilities {
  margin: 0;
  padding-left: 0;
  list-style: none;
}

.responsibilities li {
  position: relative;
  padding: 0.5rem 0 0.5rem 1.5rem;
  color: var(--text-dark);
  line-height: 1.5;
}

.responsibilities li::before {
  content: "▸";
  color: var(--primary-color);
  font-weight: bold;
  position: absolute;
  left: 0;
}

/* 技能部分 */
.skills-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.skill-category h4 {
  margin: 0 0 0.75rem;
  font-size: 1.1rem;
  color: var(--text-dark);
  font-weight: 500;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  background: var(--bg-light);
  color: var(--text-dark);
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  border: 1px solid var(--border-color);
  transition: var(--transition);
}

.skill-tag:hover {
  background: var(--primary-color);
  color: white;
  transform: translateY(-2px);
}

/* 爱好部分 */
.hobbies-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.hobby-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  border-radius: 8px;
  background: var(--bg-light);
  transition: var(--transition);
}

.hobby-item:hover {
  background: rgba(79, 70, 229, 0.1);
  transform: translateY(-3px);
}

.hobby-item i {
  color: var(--primary-color);
  width: 20px;
  text-align: center;
}

.hobby-item span {
  color: var(--text-dark);
  font-size: 0.95rem;
}

/* 职业理念部分 */
.philosophy-section {
  margin-bottom: 4rem;
}

.philosophy-section h2 {
  text-align: center;
  margin-bottom: 2.5rem;
  font-size: 2rem;
  color: var(--text-dark);
  position: relative;
  padding-bottom: 1rem;
}

.philosophy-section h2::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(to right, var(--primary-color), var(--primary-light));
  border-radius: 2px;
}

.philosophy-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.philosophy-item {
  text-align: center;
  padding: 2rem 1.5rem;
  border-radius: var(--border-radius);
  background: var(--bg-white);
  box-shadow: var(--shadow-light);
  transition: var(--transition);
}

.philosophy-item:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-medium);
}

.philosophy-item i {
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  display: block;
}

.philosophy-item h4 {
  margin: 0 0 1rem;
  font-size: 1.3rem;
  color: var(--text-dark);
}

.philosophy-item p {
  margin: 0;
  color: var(--text-light);
  line-height: 1.6;
}

/* 页脚 */
.about-footer {
  text-align: center;
  margin: 4rem 0 2rem;
  padding: 3rem 0 2rem;
  border-top: 1px solid var(--border-color);
}

.about-footer p {
  margin: 0 0 2rem;
  color: var(--text-dark);
  font-size: 1.2rem;
  line-height: 1.7;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.about-footer strong {
  color: var(--primary-color);
}

.cta-button {
  display: inline-block;
  background: linear-gradient(135deg, var(--primary-color), var(--primary-light));
  color: white;
  padding: 0.9rem 2rem;
  border-radius: 30px;
  font-weight: 500;
  text-decoration: none;
  transition: var(--transition);
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(79, 70, 229, 0.4);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .about-header {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
    margin-bottom: 2rem;
    padding: 2rem 0;
  }
  
  .intro h1 {
    font-size: 2rem;
  }
  
  .tagline {
    font-size: 1.2rem;
  }
  
  .card-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .card {
    padding: 2rem 1.5rem;
  }
  
  .hobbies-grid {
    grid-template-columns: 1fr;
  }
  
  .philosophy-content {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .about-footer p {
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .avatar-container {
    width: 120px;
    height: 120px;
  }
  
  .card {
    padding: 1.5rem 1.25rem;
  }
  
  .card h3 {
    font-size: 1.3rem;
  }
  
  .professional-summary {
    padding: 1.5rem;
  }
  
  .professional-summary p {
    font-size: 1rem;
  }
}
</style>

<script>
// 添加滚动动画效果
document.addEventListener('DOMContentLoaded', function() {
  // 观察元素进入视口时添加动画类
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);
  
  // 观察所有卡片和理念项
  document.querySelectorAll('.card, .philosophy-item').forEach(el => {
    observer.observe(el);
  });
  
  // 添加CSS动画类
  const style = document.createElement('style');
  style.textContent = `
    .card, .philosophy-item {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .card.animate-in, .philosophy-item.animate-in {
      opacity: 1;
      transform: translateY(0);
    }
    
    .card:nth-child(1) { transition-delay: 0.1s; }
    .card:nth-child(2) { transition-delay: 0.2s; }
    .card:nth-child(3) { transition-delay: 0.3s; }
    .philosophy-item:nth-child(1) { transition-delay: 0.1s; }
    .philosophy-item:nth-child(2) { transition-delay: 0.2s; }
    .philosophy-item:nth-child(3) { transition-delay: 0.3s; }
  `;
  document.head.appendChild(style);
});
</script>
