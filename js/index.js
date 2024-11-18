document.addEventListener('DOMContentLoaded', () => {
    const navBtn = document.querySelector('.nav-btn');
    const navMenuOption = document.querySelector('.nav-menu-option');

    navBtn.addEventListener('click', () => {
        const isExpanded = navBtn.getAttribute('aria-expanded') === 'true' || false;
        navBtn.setAttribute('aria-expanded', !isExpanded);
        navMenuOption.classList.toggle('show');
    });

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
});

document.getElementById('theme-mode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode')
});