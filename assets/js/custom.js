document.addEventListener('DOMContentLoaded', function() {
  // 侧边栏移动端控制
  function initSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const sidebarOverlay = document.querySelector('.sidebar-overlay');
    
    // 如果没有侧边栏，直接返回
    if (!sidebar) {
      console.warn('Sidebar element not found');
      return;
    }
    
    // 创建移动端切换按钮（如果不存在）
    if (!sidebarToggle) {
      const toggleBtn = document.createElement('button');
      toggleBtn.className = 'sidebar-toggle';
      toggleBtn.innerHTML = '☰';
      toggleBtn.setAttribute('aria-label', '切换侧边栏');
      document.body.appendChild(toggleBtn);
    }
    
    // 创建遮罩层（如果不存在）
    if (!sidebarOverlay) {
      const overlay = document.createElement('div');
      overlay.className = 'sidebar-overlay';
      document.body.appendChild(overlay);
    }
    
    const toggleBtn = document.querySelector('.sidebar-toggle');
    const overlay = document.querySelector('.sidebar-overlay');
    
    // 切换侧边栏显示
    function toggleSidebar() {
      sidebar.classList.toggle('active');
      overlay.classList.toggle('active');
      document.body.classList.toggle('sidebar-open');
    }
    
    // 绑定事件
    if (toggleBtn) {
      toggleBtn.addEventListener('click', toggleSidebar);
    }
    
    if (overlay) {
      overlay.addEventListener('click', toggleSidebar);
    }
    
    // ESC键关闭侧边栏
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && sidebar.classList.contains('active')) {
        toggleSidebar();
      }
    });
    
    // 窗口大小变化时重置侧边栏状态
    window.addEventListener('resize', function() {
      if (window.innerWidth >= 768) {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        document.body.classList.remove('sidebar-open');
      }
    });
  }
  
  // 初始化侧边栏
  initSidebar();
  
  // 修复链接图标显示
  function fixSocialLinks() {
    const socialLinks = document.querySelectorAll('.sidebar-social a');
    socialLinks.forEach(link => {
      const icon = link.querySelector('i');
      if (icon && !icon.className.includes('fa-')) {
        // 修复Font Awesome类名
        const href = link.getAttribute('href') || '';
        if (href.includes('github.com')) {
          icon.className = 'fab fa-github';
        } else if (href.includes('rss') || href.endsWith('.xml')) {
          icon.className = 'fas fa-rss';
        }
      }
    });
  }
  
  fixSocialLinks();
});
