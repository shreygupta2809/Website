var mobnav = document.querySelector('.js--nav-icon');
var nav = document.querySelector('.js--main-nav');
var i = 0
mobnav.addEventListener('click', () => {
    if (nav.style.display == 'none') {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
    if (i == 0)
        this.mobnav.click();
    i++;
})

window.onload = function () {
    this.setupgtotop();
    this.displaycount();
    this.i = 0;
    this.nav.style.position = "fixed";
    this.mobnav.style.position = "fixed";
    window.scrollTo(0, 0);
}

function setupgtotop() {
    mybutton = document.querySelector(".btnScroll");
    var nav = document.querySelector('.js--main-nav');
    var navmob = document.querySelector('.js--nav-icon');
    var navel = document.querySelectorAll('.js--main-nav li a');
    window.onscroll = function () { scrollFunction() };
    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
            nav.style.backgroundColor = "white";
            navmob.style.backgroundColor = "white";
            for (item of navel) {
                item.style.color = "#fc0e41e7";
            }
        } else {
            nav.style.background = "none";
            mybutton.style.display = "none";
            navmob.style.background = "none";
            for (item of navel) {
                item.style.color = "#000"
            }
        }
    }
    mybutton.addEventListener("click", topfunc);
}

function topfunc() {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth"
    })
}

function displaycount() {
    var visited = parseInt(window.localStorage.getItem("visitedshrey"));
    if (!visited) {
        visited = 1;
    }
    window.localStorage.setItem("visitedshrey", visited + 1);
    if (visited) {
        var el = document.querySelector('.count');
        el.innerHTML = visited;
    }
}