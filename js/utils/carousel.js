function carousel(){
    const prevBtn = document.querySelector('.prev-image');
    const nextBtn = document.querySelector('.next-image');
    const carouselItems = document.querySelectorAll('.carousel-item');
    
    let currentItemPosition = 0;

    const goToNextSlide = () => {
        if(currentItemPosition + 1 >= carouselItems.length) {
            const lastItem = document.querySelector(`.item-${currentItemPosition}`);

            currentItemPosition = 0;
            const currentItem = document.querySelector(`.item-${currentItemPosition}`);;

            setNodeAttributes(lastItem, currentItem);
        } else {
            currentItemPosition += 1;
            const lastItem = document.querySelector(`.item-${currentItemPosition - 1}`);
            const currentItem = document.querySelector(`.item-${currentItemPosition}`);
            
            setNodeAttributes(lastItem, currentItem);
        } 
    }

    const goToPreviousSlide = () => {
        if(currentItemPosition - 1 >= 0) {
            currentItemPosition -= 1;
            
            const currentItem = document.querySelector(`.item-${currentItemPosition}`);
            const lastItem = document.querySelector(`.item-${currentItemPosition + 1}`);
            
            setNodeAttributes(lastItem, currentItem);
        } else {
            const lastItem = document.querySelector(`.item-${currentItemPosition}`);
            
            currentItemPosition = carouselItems.length - 1 ;
            const currentItem = document.querySelector(`.item-${currentItemPosition}`);
            
            setNodeAttributes(lastItem, currentItem);
        } 
    }

    const setNodeAttributes = (lastItem, currentItem) => {
        lastItem.style.display = "none";
        currentItem.style.display = "block";
        
        lastItem.setAttribute('aria-hidden', 'true');
        currentItem.setAttribute('aria-hidden', 'false');
    }

    prevBtn.addEventListener('click', goToPreviousSlide);
    nextBtn.addEventListener('click', goToNextSlide);

    document.addEventListener('keydown', function(e) {
        const keyCode = e.key; // Utiliser e.key pour obtenir la touche pressée
        
        if (keyCode === 'ArrowRight') { // Touche flèche droite
            goToNextSlide();
        } else if (keyCode === 'ArrowLeft') { // Touche flèche gauche
            goToPreviousSlide();
        }
    });
}

function openImage(i){
    const carousel = document.getElementById('carousel');
    carousel.style.display = "flex";
    const carouselItems = document.querySelectorAll('.carousel-item');
    const item = document.querySelector(`.item-${i}`);
    item.style.display = 'block';

}

function closeCarousel() {
    const carousel = document.getElementById('carousel');
    carousel.style.display = "none";
    main.setAttribute("aria-hidden", "false");
    carousel.setAttribute("aria-hidden", "true");
    const carouselItems = document.querySelectorAll('.carousel-item');
    carouselItems.forEach(item => {
        item.style.display = 'none';
    });
}
