---
layout: page
title: 关于我
icon: fas fa-info-circle
order: 7
---

<style>
/* 头像与简介 */
.about-header {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 32px;
  flex-wrap: wrap;
}

.about-header .avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 2px 10px rgba(0,0,0,0.12);
  transition: transform .28s ease, box-shadow .28s ease;
}

.about-header .avatar:hover {
  transform: translateY(-6px) scale(1.04);
  box-shadow: 0 8px 26px rgba(0,0,0,0.18);
}

.about-header .intro h1 {
  margin: 0 0 6px 0;
  font-size: 2rem;
  font-weight: 700;
}

.about-header .intro p {
  margin: 0;
  color: #4b5563;
  line-height: 1.6;
}

/* 三栏卡片 */
.three-columns {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  margin-bottom: 32px;
}

.card {
  flex: 1 1 260px;
  min-width: 220px;
  background: #ffffff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  border: 1px solid rgba(15,23,42,0.05);
  transition: transform .3s ease, box-shadow .3s ease;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.12);
}

.card h3 {
  margin: 0 0 10px 0;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 8px;
}

/* 列表样式 */
.card ul {
  margin: 0;
  padding-left: 20px;
  list-style: none;
}

.card ul li::before {
  content: "•";
  color: #4f46e5;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
}

/* 响应式 */
@media (max-width: 760px) {
  .about-header {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .three-columns {
    flex-direction: column;
  }
  .card {
    width: 100%;
  }
}
</style>

<!-- 头像与简介 -->
<div class="about-header">
  <img src="{{ '/assets/img/avatar.jpg' | relative_url }}" alt="王维头像" class="avatar">
  <div class="intro">
    <h1>王维</h1>
    <p>故乡连云港 | 现居杭州 | 终身学习者</p>
  </div>
</div>

---

## 🗂 个人信息与专业技能

<div class="three-columns">

  <div class="card">
    <h3>📌 个人信息</h3>
    <ul>
      <li><strong>姓名：</strong> 王维</li>
      <li><strong>故乡：</strong> 连云港</li>
      <li><strong>现居：</strong> 杭州</li>
      <li><strong>目标：</strong> 终身学习</li>
    </ul>
  </div>

  <div class="card">
    <h3>🎯 专业技能</h3>
    <ul>
      <li>平面设计：精通 Photoshop 与 Illustrator</li>
      <li>电商与营销：多年运营经验，熟悉平台策略</li>
      <li>电视购物策划：丰富节目策划与执行经验</li>
    </ul>
  </div>

  <div class="card">
    <h3>🎨 爱好</h3>
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

---

## 💼 工作经历

<div class="three-columns">

  <div class="card">
    <h3>北京同仁堂健康药业（青海）有限公司</h3>
    <p><strong>职位：</strong> 包装解决方案专员</p>
    <p><strong>主要职责：</strong> 为食品及健康产品企业提供全方位包装解决方案，熟悉包装材料、工艺与成本控制。</p>
  </div>

  <!-- 可复制以下 card 添加更多经历 -->
  <!--
  <div class="card">
    <h3>公司名称</h3>
    <p><strong>职位：</strong> 职位名称</p>
    <p><strong>主要职责：</strong> 工作内容描述</p>
  </div>
  -->

</div>

---

我相信 **设计、营销与包装** 是企业价值的重要体现，致力于用专业技能为每一个项目创造更大价值。