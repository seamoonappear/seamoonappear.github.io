---
title: "obsidian推送github方案"
date: 2023-07-05 14:05:01 +0800
last_modified_at: 2025-10-05 14:05:01 +0800
categories: [工作]
tags: [程序员]
---

我们来一步步讲清楚——在手机或电脑上用 Obsidian 写文章，然后自动推送到 GitHub Pages 博客（比如你用的 Chirpy 主题）。

我会教你最简单、最稳定的方案（不依赖复杂命令行），完全可以用手机操作。


---

🧭 一、前提条件

你已经有：

✅ GitHub 仓库，比如 hdbuyer/hdbuyer.github.io

✅ 主题已部署好（比如 jekyll-theme-chirpy）

✅ GitHub Pages 已能访问



---

🧩 二、Obsidian 安装推送插件

在 Obsidian 的 社区插件 中安装：

🔌 插件名称：Obsidian Git

安装步骤：

1. 打开 Obsidian → 左下角 ⚙️「设置」


2. 打开「社区插件」 → 启用「安全模式」关闭（允许第三方插件）


3. 点击「浏览」


4. 搜索并安装 “Obsidian Git”


5. 安装后启用它 ✅




---

⚙️ 三、插件配置（一次设置即可）

在 Obsidian → 设置 → 「Obsidian Git」中：

设置项	填写内容	说明

Vault root directory	你的笔记文件夹路径	建议该文件夹就是你 GitHub 博客的本地仓库（例如：hdbuyer.github.io）
Commit message	更新文章：{{date}}	每次自动提交信息
Auto pull interval	5	每 5 分钟自动从 GitHub 拉取更新
Auto push interval	5	每 5 分钟自动推送到 GitHub
Disable notifications	打开	避免频繁弹窗提示



---

🧠 四、推送前准备

1. 把你写好的文章放进博客仓库的 _posts 文件夹里（格式一定要正确）：



例如：
_posts/2025-10-05-生活随笔.md

文件头必须包含 YAML 格式：

---
title: 生活随笔
date: 2025-10-05 10:00:00 +0800
categories: 生活
tags: [随笔, 日常]
---

2. 保存后插件会自动检测到改动。




---

🚀 五、推送到 GitHub

方式 1：自动推送（推荐）

只要你配置了 “Auto push interval”，插件会每隔几分钟自动提交并推送到 GitHub。

方式 2：手动推送

在命令面板（Ctrl + P 或手机点击左下角命令按钮）输入：

Obsidian Git: Commit all changes
Obsidian Git: Push

就会立即推送。


---

🧱 六、GitHub Actions 自动构建

推送后，GitHub 会自动触发 Actions 构建。 几分钟后，你的文章就会出现在博客首页 🎉。


---

📱 七、手机端同步（Android / iPhone）

如果你主要在手机上写作，可以用以下方式：

Android： 使用 Termux 或 GitJournal 配合 Obsidian Git 插件

iPhone： 使用 Working Copy（支持 GitHub 同步）并连接到 Obsidian 的文件夹


推荐做法：

1. 把整个博客仓库放到手机的 Obsidian Vault 里；


2. 写完文章保存；


3. 打开 Obsidian Git → 点击「Push changes」。




---

✅ 简要总结

步骤	操作

1️⃣	在 GitHub 建好仓库并能访问
2️⃣	Obsidian 安装 Obsidian Git 插件
3️⃣	配置仓库路径、自动推送
4️⃣	写文章放入 _posts 文件夹
5️⃣	保存后插件自动提交 + 推送
6️⃣	GitHub Actions 自动发布网站



---



完整、适合手机使用的 Obsidian Git 插件配置模板（一步到位版）。
这个模板专为你现在的博客仓库结构（hdbuyer.github.io 或类似）设计。


---

🧩 一、准备工作（只做一次）

1️⃣ 确保你的手机上已经：

安装了 Obsidian；

打开你的 Vault（建议 Vault 名称 = hdbuyer.github.io）；

这个 Vault 已经是你的 GitHub 博客仓库（包含 _posts、_config.yml 等文件）；

绑定好了 GitHub（SSH 或 HTTPS 都可以）。


如果你还没把仓库克隆下来，我也可以教你用手机一键同步。


---

⚙️ 二、Obsidian Git 插件配置模板

请按下面内容在 Obsidian 设置中手动填写（路径：
设置 → 社区插件 → Obsidian Git → 设置）👇


---

🧠 基础配置部分

选项	填写内容	说明

Vault root directory	.	表示当前 Vault 根目录即 Git 仓库
Commit message	更新博客：{{date}}	自动加时间提交信息
Auto pull interval (minutes)	10	每 10 分钟从 GitHub 拉取更新
Auto push interval (minutes)	10	每 10 分钟自动推送改动
Disable notifications	✅ 打开	防止频繁弹窗
Auto commit before push	✅ 打开	自动提交所有修改后再推送
Pull before push	✅ 打开	避免冲突
Auto backup interval	0	关闭（用不到）
Commit author name	hdbuyer	GitHub 用户名
Commit author email	你的GitHub邮箱地址	



---

⚡ 自动化选项

选项	值	作用

Auto pull on startup	✅	打开 Obsidian 时自动同步
Auto push on exit	✅	关闭 Obsidian 时自动推送
Auto pull before push	✅	推送前先拉取最新
Periodic auto push	✅	自动推送间隔生效



---

💡 三、实际使用流程

1️⃣ 在 Obsidian 里新建文章 → 存到 _posts 文件夹； 2️⃣ 写完后保存； 3️⃣ 不需要任何命令，插件会在后台自动：

提交（commit）；

推送（push）；

然后 GitHub Actions 自动发布。



---

🪄 四、手动操作命令（可选）

如你想手动执行，在命令面板（手机上点左下角 > 按钮）搜索以下命令：

命令	功能

Obsidian Git: Commit all changes	提交所有修改
Obsidian Git: Push	推送到 GitHub
Obsidian Git: Pull	拉取最新仓库



---

✅ 五、最终效果

你在手机上写 Markdown（.md）
👉 自动保存
👉 自动上传到 GitHub 仓库
👉 GitHub Pages 自动发布
👉 几分钟后，博客首页显示最新文章 🎉


---



