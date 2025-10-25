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
    <img src="{{ '/assets/img/avatar.jpg' | relative_url }}" alt="王维的头像" class="avatar">
    <div class="intro">
      <h1>王维</h1>
      <p>现居杭州｜40岁</p>
    </div>
  </div>

  <!-- 卡片内容 -->
  <div class="card-grid">

    <!-- 在职 -->
    <div class="card">
      <h3>💼 在职</h3>
      <h4>北京同仁堂健康药业（青海）有限公司</h4>
      <p><strong>职位：</strong>包装解决方案专员</p>
      <p><strong>主要职责：</strong>为食品及健康产品企业提供全方位包装解决方案，熟悉包装材料、工艺与成本控制。</p>
    </div>

    <!-- 技能 -->
    <div class="card">
      <h3>🚀 技能</h3>
      <ul>
        <li>平面设计：精通 Photoshop 与 Illustrator</li>
        <li>电商与营销：多年运营经验，熟悉平台策略</li>
        <li>电视购物策划：丰富节目策划与执行经验</li>
      </ul>
    </div>

    <!-- 爱好 -->
    <div class="card">
      <h3>❤️ 爱好</h3>
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
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
  font-family: "Helvetica Neue", Arial, sans-serif;
  color: #333;
}

.about-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
}

.intro h1 {
  margin: 0;
  font-size: 1.8rem;
  font-weight: 600;
}

.intro p {
  margin: 0.3rem 0 0;
  color: #666;
  font-size: 1rem;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.2rem;
  margin-bottom: 2.5rem;
}

.card {
  background: #fafafa;
  border-radius: 12px;
  padding: 1.5rem;
  line-height: 1.7;
}

.card h3 {
  margin: 0 0 0.75rem;
  font-size: 1.2rem;
}

.card h4 {
  margin: 0 0 0.75rem;
  color: #555;
  font-weight: 500;
  font-size: 1rem;
}

.card p {
  margin: 0.4rem 0;
  color: #555;
}

.card ul {
  list-style: none;
  padding-left: 1rem;
  margin: 0;
}

.card ul li {
  position: relative;
  margin-bottom: 0.4rem;
}

.card ul li::before {
  content: "•";
  color: #4f46e5;
  position: absolute;
  left: -1rem;
}

.about-footer {
  text-align: center;
  margin-top: 2rem;
  font-size: 1rem;
  color: #555;
}

.about-footer strong {
  color: #4f46e5;
}

@media (max-width: 600px) {
  .avatar {
    width: 100px;
    height: 100px;
  }

  .intro h1 {
    font-size: 1.6rem;
  }

  .card {
    padding: 1.2rem;
  }
}
</style>
