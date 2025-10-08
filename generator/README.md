# 🧩 Chirpy Front Matter Markdown 生成器（v1）

一个为 **Jekyll Chirpy** 博客主题设计的网页端 Markdown 文件生成器。  
支持自动生成 Front Matter、分类、评论、封面图路径等内容，可一键复制或下载生成的 `.md` 文件。  

📍 演示地址（如果你的 GitHub 用户名是 `seamoonappear`）：
👉 [https://seamoonappear.github.io/generator/](https://seamoonappear.github.io/generator/)

---

## 🚀 功能特点

| 功能 | 说明 |
|------|------|
| 📝 自动 Front Matter | 一键生成符合 **Jekyll Chirpy** 格式的头部信息 |
| 🕒 自动时间字段 | 自动填入 `date` 与 `last_modified_at` |
| 💬 评论系统 | 自动启用 `comments: true` |
| 🏷️ 分类选择 | 提供固定分类 + 支持自定义分类 |
| 🖼️ 封面图选项 | 可选启用图片，路径为 `/assets/img/` |
| 📂 文件名自动生成 | `_posts/YYYY-MM-DD-slug.md` 格式，可复制 |
| 🔖 标签生成 | 可自动从标题与正文提取 2~3 个标签（可自填） |
| 💾 下载功能 | 支持一键下载生成的 Markdown 文件 |
| ✅ 兼容性强 | 完全兼容 Chirpy 主题 Front Matter 结构 |
| 🌈 独立运行 | 独立于博客主页，不影响任何页面样式 |

---

## 🧭 使用方法

### 1️⃣ 访问生成器
打开：
```

[https://seamoonappear.github.io/generator/](https://seamoonappear.github.io/generator/)

```

### 2️⃣ 填写内容
在左侧表单中输入以下信息：
- **标题**（title）
- **正文内容**（Markdown）
- **分类**（选择或自定义）
- （可选）**标签**  
- （可选）勾选启用图片，并填写图片文件名（不含路径）

### 3️⃣ 生成 Markdown
点击 **🪄 生成 Markdown** 按钮即可自动生成完整内容。  
右侧将显示：
- 生成的 `_posts/` 文件名  
- 带 Front Matter 的完整 Markdown 内容  

### 4️⃣ 复制或下载
- 点击 **复制 Markdown** → 复制完整内容  
- 点击 **复制 posts 文件名** → 复制目标路径  
- 点击 **⬇ 下载 .md** → 下载文件保存到本地  

### 5️⃣ 上传到博客
将生成的 `.md` 文件放入博客仓库的：
```

_posts/

````
文件夹中，然后推送到 GitHub。  
几秒后 GitHub Pages 自动构建，你的文章就会显示在主页。

---

## 🧩 Front Matter 示例

```yaml
---
title: 我的新文章
date: 2025-10-08 14:35:00 +0800
last_modified_at: 2025-10-08 14:35:00 +0800
categories: [生活]
tags: [chirpy, 生成器, 教程]
image:
  path: /assets/img/cover.jpg
pin: false
math: false
mermaid: false
comments: true
---
````

正文格式：

```markdown
![](/assets/img/cover.jpg)

## 正文

这里是正文内容。
```

---

## ⚙️ 文件结构

```
generator/
│
├── index.html   # 生成器网页主文件（核心逻辑）
└── README.md    # 使用说明文件
```

> 📌 将整个 `generator` 文件夹放入仓库根目录即可：
> `https://yourname.github.io/generator/`

---

## 🧱 技术说明

* 纯前端实现（HTML + Tailwind CSS + JavaScript）
* 无需构建或依赖
* 可直接部署在 GitHub Pages
* 自动生成兼容 Chirpy 的 Front Matter 字段

---

## 🧩 预设分类

内置分类选项：

```
工作、生活、情感、爱好、感悟、探索、学习、读书、影视
```

同时支持「自定义分类」模式，可输入任意名称。

---

## 🖼️ 图片插入说明

* 若勾选启用封面图片选项
* 并输入 `cover.jpg`，系统会生成路径：

  ```
  /assets/img/cover.jpg
  ```
* Markdown 正文自动在最前方插入：

  ```markdown
  ![](/assets/img/cover.jpg)
  ```

---

## 💡 提示

* 本工具不会自动修改你的博客仓库；
* 所有生成的文件都在浏览器本地完成；
* 仅当你将生成的 `.md` 文件上传至 `_posts/` 目录后，博客才会显示。

---

## 🪄 作者与致谢

由 **@seamoonappear** 创建
设计与优化支持：**ChatGPT GPT-5**

---

## 🧰 License

MIT License © 2025 seamoonappear

```

---

是否希望我帮你同时生成一个可以直接放到仓库中的 `README.md` 文件下载链接（我可以自动生成该文件并提供下载）？
```
