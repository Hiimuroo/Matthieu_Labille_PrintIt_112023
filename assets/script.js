    document.addEventListener('DOMContentLoaded', function () {
        const slides = [
            {
                "image": "slide1.jpg",
                "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
            },
            {
                "image": "slide2.jpg",
                "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
            },
            {
                "image": "slide3.jpg",
                "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
            },
            {
                "image": "slide4.png",
                "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
            }
        ];

        var leftArrow = document.querySelector('#banner .arrow_left');
        var rightArrow = document.querySelector('#banner .arrow_right');
        var currentIndex = 0;

        function updateCarousel() {
			let currentSlide = slides[currentIndex];
			let bannerImg = document.querySelector('#banner .banner-img');
			let tagLine = document.querySelector('#banner p');
			let dots = document.querySelectorAll('#banner .dots .dot');
		
			bannerImg.onload = function() {
				tagLine.innerHTML = currentSlide.tagLine;
				dots.forEach((dot, index) => {
					if (index === currentIndex) {
						dot.classList.add('dot_selected');
					} 
					
					else {
						dot.classList.remove('dot_selected');
					}
				});
			};
		
			bannerImg.src = "./assets/images/slideshow/" + currentSlide.image;
		}

        leftArrow.addEventListener('click', function () {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            updateCarousel();
            console.log('Clic sur la flèche gauche');
        });

        rightArrow.addEventListener('click', function () {
            currentIndex = (currentIndex + 1) % slides.length;
            updateCarousel();
            console.log('Clic sur la flèche droite');
        });

        updateCarousel();
    });