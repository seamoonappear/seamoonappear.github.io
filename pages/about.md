---
layout: default
title: 关于
permalink: /pages/about/
icon: fas fa-info-circle
---
我是王维，现居杭州。我的兴趣爱好非常广泛，喜欢尝试和学习各种新鲜事物，也乐于结交来自各地的朋友。如果你有机会访问我的博客，看到一些有趣的内容或者想法，欢迎随时和我交流哦！如果你有任何问题或者想聊聊，可以直接加我微信：EastSea0，期待收到你的好友申请！
<div class="about-container">
  <div class="about-header">
    <div class="intro">
      <h1>王维</h1>
      <p>现居杭州｜40岁</p>
    </div>
  </div>

  <!-- 卡片内容 -->
  <div class="card-grid">

    <!-- 在职 -->
    <div class="card">
      <div class="card-icon">💼</div>
      <h3>在职</h3>
      <h4>北京同仁堂健康药业（青海）有限公司</h4>
      <p><strong>职位：</strong> 包装解决方案专员</p>
      <p><strong>主要职责：</strong> 为食品及健康产品企业提供全方位包装解决方案，熟悉包装材料、工艺与成本控制。</p>
    </div>
    
    <!-- 技能 -->
    <div class="card">
      <div class="card-icon">🚀</div>
      <h3>技能</h3>
      <ul>
        <li>平面设计：精通 Photoshop 与 Illustrator</li>
        <li>电商与营销：多年运营经验，熟悉平台策略</li>
        <li>电视购物策划：丰富节目策划与执行经验</li>
      </ul>
    </div>
    
    <!-- 爱好 -->
    <div class="card">
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
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.about-header .avatar:hover {
  transform: translateY(-6px) scale(1.04);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.2);
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
  background: #fff;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(15, 23, 42, 0.05);
  transition: all 0.3s ease;
  position: relative;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
}

.card-icon {
  font-size: 1.8rem;
  margin-bottom: 1rem;
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
}

.card ul li::before {
  content: "•";
  color: #4f46e5;
  font-weight: bold;
  position: absolute;
  left: 0.5rem;
  font-size: 1.2rem;
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

/* 响应式设计 */
@media (max-width: 768px) {
  .about-header {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .about-header .intro h1 {
    font-size: 1.8rem;
  }

  .about-header .intro p {
    font-size: 1rem;
  }

  .card-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .card {
    padding: 1.5rem;
  }

  .about-footer p {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .about-header .avatar {
    width: 100px;
    height: 100px;
  }

  .card {
    padding: 1.25rem;
  }

  .card h3 {
    font-size: 1.3rem;
  }
}
</style>
