---
title: "关于我"
permalink: /about/
about_page: true
---

<style>
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
  font-size: 1.8rem;
}

.about-header .intro p {
  margin: 0 0 6px 0;
  color: #4b5563;
  line-height: 1.6;
}

.three-columns {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  margin-bottom: 32px;
}

.three-columns .card {
  flex: 1 1 260px;
  min-width: 220px;
  background: #ffffff;
  padding: 18px;
  border-radius: 10px;
  box-shadow: 0 1px 8px rgba(0,0,0,0.06);
  transition: transform .28s ease, box-shadow .28s ease;
  border: 1px solid rgba(15,23,42,0.03);
}

.three-columns .card h3 {
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 1.05rem;
}

.three-columns .card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.12);
}

@media (max-width: 760px) {
  .about-header {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .three-columns {
    flex-direction: column;
  }
  .three-columns .card {
    width: 100%;
  }
}
</style>

# 关于我

<div class="about-header">
  <img src="{{ '/assets/img/avatar.jpg' | relative_url }}" alt="王维头像" class="avatar">
  <div class="intro">
    <h1>王维</h1>
  </div>
</div>

---

<h2>🗂 个人信息与专业技能</h2>

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
      <li><strong>平面设计：</strong> 精通 Ps 与 Ai，能独立完成视觉与包装设计</li>
      <li><strong>电商与营销：</strong> 多年电商运营经验，熟悉平台策略</li>
      <li><strong>电视购物：</strong> 有丰富节目策划与执行经验</li>
    </ul>
  </div>

  <div class="card">
    <h3>🎨 爱好</h3>
    <ul>
      <li>阅读与写作</li>
      <li>旅行与摄影</li>
      <li>书法和鉴赏</li>
      <li>音乐欣赏</li>
      <li>烹饪与美食探索</li>
      <li>新技术与设计趋势学习</li>
    </ul>
  </div>
</div>

---

<h2>💼 工作经历</h2>

<table>
  <tr>
    <th>公司</th>
    <th>职位</th>
    <th>主要职责</th>
  </tr>
  <tr>
    <td>北京同仁堂健康药业（青海）有限公司</td>
    <td>包装解决方案专员</td>
    <td>为食品及健康产品企业提供全方位包装解决方案，熟悉包装材料、工艺与成本控制</td>
  </tr>
</table>

---

<p>我相信 <strong>设计、营销与包装</strong> 是企业价值的重要体现，致力于用专业技能为每一个项目创造更大价值。</p>