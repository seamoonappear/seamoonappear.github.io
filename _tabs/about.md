---
layout: page
title: 关于
icon: fas fa-user
order: 8
sidebar: true
permalink: /about/
---

<div class="about-timeline">
  <div class="intro">
    <img src="{{ '/assets/img/avatar.jpg' | relative_url }}" alt="王维头像" class="avatar">
    <h1>王维</h1>
    <p>居杭州 · 爱好广泛</p>
  </div>

  <div class="timeline">

    <div class="event">
      <div class="year">2021 - 至今</div>
      <div class="desc">
        <h3>北京同仁堂健康药业（青海）有限公司</h3>
        <p>包装采购。负责健康食品与保健产品的采购及包装方案规划。从包装材料选型、结构设计、成本控制到供应链协作，提供一体化解决方案，助力品牌在质量与市场之间取得平衡。</p>
      </div>
    </div>

    <div class="event">
      <div class="year">2015 - 2021</div>
      <div class="desc">
        <h3>杭州觅真生物科技有限公司</h3>
        <p>担任电商运营与电视购物营销策划。主导品牌电商渠道搭建与运营，策划多档电视购物节目，结合视觉设计与营销策略，推动销售增长与品牌曝光。</p>
      </div>
    </div>

    <div class="event">
      <div class="year">2012 - 2015</div>
      <div class="desc">
        <h3>卡森国际集团（HK0496）</h3>
        <p>葛岭子公司电商运营人员。负责线上渠道管理、产品规划与推广执行，积累了丰富的零售与电商平台运营经验。</p>
      </div>
    </div>

    <div class="event">
      <div class="year">2008 - 2012</div>
      <div class="desc">
        <h3>杭州凡洛施服饰有限公司</h3>
        <p>平面设计师。主要负责品牌视觉设计、服装设计、产品包装与宣传物料制作，建立了扎实的美术与品牌表现能力。</p>
      </div>
    </div>

    <div class="event">
      <div class="year">2004 - 2008</div>
      <div class="desc">
        <h3>哈尔滨</h3>
        <p>物流管理专业本科。系统学习供应链管理、采购与市场分析，为后续从事包装与电商行业打下基础。</p>
      </div>
    </div>

    <div class="event">
      <div class="year">兴趣与理念</div>
      <div class="desc">
        <p>爱好广泛，关注设计与营销的融合创新。相信兴趣是最好的老师。</p>
      </div>
    </div>
  </div>
</div>

<style>
.about-timeline {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
  font-family: "Helvetica Neue", Arial, sans-serif;
  line-height: 1.75;
  color: #333;
}

.intro {
  text-align: center;
  margin-bottom: 2.5rem;
}

.avatar {
  width: 110px;
  height: 110px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
}

.timeline {
  position: relative;
  margin-left: 1rem;
  border-left: 2px solid #4f46e5;
  padding-left: 1.5rem;
}

.event {
  margin-bottom: 2rem;
  position: relative;
}

.event::before {
  content: '';
  position: absolute;
  left: -10px;
  top: 8px;
  width: 10px;
  height: 10px;
  background: #4f46e5;
  border-radius: 50%;
}

.year {
  font-weight: bold;
  color: #4f46e5;
  margin-bottom: 0.3rem;
}

.desc h3 {
  margin: 0.2rem 0;
  font-size: 1rem;
  color: #111;
}

.desc p {
  margin: 0.2rem 0;
  color: #555;
}

@media (max-width: 600px) {
  .timeline {
    border-left: none;
    padding-left: 0;
  }
  .event::before {
    display: none;
  }
  .year {
    margin-top: 1rem;
  }
}
</style>
