let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

document.querySelector('.next').addEventListener('click', function () {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
});

document.querySelector('.prev').addEventListener('click', function () {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
});

function updateCarousel() {
    // Remove 'active' class from all items
    items.forEach(item => item.classList.remove('active'));
    
    // Add 'active' class to the current item
    items[currentIndex].classList.add('active');
    
    // Update transform style to slide the items
    document.querySelector('.carousel-inner').style.transform = `translateX(-${currentIndex * 100}%)`;
}

const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


