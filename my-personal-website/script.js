// 页面完全加载完成后执行所有交互代码（固定写法，避免报错）
window.addEventListener('load', function() {
    // 1. 页面加载成功，在浏览器控制台打印提示（用于调试）
    console.log('✅ 个人网站加载成功！');

    // 2. 欢迎弹窗：访问网站时弹出欢迎语（可选，可删除）
    alert('欢迎来到我的个人主页！😊');

    // 3. 给所有项目卡片添加「鼠标悬浮变色」效果（增强交互）
    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach(item => {
        // 鼠标悬浮时
        item.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#f8f9fa'; // 背景变浅灰
            this.style.transition = 'background-color 0.3s'; // 过渡动画，更丝滑
        });
        // 鼠标离开时
        item.addEventListener('mouseout', function() {
            this.style.backgroundColor = ''; // 恢复原背景色
        });
    });
});