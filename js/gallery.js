var mobnav = document.querySelector('.js--nav-icon');
var nav = document.querySelector('.js--main-nav');
var navel = document.querySelectorAll('.js--main-nav li a');
0
mobnav.addEventListener('click', () => {
    var nav = document.querySelector('.js--main-nav');
    if (nav.style.display == 'none') {
        nav.style.display = 'block';
        nav.style.backgroundColor = "white";
        for (item of navel)
            item.style.color = "#fc0e41e7"
    } else {
        nav.style.display = 'none';
    }
    if (i == 0)
        this.mobnav.click();
    i++;
})

window.onload = function () {
    this.i = 0;
    this.nav.style.position = "fixed";
    this.mobnav.style.position = "fixed";
    window.scrollTo(0, 0);
}

var slide = document.querySelector('.slide');
var src = ['../img/photo-lavender-flower-field-under-pink-sky-1166209-min.jpg',
    '../img/scenic-photo-of-sea-under-purple-sky-2531314-min.jpg',
    '../img/scenic-view-of-mountain-during-dawn-1881621-min.jpg',
    '../img/silhouette-of-mountains-1323550-min.jpg',
    '../img/scenic-view-of-ocean-during-dawn-2144922-min.jpg'
]

var j = 1;
function slideshow() {
    var s = src[j];
    slide.src = s;
    j = (j + 1) % 5;
}