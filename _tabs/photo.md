<script>
document.addEventListener("DOMContentLoaded", function() {
  const container = document.querySelector(".photo-container");
  if (!container) return;

  const nav = container.querySelector(".photo-nav");
  const tabPanes = container.querySelectorAll(".tab-pane");
  const highlight = nav.querySelector(".nav-highlight");

  function setHighlight(button) {
    const rect = button.getBoundingClientRect();
    const containerRect = nav.getBoundingClientRect();
    highlight.style.width = rect.width + "px";
    highlight.style.left = (rect.left - containerRect.left + nav.scrollLeft) + "px";
  }

  // 标签点击切换
  nav.querySelectorAll(".nav-btn").forEach(button => {
    button.addEventListener("click", () => {
      // 高亮按钮
      nav.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
      button.classList.add("active");

      // 显示对应 tab-pane
      const targetTab = button.dataset.tab;
      tabPanes.forEach(pane => {
        if (pane.id === targetTab) {
          pane.classList.add("active");
        } else {
          pane.classList.remove("active");
        }
      });

      // 调整底部高亮条
      setHighlight(button);
    });
  });

  // 初始化高亮条
  const activeButton = nav.querySelector(".nav-btn.active") || nav.querySelector(".nav-btn");
  if (activeButton) setHighlight(activeButton);

  // 图片放大查看
  container.querySelectorAll(".photo-item img").forEach(img => {
    img.addEventListener("click", () => {
      const overlay = document.createElement("div");
      overlay.className = "photo-overlay";

      const largeImg = document.createElement("img");
      largeImg.src = img.src;
      largeImg.alt = img.alt;
      largeImg.className = "photo-large";

      const desc = document.createElement("div");
      desc.className = "photo-desc";
      desc.textContent = img.dataset.desc || "";

      overlay.appendChild(largeImg);
      if (desc.textContent) overlay.appendChild(desc);
      document.body.appendChild(overlay);

      overlay.addEventListener("click", () => overlay.remove());
    });
  });
});
</script>