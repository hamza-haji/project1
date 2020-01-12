/*$(function () {
    var winH=$(window).height(),
    upperH=$('.upper-bar').innerHeight(),
    navH=$('.navbar').innerHeight();
    //$('.slider, .carousel-item').height(winH - (upperH + navH));  
});*/

var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
    },
});
AOS.init({
    duration: 2000,
});
// Regular map
function initMap() {
    var location = { lat: 33.971588, lng: -6.849813 };
    var map = new google.maps.Map(document.getElementById("map_location"), {
        zoom: 10,
        center: location
    });
}
//fixed top nav
$(window).on('scroll', function() {
    if ($(window).scrollTop()) {
        $('.nav-bar').addClass('fixed-top');
    } else {
        $('.nav-bar').removeClass('fixed-top');
    }
});