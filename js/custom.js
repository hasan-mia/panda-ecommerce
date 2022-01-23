/* 
 * Author: Hasan
 * Github: https://github.com/hasanrafi69
 * Email: hasanrafi69@gmail.com
 * Mobile: +880-161-782323
 */
const button = document.getElementById('menu-button');
const menu = document.getElementById('menu');
button.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});
// End Navbar

var swiper = new Swiper('.mySwiper', {
    spaceBetween: 10,
    centeredSlides: true,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});