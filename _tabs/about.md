---
layout: page
title: 关于我
permalink: /about/
icon: fas fa-info-circle
order: 7
---

<div id="about-page" class="about-container">
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
    <div id="job" class="tab-pane active" data-tab="job">
      <div class="card-grid">
        <div class="card">
          <h3>北京同仁堂健康药业（青海）有限公司</h3>
          <p><strong>职位：</strong> 包装解决方案专员</p>
          <p><strong>主要职责：</strong> 为食品及健康产品企业提供全方位包装解决方案，熟悉包装材料、工艺与成本控制。</p>
        </div>
      </div>
    </div>

    <div id="skills" class="tab-pane" data-tab="skills">
      <div class="card-grid">
        <div class="card"><h3>平面设计</h3><p>精通 Photoshop 与 Illustrator</p></div>
        <div class="card"><h3>电商与营销</h3><p>多年运营经验，熟悉平台策略</p></div>
        <div class="card"><h3>电视购物策划</h3><p>丰富节目策划与执行经验</p></div>
      </div>
    </div>

    <div id="hobby" class="tab-pane" data-tab="hobby">
      <div class="card-grid">
        <div class="card">阅读与写作</div>
        <div class="card">旅行与摄影</div>
        <div class="card">书法与艺术鉴赏</div>
        <div class="card">音乐欣赏</div>
        <div class="card">烹饪与美食探索</div>
        <div class="card">新技术学习</div>
      </div>
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

.card-grid {
  display:grid; grid-template-columns: repeat(auto-fill,minmax(220px,1fr)); gap:16px; margin-bottom:16px;
}
.card {
  background:#fff; padding:16px; border-radius:12px; box-shadow:0 2px 12px rgba(0,0,0,0.08);
  border:1px solid rgba(15,23,42,0.05); transition: transform .3s ease, box-shadow .3s ease;
}
.card:hover { transform:translateY(-4px); box-shadow:0 8px 24px rgba(0,0,0,0.12); }
.card h3 { margin:0 0 8px; font-size:1rem; }

@media(max-width:760px){
  .about-header { flex-direction:column; text-align:center; }
}
</style>

<script>
function initAboutTabs(){
  const container = document.getElementById("about-page");
  if(!container) return;

  const nav = container.querySelector(".about-nav");
  const highlight = nav.querySelector(".nav-highlight");
  const buttons = nav.querySelectorAll(".nav-btn");
  const panes = container.querySelectorAll(".tab-pane");

  function activate(btn){
    const target = btn.dataset.tab;
    buttons.forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    panes.forEach(p=>{
      p.classList.toggle("active", p.id===target);
    });

    const rect = btn.getBoundingClientRect();
    const navRect = nav.getBoundingClientRect();
    highlight.style.width = rect.width+"px";
    highlight.style.left = (rect.left - navRect.left + nav.scrollLeft) + "px";
  }

  buttons.forEach(btn=>btn.addEventListener("click",()=>activate(btn)));

  // 初始化高亮条
  const activeBtn = nav.querySelector(".nav-btn.active") || buttons[0];
  if(activeBtn) activate(activeBtn);
}

document.addEventListener("DOMContentLoaded", initAboutTabs);
</script>