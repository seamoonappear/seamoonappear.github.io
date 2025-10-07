---
title: "关于我"
permalink: /about/
about_page: true
---

<!-- 内联 About 页面专属 CSS：保证在没有修改主题 head 的情况下也能生效 -->
<style>
/* ===== About 页面整体 ===== */
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
  color: #4b5563; /* 适度灰色，便于阅读 */
  line-height: 1.6;
}

/* ===== 三栏卡片容器 ===== */
.three-columns {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  margin-bottom: 32px;
}

/* 每个卡片：明确使用 .card，避免通配符被覆盖 */
.three-columns .card {
  flex: 1 1 260px;         /* 在宽屏平摊，最小宽度 260px */
  min-width: 220px;
  background: #ffffff;
  padding: 18px;
  border-radius: 10px;
  box-shadow: 0 1px 8px rgba(0,0,0,0.06);
  transition: transform .28s ease, box-shadow .28s ease;
  border: 1px solid rgba(15,23,42,0.03);
}

/* 卡片标题样式 */
.three-columns .card h3 {
  margin: 0 0 10px 0;
  font-size: 1.05rem;
}

/* 悬停效果 */
.three-columns .card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.12);
}

/* 响应式：小屏堆叠、居中 */
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
  <img src="{{ '/assets/img/avatar.jpg' | relative_url }}" alt="王维 头像" class="avatar">

  <div class="intro">
    <h1>王维</h1>
    <p>故乡 <strong>连云港</strong>，现居 <strong>杭州</strong>。兴趣广泛，秉持 <strong>终身学习</strong> 的目标，不断探索新的知识与技能。</p>
    <p>精通平面设计，熟练使用 Adobe Photoshop (Ps) 与 Illustrator (Ai)。拥有多年电商运营与电视购物业务经验，并在食品包装采购领域有丰富实践。</p>
  </div>
</div>

---

## 🗂 个人信息与专业技能

<div class="three-columns">

<div class="card">
### 📌 个人信息
- **姓名**：王维  
- **故乡**：连云港  
- **现居**：杭州  
- **目标**：终身学习
</div>

<div class="card">
### 🎯 专业技能
- **平面设计**：精通 Ps 与 Ai，能独立完成视觉与包装设计  
- **电商与营销**：多年电商运营经验，熟悉平台运营与活动策划  
- **电视购物**：有几年电视购物业务实操经验
</div>

<div class="card">
### 🎨 爱好
- 阅读（各类书籍）  
- 书法
- 旅行与摄影  
- 音乐欣赏  
- 烹饪与美食探索  
- 学习新技术与设计趋势
</div>

</div>

---

## 💼 工作经历

| 公司 | 职位 | 主要职责 |
|------|------|-----------|
| 北京同仁堂健康药业（青海）有限公司 | 包装解决方案专员 | 为食品及健康产品企业提供全方位包装解决方案，熟悉包装材料与工艺，并负责成本控制与供应商协调 |

---

我相信 **设计、营销与包装** 是企业价值的重要体现，致力于用专业技能为每一个项目创造更大价值。