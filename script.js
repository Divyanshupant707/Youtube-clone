document.addEventListener('DOMContentLoaded', function() {
    // Toggle sidebar on mobile
    const menuBtn = document.querySelector('.menu-btn');
    const sidebar = document.querySelector('.sidebar');
    
    menuBtn.addEventListener('click', function() {
        sidebar.classList.toggle('open');
    });
    
    // Category buttons active state
    const categoryBtns = document.querySelectorAll('.category-btn');
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            categoryBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Dark mode toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    darkModeToggle.addEventListener('change', function() {
        document.body.classList.toggle('dark-mode', this.checked);
        localStorage.setItem('darkMode', this.checked);
    });
    
    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
        darkModeToggle.checked = true;
    }
    
    // Modal functionality
    const modal = document.getElementById('advancedModal');
    const closeBtn = document.querySelector('.close-btn');
    
    // Open modal when clicking notifications button
    const notificationsBtn = document.querySelector('.notifications-btn');
    notificationsBtn.addEventListener('click', function(e) {
        // Don't open modal if clicking the notification bell icon directly
        if (e.target.classList.contains('fa-bell')) {
            modal.style.display = 'flex';
        }
    });
    
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Video card click handler
    const videoCards = document.querySelectorAll('.video-card');
    videoCards.forEach(card => {
        card.addEventListener('click', function() {
            // In a real app, this would navigate to a video page
            alert('Video playback would start here in a real implementation');
        });
    });
    
    // Search functionality
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');
    
    function performSearch() {
        const query = searchInput.value.trim();
        if (query) {
            alert(`Searching for: ${query}`);
            // In a real app, this would trigger a search API call
        }
    }
    
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    // Voice search
    const voiceSearchBtn = document.querySelector('.voice-search-btn');
    voiceSearchBtn.addEventListener('click', function() {
        alert('Voice search would activate here');
    });
    
    // Simulate loading more videos when scrolling to bottom
    let isLoading = false;
    window.addEventListener('scroll', function() {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 && !isLoading) {
            isLoading = true;
            console.log('Loading more videos...');
            // Simulate API delay
            setTimeout(() => {
                // In a real app, this would append new videos to the grid
                console.log('Videos loaded');
                isLoading = false;
            }, 1000);
        }
    });
    
    // Playback speed and quality settings (demo only)
    const playbackSpeed = document.getElementById('playbackSpeed');
    const videoQuality = document.getElementById('videoQuality');
    
    playbackSpeed.addEventListener('change', function() {
        console.log(`Playback speed set to: ${this.value}x`);
    });
    
    videoQuality.addEventListener('change', function() {
        console.log(`Video quality set to: ${this.value}`);
    });
    
    // Enhanced thumbnail hover effects
    videoCards.forEach(card => {
        const thumbnail = card.querySelector('.thumbnail');
        const originalSrc = thumbnail.src;
        
        // In a real app, we might load a hover thumbnail here
        // const hoverSrc = originalSrc.replace('maxresdefault', 'hqdefault');
        // const hoverImage = new Image();
        // hoverImage.src = hoverSrc;
        
        card.addEventListener('mouseenter', function() {
            card.style.zIndex = '10';
        });
        
        card.addEventListener('mouseleave', function() {
            card.style.zIndex = '1';
        });
    });
    
    // Responsive adjustments
    function handleResize() {
        if (window.innerWidth > 768 && sidebar.classList.contains('open')) {
            sidebar.classList.remove('open');
        }
    }
    
    window.addEventListener('resize', handleResize);
});