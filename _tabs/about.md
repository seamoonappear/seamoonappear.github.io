---
layout: page
title: 关于我
permalink: /about/
icon: fas fa-info-circle
order: 7
---

<div class="about-container">
  <!-- 头像与简介 -->
  <div class="about-header">
    <img src="{{ '/assets/img/avatar.jpg' | relative_url }}" alt="王维头像" class="avatar">
    <div class="intro">
      <h1>王维</h1>
      <p>现居杭州 ｜ 终身学习</p>
    </div>
  </div>

  <!-- 卡片内容 -->
  <div class="card-grid">

    <!-- 在职 -->
    <div class="card">
      <h3>在职</h3>
      <h4>北京同仁堂健康药业（青海）有限公司</h4>
      <p><strong>职位：</strong> 包装解决方案专员</p>
      <p><strong>主要职责：</strong> 为食品及健康产品企业提供全方位包装解决方案，熟悉包装材料、工艺与成本控制。</p>
    </div>

    <!-- 技能 -->
    <div class="card">
      <h3>技能</h3>
      <ul>
        <li>平面设计：精通 Photoshop 与 Illustrator</li>
        <li>电商与营销：多年运营经验，熟悉平台策略</li>
        <li>电视购物策划：丰富节目策划与执行经验</li>
      </ul>
    </div>

    <!-- 爱好 -->
    <div class="card">
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

  <p style="text-align:center;margin-top:2rem;color:#555;">
    我相信 <strong>设计、营销与包装</strong> 是企业价值的重要体现，致力于用专业技能为每一个项目创造更大价值。
  </p>
</div>

<style>
.about-container { max-width: 960px; margin:0 auto; }

.about-header {
  display:flex; flex-wrap:wrap; justify-content:center; align-items:center; gap:20px; margin-bottom:32px;
}
.about-header .avatar {
  width:120px; height:120px; border-radius:50%; object-fit:cover;
  box-shadow:0 2px 10px rgba(0,0,0,0.12);
  transition: transform .28s ease, box-shadow .28s ease;
}
.about-header .avatar:hover { transform: translateY(-6px) scale(1.04); box-shadow:0 8px 26px rgba(0,0,0,0.18); }
.about-header .intro { text-align:center; }
.about-header .intro h1 { margin:0 0 6px; font-size:2rem; font-weight:700; }
.about-header .intro p { margin:0; color:#4b5563; line-height:1.6; }

.card-grid {
  display:grid; grid-template-columns: repeat(auto-fill,minmax(260px,1fr)); gap:20px; margin-bottom:32px;
}
.card {
  background:#fff; padding:20px; border-radius:12px; box-shadow:0 2px 12px rgba(0,0,0,0.08);
  border:1px solid rgba(15,23,42,0.05); transition: transform .3s ease, box-shadow .3s ease;
}
.card:hover { transform:translateY(-4px); box-shadow:0 8px 24px rgba(0,0,0,0.12); }
.card h3 { margin:0 0 12px; font-size:1.2rem; }
.card h4 { margin:0 0 8px; font-size:1rem; color:#4b5563; }
.card ul { margin:0; padding-left:20px; list-style:none; }
.card ul li::before { content:"•"; color:#4f46e5; display:inline-block; width:1em; margin-left:-1em; }

@media(max-width:760px){
  .about-header { flex-direction:column; text-align:center; }
  .card-grid { grid-template-columns:1fr; }
}
</style>