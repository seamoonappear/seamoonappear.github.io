---
layout: page
title: 关于我
icon: fas fa-info-circle
order: 7
---

<style>
/* 顶部头像与简介 */
.about-header {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 32px;
  flex-wrap: wrap;
  justify-content: center;
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
.about-header .intro {
  text-align: center;
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

/* 标签导航样式 */
.about-nav {
  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 1.5rem;
  background: #f8f9fa;
  border-radius: 10px;
  padding: 8px;
}
.about-nav .nav-btn {
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  background: #fff;
  border: 1px solid #ddd;
  cursor: pointer;
  color: #555;
  transition: all 0.25s ease;
  font-size: 0.9rem;
}
.about-nav .nav-btn:hover { background: #eee; }
.about-nav .nav-btn.active {
  background: #000;
  color: #fff;
  border-color: #000;
  font-weight: 600;
}

/* 内容区 */
.tab-content { margin-bottom: 2rem; }
.tab-pane { display: none; }
.tab-pane.active { display: block; animation: fadeIn 0.25s ease-in; }
@keyframes fadeIn { from {opacity:0;} to {opacity:1;} }

/* 卡片样式 */
.card {
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  border: 1px solid rgba(15,23,42,0.05);
  margin-bottom: 18px;
}
.card h3 { margin: 0 0 10px 0; font-size: 1.1rem; display: flex; align-items: center; gap: 8px; }
.card ul { margin: 0; padding-left: 20px; list-style: none; }
.card ul li::before { content: "•"; color: #4f46e5; display: inline-block; width: 1em; margin-left: -1em; }

/* 响应式 */
@media (max-width: 760px) {
  .about-header { flex-direction: column; align-items: center; text-align: center; }
}
</style>

<!-- 头像与简介 -->
<div class="about-header">
  <img src="{{ '/assets/img/avatar.jpg' | relative_url }}" alt="王维头像" class="avatar">
  <div class="intro">
    <h1>王维</h1>
    <p>现居杭州 ｜ 终身学习</p>
  </div>
</div>

<!-- 标签导航 -->
<div class="about-nav">
  <button class="nav-btn active" data-tab="job">在职</button>
  <button class="nav-btn" data-tab="skills">技能</button>
  <button class="nav-btn" data-tab="hobby">爱好</button>
</div>

<!-- 内容区 -->
<div class="tab-content">
  <!-- 在职 -->
  <div id="job" class="tab-pane active">
    <div class="card">
      <h3>北京同仁堂健康药业（青海）有限公司</h3>
      <p><strong>职位：</strong> 包装解决方案专员</p>
      <p><strong>主要职责：</strong> 为食品及健康产品企业提供全方位包装解决方案，熟悉包装材料、工艺与成本控制。</p>
    </div>
  </div>

  <!-- 技能 -->
  <div id="skills" class="tab-pane">
    <div class="card">
      <ul>
        <li>平面设计：精通 Photoshop 与 Illustrator</li>
        <li>电商与营销：多年运营经验，熟悉平台策略</li>
        <li>电视购物策划：丰富节目策划与执行经验</li>
      </ul>
    </div>
  </div>

  <!-- 爱好 -->
  <div id="hobby" class="tab-pane">
    <div class="card">
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
</div>

<script>
document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll(".about-nav .nav-btn");
  const panes = document.querySelectorAll(".tab-pane");

  buttons.forEach(btn => {
    btn.addEventListener("click", function() {
      // 切换按钮状态
      buttons.forEach(b => b.classList.remove("active"));
      this.classList.add("active");
      // 切换内容
      panes.forEach(pane => {
        pane.classList.toggle("active", pane.id === this.dataset.tab);
      });
    });
  });
});
</script>

<p style="text-align:center;margin-top:2rem;color:#555;">
  我相信 <strong>设计、营销与包装</strong> 是企业价值的重要体现，  
  致力于用专业技能为每一个项目创造更大价值。
</p>