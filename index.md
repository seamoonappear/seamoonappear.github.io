---
layout: home
title: 地平线
---

<!-- ✅ 封面区 -->
<div class="cover-section">
  <div class="cover-text">
    <h1>地平线</h1>
    <p>探索、记录与思考 —— 王维的个人空间</p>
  </div>
</div>

<!-- ✅ 博客区 -->
<section class="post-section">
  <h2>最新文章</h2>
  <ul class="post-list">
    {% for post in paginator.posts %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <span class="post-meta">{{ post.date | date: "%Y-%m-%d" }}</span>
    </li>
    {% endfor %}
  </ul>

  {% if paginator.total_pages > 1 %}
  <div class="pagination">
    {% if paginator.previous_page %}
      <a href="{{ paginator.previous_page_path }}" class="prev">上一页</a>
    {% endif %}
    {% if paginator.next_page %}
      <a href="{{ paginator.next_page_path }}" class="next">下一页</a>
    {% endif %}
  </div>
  {% endif %}
</section>

<style>
/* 封面部分 */
.cover-section {
  background: url('{{ "/assets/banner/home-cover.jpg" | relative_url }}') no-repeat center center/cover;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-shadow: 0 2px 6px rgba(0,0,0,0.4);
  border-radius: 0 0 30px 30px;
  margin-bottom: 3rem;
}
.cover-text {
  text-align: center;
  background: rgba(0, 0, 0, 0.35);
  padding: 2rem 3rem;
  border-radius: 20px;
}
.cover-text h1 {
  font-size: 3rem;
  margin-bottom: .5rem;
}
.cover-text p {
  font-size: 1.2rem;
}

/* 博客列表部分 */
.post-section {
  max-width: 800px;
  margin: auto;
  padding: 0 1rem 3rem;
}
.post-section h2 {
  text-align: center;
  margin-bottom: 1.5rem;
}
.post-list {
  list-style: none;
  padding: 0;
}
.post-list li {
  border-bottom: 1px solid #eee;
  padding: .75rem 0;
  display: flex;
  justify-content: space-between;
}
.post-list li a {
  text-decoration: none;
  color: #333;
  font-weight: 600;
}
.post-list li a:hover {
  color: #007acc;
}
.post-meta {
  color: #999;
  font-size: .9rem;
}

/* 分页 */
.pagination {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}
.pagination a {
  background: #333;
  color: #fff;
  padding: .5rem 1rem;
  border-radius: 20px;
  text-decoration: none;
  transition: 0.3s;
}
.pagination a:hover {
  background: #007acc;
}
</style>
