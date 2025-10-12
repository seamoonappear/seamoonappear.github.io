---
layout: page
title: "照片"
permalink: /photo/
icon: fas fa-camera
order: 5
---

<div class="photo-container">
  <div class="photo-nav">
    <div class="nav-highlight"></div>
    <button class="nav-btn active" data-tab="scenery">风景</button>
    <button class="nav-btn" data-tab="people">人物</button>
    <button class="nav-btn" data-tab="life">生活</button>
    <button class="nav-btn" data-tab="cat">猫</button>
    <button class="nav-btn" data-tab="random">随手拍</button>
  </div>

  <div class="tab-content">
    <!-- 风景 -->
    <div id="scenery" class="tab-pane active">
      <div class="photo-grid">
        <div class="photo-item">
          <img src="{{ '/assets/photos/travel1.jpg' | relative_url }}" alt="风景1">
          <div class="photo-caption">风景描述1</div>
        </div>
        <div class="photo-item">
          <img src="{{ '/assets/photos/travel2.jpg' | relative_url }}" alt="风景2">
          <div class="photo-caption">风景描述2</div>
        </div>
        <div class="photo-item">
          <img src="{{ '/assets/photos/travel3.jpg' | relative_url }}" alt="风景3">
          <div class="photo-caption">风景描述3</div>
        </div>
        <div class="photo-item">
          <img src="{{ '/assets/photos/travel4.jpg' | relative_url }}" alt="风景4">
          <div class="photo-caption">风景描述4</div>
        </div>
        <div class="photo-item">
          <img src="{{ '/assets/photos/travel5.jpg' | relative_url }}" alt="风景5">
          <div class="photo-caption">风景描述5</div>
        </div>
        <div class="photo-item">
          <img src="{{ '/assets/photos/travel1.jpg' | relative_url }}" alt="风景6">
          <div class="photo-caption">风景描述6</div>
        </div>
      </div>
    </div>

    <!-- 人物 -->
    <div id="people" class="tab-pane">
      <div class="photo-grid">
        <div class="photo-item">
          <img src="{{ '/assets/photos/person1.jpg' | relative_url }}" alt="人物1">
          <div class="photo-caption">人物描述1</div>
        </div>
        <div class="photo-item">
          <img src="{{ '/assets/photos/person2.jpg' | relative_url }}" alt="人物2">
          <div class="photo-caption">人物描述2</div>
        </div>
        <div class="photo-item">
          <img src="{{ '/assets/photos/person3.jpg' | relative_url }}" alt="人物3">
          <div class="photo-caption">人物描述3</div>
        </div>
        <div class="photo-item">
          <img src="{{ '/assets/photos/person4.jpg' | relative_url }}" alt="人物4">
          <div class="photo-caption">人物描述4</div>
        </div>
        <div class="photo-item">
          <img src="{{ '/assets/photos/person5.jpg' | relative_url }}" alt="人物5">
          <div class="photo-caption">人物描述5</div>
        </div>
        <div class="photo-item">
          <img src="{{ '/assets/photos/person6.jpg' | relative_url }}" alt="人物6">
          <div class="photo-caption">人物描述6</div>
        </div>
      </div>
    </div>

    <!-- 生活 -->
    <div id="life" class="tab-pane">
      <div class="photo-grid">
        <div class="photo-item">
          <img src="{{ '/assets/photos/live1.jpg' | relative_url }}" alt="生活1">
          <div class="photo-caption">生活描述1</div>
        </div>
        <div class="photo-item">
          <img src="{{ '/assets/photos/live2.jpg' | relative_url }}" alt="生活2">
          <div class="photo-caption">生活描述2</div>
        </div>
        <div class="photo-item">
          <img src="{{ '/assets/photos/live3.jpg' | relative_url }}" alt="生活3">
          <div class="photo-caption">生活描述3</div>
        </div>
        <div class="photo-item">
          <img src="{{ '/assets/photos/live4.jpg' | relative_url }}" alt="生活4">
          <div class="photo-caption">生活描述4</div>
        </div>
        <div class="photo-item">
          <img src="{{ '/assets/photos/live1.jpg' | relative_url }}" alt="生活5">
          <div class="photo-caption">生活描述5</div>
        </div>
        <div class="photo-item">
          <img src="{{ '/assets/photos/live2.jpg' | relative_url }}" alt="生活6">
          <div class="photo-caption">生活描述6</div>
        </div>
      </div>
    </div>

    <!-- 猫 -->
    <div id="cat" class="tab-pane">
      <div class="photo-grid">
        <div class="photo-item">
          <img src="{{ '/assets/photos/cat1.jpg' | relative_url }}" alt="猫1">
          <div class="photo-caption">猫描述1</div>
        </div>
        <div class="photo-item">
          <img src="{{ '/assets/photos/cat2.jpg' | relative_url }}" alt="猫2">
          <div class="photo-caption">猫描述2</div>
        </div>
        <div class="photo-item">
          <img src="{{ '/assets/photos/cat3.jpg' | relative_url }}" alt="猫3">
          <div class="photo-caption">猫描述3</div>
        </div>
        <div class="photo-item">
          <img src="{{ '/assets/photos/cat4.jpg' | relative_url }}" alt="猫4">
          <div class="photo-caption">猫描述4</div>
        </div>
        <div class="photo-item">
          <img src="{{ '/assets/photos/cat5.jpg' | relative_url }}" alt="猫5">
          <div class="photo-caption">猫描述5</div>
        </div>
        <div class="photo-item">
          <img src="{{ '/assets/photos/cat6.jpg' | relative_url }}" alt="猫6">
          <div class="photo-caption">猫描述6</div>
        </div>
      </div>
    </div>

    <!-- 随手拍 -->
    <div id="random" class="tab-pane">
      <div class="photo-grid">
        <div class="photo-item">
          <img src="{{ '/assets/photos/suishou1.jpg' | relative_url }}" alt="随手拍1">
          <div class="photo-caption">随手拍描述1</div>
        </div>
        <div class="photo-item">
          <img src="{{ '/assets/photos/suishou2.jpg' | relative_url }}" alt="随手拍2">
          <div class="photo-caption">随手拍描述2</div>
        </div>
        <div class="photo-item">
          <img src="{{ '/assets/photos/suishou3.jpg' | relative_url }}" alt="随手拍3">
          <div class="photo-caption">随手拍描述3</div>
        </div>
        <div class="photo-item">
          <img src="{{ '/assets/photos/suishou4.jpg' | relative_url }}" alt="随手拍4">
          <div class="photo-caption">随手拍描述4</div>
        </div>
        <div class="photo-item">
          <img src="{{ '/assets/photos/suishou5.jpg' | relative_url }}" alt="随手拍5">
          <div class="photo-caption">随手拍描述5</div>
        </div>
        <div class="photo-item">
          <img src="{{ '/assets/photos/suishou6.jpg' | relative_url }}" alt="随手拍6">
          <div class="photo-caption">随手拍描述6</div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
.photo-container { max-width:900px; margin:0 auto; }
.photo-nav { position:relative; display:flex; justify-content:center; margin:2rem 0; overflow-x:auto; white-space:nowrap; background:#f8f9fa; border-radius:8px; padding:8px; }
.nav-btn { padding:0.6rem 1.2rem; margin:0 0.25rem; background:white; border:1px solid #e0e0e0; cursor:pointer; font-size:0.85rem; color:#666; border-radius:6px; transition:all 0.3s ease; box-shadow:0 1px 3px rgba(0,0,0,0.05); position:relative; z-index:1; }
.nav-btn:hover { color:#111; background:#f3f3f3; transform:translateY(-1px); box-shadow:0 2px 5px rgba(0,0,0,0.08); }
.nav-btn.active { color:#000; font-weight:600; }
.nav-highlight { position:absolute; bottom:5px; height:3px; background:linear-gradient(90deg,#000,#444); border-radius:2px; transition:all 0.3s ease; z-index:0; }
.tab-content { margin:2rem 0; }
.tab-pane { display:none; animation:fadeIn