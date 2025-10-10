---
# the default layout is 'page'
icon: fas fa-info-circle
order: 4
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
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 36px rgba(0,0,0,0.14);
}

.card h3 {
  margin: 0;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 8px;
}

/* 技能进度条 */
.skill-bar {
  background: #e5e7eb;
  border-radius: 10px;
  overflow: hidden;
  height: 10px;
  margin-top: 6px;
}

.skill-bar-fill {
  height: 100%;
  background: #4f46e5;
  width: 0%;
  transition: width 1s ease;
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
      <li>平面设计
        <div class="skill-bar"><div class="skill-bar-fill" style="width:95%;"></div></div>
      </li>
      <li>电商与营销
        <div class="skill-bar"><div class="skill-bar-fill" style="width:85%;"></div></div>
      </li>
      <li>电视购物策划
        <div class="skill-bar"><div class="skill-bar-fill" style="width:80%;"></div></div>
      </li>
    </ul>
  </div>

  <div class="card">
    <h3>🎨 爱好</h3>
    <ul>
      <li>阅读与写作
        <div class="skill-bar"><div class="skill-bar-fill" style="width:90%;"></div></div>
      </li>
      <li>旅行与摄影
        <div class="skill-bar"><div class="skill-bar-fill" style="width:85%;"></div></div>
      </li>
      <li>书法与鉴赏
        <div class="skill-bar"><div class="skill-bar-fill" style="width:75%;"></div></div>
      </li>
      <li>音乐欣赏
        <div class="skill-bar"><div class="skill-bar-fill" style="width:70%;"></div></div>
      </li>
      <li>烹饪与美食探索
        <div class="skill-bar"><div class="skill-bar-fill" style="width:80%;"></div></div>
      </li>
      <li>新技术学习
        <div class="skill-bar"><div class="skill-bar-fill" style="width:75%;"></div></div>
      </li>
    </ul>
  </div>

</div>

---

## 💼 工作经历

<table>
  <thead>
    <tr>
      <th>公司</th>
      <th>职位</th>
      <th>主要职责</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>北京同仁堂健康药业（青海）有限公司</td>
      <td>包装解决方案专员</td>
      <td>为食品及健康产品企业提供全方位包装解决方案，熟悉包装材料、工艺与成本控制</td>
    </tr>
  </tbody>
</table>

---

我相信 **设计、营销与包装** 是企业价值的重要体现，致力于用专业技能为每一个项目创造更大价值。