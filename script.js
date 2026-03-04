document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.scroll-wrapper');
    const leftPanel = document.getElementById('left-panel');

    window.addEventListener('scroll', () => {
     
        let rect = wrapper.getBoundingClientRect();
        
        
        let scrolled = -rect.top;
        
        
        let maxScroll = window.innerHeight; 

        
        if (scrolled < 0) scrolled = 0;
        if (scrolled > maxScroll) scrolled = maxScroll;

        
        let progress = scrolled / maxScroll;

        
        let newWidth = 50 - (progress * 50);
        
        
        leftPanel.style.width = newWidth + '%';
    });
});