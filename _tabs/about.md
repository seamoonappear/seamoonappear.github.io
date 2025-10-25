---
layout: page
title: 关于
icon: fas fa-user
order: 8
sidebar: ture
permalink: /about/
---

<div class="about">
  <div class="about-header">
    <img src="{{ '/assets/img/avatar.jpg' | relative_url }}" alt="王维的头像" class="avatar">
    <h1>王维</h1>
    <p class="location">现居杭州 · 40岁</p>
    <div class="social">
      <a href="#" title="邮箱"><i class="fas fa-envelope"></i></a>
      <a href="#" title="微信"><i class="fab fa-weixin"></i></a>
    </div>
  </div>

  <div class="about-content">
    <p>
      我拥有 <strong>多年以上包装设计与营销策划经验</strong> ，专注于为食品与健康产业提供
      <strong>创新包装解决方案</strong>。擅长结合品牌价值与市场趋势，创造兼具美感与商业逻辑的作品。
    </p>

    <p>
      现任 <strong>北京同仁堂健康药业（青海）有限公司</strong> 包装解决方案专员，
      负责从材料选择、结构设计到生产落地的全流程统筹。
    </p>

    <blockquote>
      <strong>设计、营销与包装</strong>是企业价值的桥梁。
      我始终相信——好的设计能让产品自己开口说话。
    </blockquote>

    <p class="contact">
      📬 <a href="mailto:example@email.com">与我联系</a>
    </p>
  </div>
</div>

<style>
.about {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: 2rem 1rem;
}
.about-header {
  margin-bottom: 2rem;
}
.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  margin-bottom: 1rem;
}
.about-header h1 {
  margin: 0.5rem 0;
  font-size: 2rem;
  font-weight: 700;
}
.tagline {
  font-size: 1.1rem;
  color: #4f46e5;
  margin-bottom: 0.5rem;
}
.location {
  font-size: 0.95rem;
  color: #6b7280;
  margin-bottom: 1rem;
}
.social a {
  margin: 0 0.4rem;
  color: #6b7280;
  font-size: 1.2rem;
  transition: all 0.3s ease;
}
.social a:hover {
  color: #4f46e5;
}
.about-content {
  text-align: left;
  font-size: 1.05rem;
  line-height: 1.75;
  color: #1f2937;
}
.about-content strong {
  color: #4f46e5;
}
blockquote {
  border-left: 4px solid #4f46e5;
  padding-left: 1rem;
  color: #4b5563;
  font-style: italic;
  margin: 1.5rem 0;
}
.contact a {
  color: #4f46e5;
  text-decoration: none;
  font-weight: 500;
}
.contact a:hover {
  text-decoration: underline;
}
</style>
