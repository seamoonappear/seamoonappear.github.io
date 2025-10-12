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

/* 标签导航 */
.about-nav {
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  overflow-x: auto;
  white-space: nowrap;
  background: #f8f9fa;
  border-radius: 8px;
  padding: 8px;
}
.nav-btn {
  padding: 0.6rem 1.2rem;
  margin: 0 0.25rem;
  background: white;
  border: 1px solid #e0e0e0;
  cursor: pointer;
  font-size: 0.9rem;
  color: #666;
  border-radius: 6px;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
}
.nav-btn:hover { background: #f3f3f3; color: #111; }
.nav-btn.active { color: #000; font-weight: 600; }
.nav-highlight {
  position: absolute;
  bottom: 5px;
  height: 3px;
  background: linear-gradient(90deg, #000, #444);
  border-radius: 2px;
  transition: all 0.3s ease;
  z-index: 0;
}

/* 内容区 */
.tab-content { margin-bottom: 2rem; }
.tab-pane { display: none; animation: fadeIn 0.3s ease; }
.tab-pane.active { display: block; }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

/* 卡片样式 */
.card {
  background: #ffffff;
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
  .card { width: 100%; }
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

<!-- 标签导航 -->
<div class="about-nav">
  <div class="nav-highlight"></div>
  <button class="nav-btn active" data-tab="info">个人信息</button>
  <button class="nav-btn" data-tab="experience">经历</button>
  <button class="nav-btn" data-tab="skills">技能</button>
  <button class="nav-btn" data-tab="hobby">爱好</button>
</div>

<!-- 标签内容 -->
<div class="tab-content">

  <!-- 个人信息 -->
  <div id="info" class="tab-pane active">
    <div class="card">
      <ul>
        <li><strong>姓名：</strong> 王维</li>
        <li><strong>故乡：</strong> 连云港</li>
        <li><strong>现居：</strong> 杭州</li>
        <li><strong>目标：</strong> 终身学习</li>
      </ul>
    </div>
  </div>

  <!-- 经历 -->
  <div id="experience" class="tab-pane">
    <div class="card">
      <h3>北京同仁堂健康药业（青海）有限公司</h3>
      <p><strong>职位：</strong> 包装解决方案专员</p>
      <p><strong>主要职责：</strong> 为食品及健康产品企业提供全方位包装解决方案，熟悉包装材料、工艺与成本控制。</p>
    </div>
    <!-- 可复制添加更多经历 -->
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
  const nav = document.querySelector(".about-nav");
  const highlight = nav.querySelector(".nav-highlight");
  const tabPanes = document.querySelectorAll(".tab-pane");
  const buttons = nav.querySelectorAll(".nav-btn");

  function updateHighlight(button) {
    const rect = button.getBoundingClientRect();
    const navRect = nav.getBoundingClientRect();
    highlight.style.width = rect.width + "px";
    highlight.style.left = (rect.left - navRect.left + nav.scrollLeft) + "px";
  }

  function activateTab(button) {
    const target = button.dataset.tab;
    buttons.forEach(b => b.classList.remove("active"));
    button.classList.add("active");
    tabPanes.forEach(p => p.classList.toggle("active", p.id === target));
    updateHighlight(button);
  }

  buttons.forEach(btn => btn.addEventListener("click", () => activateTab(btn)));

  // 初始化高亮条位置
  const activeBtn = nav.querySelector(".nav-btn.active") || buttons[0];
  if (activeBtn) activateTab(activeBtn);
});
</script>