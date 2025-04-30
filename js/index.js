document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded'); // Debug

    console.log('Attempting to find theme button...');
    const themeButtonTest = document.getElementById('theme-mode');
    console.log('Theme button found?', themeButtonTest ? 'Yes' : 'No');

    if (themeButtonTest) {
        console.log('Button position:', {
            top: themeButtonTest.getBoundingClientRect().top,
            right: themeButtonTest.getBoundingClientRect().right
        });
        console.log('Button style:', {
            display: window.getComputedStyle(themeButtonTest).display,
            visibility: window.getComputedStyle(themeButtonTest).visibility,
            opacity: window.getComputedStyle(themeButtonTest).opacity,
            zIndex: window.getComputedStyle(themeButtonTest).zIndex
        });
    }
    const navMenuOption = document.querySelector('.nav-menu-option');
    const carousels = document.querySelectorAll('.carousel'); 
    let scrollSpeed = 2;  

    carousels.forEach(carousel => { 
        let isHovering = false; 
        let scrollDirection = ''; 
        
        carousel.addEventListener('mousemove', (e) => { 
            const rect = carousel.getBoundingClientRect(); 
            const midX = rect.width / 2; 

            if (e.clientX < rect.left + midX / 2) { 
                scrollDirection = 'left'; 
            } else if (e.clientX > rect.left + 1.5 * midX) { 
                scrollDirection = 'right'; 
            } else { 
                scrollDirection = ''; 
            } 
            isHovering = true; 
        }); 
        
        carousel.addEventListener('mouseleave', () => { 
            isHovering = false; 
        }); 

        const scrollCarousel = () => { 
            if (isHovering) { 
                if (scrollDirection === 'left' && carousel.scrollLeft > 0) { 
                    carousel.scrollLeft -= scrollSpeed;
                } else if (scrollDirection === 'right' && carousel.scrollLeft < carousel.scrollWidth - carousel.clientWidth) { 
                    carousel.scrollLeft += scrollSpeed; 
                } 
            } 
            requestAnimationFrame(scrollCarousel); 
        }; 
        scrollCarousel(); 
    });

    const themeButton = document.getElementById('theme-mode');
    if (!themeButton) {
        console.error('Theme button not found');
        return;
    }
    
    console.log('Theme button found');
    
    themeButton.addEventListener('click', function() {
        console.log('Theme button clicked');
        
        // Directly toggle the classes without checking
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');
        
        // Log the current mode for debugging
        const currentMode = document.body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
        console.log('Current mode:', currentMode);
        
        // Update Notion icon if needed
        const imgNotion = document.getElementById("notion");
        if (imgNotion) {
            imgNotion.src = document.body.classList.contains('dark-mode')
                ? 'https://img.icons8.com/?size=100&id=uVERmCBZZACL&format=png&color=ffffff'
                : 'https://img.icons8.com/?size=100&id=uVERmCBZZACL&format=png&color=000000';
        }
    });
    
    // Clean up any double initialization
    const existingButtons = document.querySelectorAll('#theme-mode');
    if (existingButtons.length > 1) {
        console.warn('Multiple theme buttons found, cleaning up duplicates');
        for (let i = 1; i < existingButtons.length; i++) {
            existingButtons[i].remove();
        }
    }
});

