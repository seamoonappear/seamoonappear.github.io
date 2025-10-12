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

  <!-- 标签导航 -->
  <div class="about-nav">
    <div class="nav-highlight"></div>
    <button class="nav-btn active" data-tab="job">在职</button>
    <button class="nav-btn" data-tab="skills">技能</button>
    <button class="nav-btn" data-tab="hobby">爱好</button>
  </div>

  <!-- 内容区 -->
  <div class="tab-content">
    <div class="tab-pane active" data-tab="job">
      <div class="card">
        <h3>北京同仁堂健康药业（青海）有限公司</h3>
        <p><strong>职位：</strong> 包装解决方案专员</p>
        <p><strong>主要职责：</strong> 为食品及健康产品企业提供全方位包装解决方案，熟悉包装材料、工艺与成本控制。</p>
      </div>
    </div>

    <div class="tab-pane" data-tab="skills">
      <div class="card">
        <ul>
          <li>平面设计：精通 Photoshop 与 Illustrator</li>
          <li>电商与营销：多年运营经验，熟悉平台策略</li>
          <li>电视购物策划：丰富节目策划与执行经验</li>
        </ul>
      </div>
    </div>

    <div class="tab-pane" data-tab="hobby">
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

  <p style="text-align:center;margin-top:2rem;color:#555;">
    我相信 <strong>设计、营销与包装</strong> 是企业价值的重要体现，致力于用专业技能为每一个项目创造更大价值。
  </p>
</div>

<style>
.about-container { max-width: 960px; margin: 0 auto; }
.about-header {
  display: flex; flex-wrap: wrap; justify-content: center; align-items: center; gap:20px; margin-bottom:32px;
}
.about-header .avatar {
  width: 120px; height: 120px; border-radius:50%; object-fit:cover;
  box-shadow:0 2px 10px rgba(0,0,0,0.12);
  transition: transform .28s ease, box-shadow .28s ease;
}
.about-header .avatar:hover {
  transform: translateY(-6px) scale(1.04);
  box-shadow:0 8px 26px rgba(0,0,0,0.18);
}
.about-header .intro { text-align:center; }
.about-header .intro h1 { margin:0 0 6px; font-size:2rem; font-weight:700; }
.about-header .intro p { margin:0; color:#4b5563; line-height:1.6; }

.about-nav {
  display:flex; justify-content:center; gap:8px; position:relative;
  background:#f8f9fa; border-radius:10px; padding:8px; overflow-x:auto; white-space:nowrap; margin-bottom:1.5rem;
}
.about-nav .nav-btn {
  padding:0.6rem 1.2rem; border-radius:8px; background:#fff; border:1px solid #ddd;
  cursor:pointer; color:#555; font-size:0.9rem; transition: all 0.25s ease; position:relative; z-index:1;
}
.about-nav .nav-btn.active { font-weight:600; color:#000; }
.about-nav .nav-highlight {
  position:absolute; bottom:4px; height:3px; background:linear-gradient(90deg,#000,#444);
  border-radius:2px; transition:all 0.3s ease; z-index:0;
}

.tab-content .tab-pane { display:none; animation: fadeIn .25s ease-in; }
.tab-content .tab-pane.active { display:block; }
@keyframes fadeIn { from {opacity:0;} to {opacity:1;} }

.card { background:#fff; padding:20px; border-radius:12px; box-shadow:0 2px 12px rgba(0,0,0,0.08); border:1px solid rgba(15,23,42,0.05); margin-bottom:18px; }
.card h3 { margin:0 0 10px; font-size:1.1rem; display:flex; align-items:center; gap:8px; }
.card ul { margin:0; padding-left:20px; list-style:none; }
.card ul li::before { content:"•"; color:#4f46e5; display:inline-block; width:1em; margin-left:-1em; }

@media (max-width:760px) {
  .about-header { flex-direction:column; text-align:center; }
}
</style>

<script>
document.addEventListener("DOMContentLoaded", function() {
  const container = document.querySelector(".about-container");
  const nav = container.querySelector(".about-nav");
  const highlight = nav.querySelector(".nav-highlight");
  const buttons = nav.querySelectorAll(".nav-btn");
  const panes = container.querySelectorAll(".tab-pane");

  function activate(btn) {
    const target = btn.dataset.tab;
    buttons.forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    panes.forEach(p=>p.classList.toggle("active", p.dataset.tab === target));

    const rect = btn.getBoundingClientRect();
    const navRect = nav.getBoundingClientRect();
    highlight.style.width = rect.width+"px";
    highlight.style.left = (rect.left - navRect.left + nav.scrollLeft) + "px";
  }

  buttons.forEach(btn=>btn.addEventListener("click",()=>activate(btn)));

  // 初始化高亮条
  const activeBtn = nav.querySelector(".nav-btn.active") || buttons[0];
  if(activeBtn) activate(activeBtn);
});
</script>