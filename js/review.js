var mobnav = document.querySelector('.js--nav-icon');
var nav = document.querySelector('.js--main-nav');
var navel = document.querySelectorAll('.js--main-nav li a');

var i = 0;
mobnav.addEventListener('click', () => {
    var nav = document.querySelector('.js--main-nav');
    if (nav.style.display == 'none') {
        nav.style.display = 'block';
        nav.style.backgroundColor = "white";
    } else {
        nav.style.display = 'none';
    }
    if (i == 0)
        this.mobnav.click();
    i++;
})

window.onload = function () {
    this.setupskillform();
    this.updatetable();
    this.setupgtotop();
    this.i = 0;
    this.nav.style.position = "fixed";
    this.mobnav.style.position = "fixed";
    window.scrollTo(0, 0);
}

function setupskillform() {
    var Skill_KEY = 'skilldatashrey'
    if (!JSON.parse(localStorage.getItem(Skill_KEY))) localStorage.setItem(Skill_KEY, "[]");
    var skilldata = JSON.parse(localStorage.getItem(Skill_KEY));
    function savedata() {
        var name = document.getElementById("name").value;
        var skill = document.getElementById("skill").value;
        let sel = document.getElementById('level');
        var message = document.getElementById("message").value;
        var level = sel.options[sel.selectedIndex].value;
        if (!name || !sel || !skill) return;
        var e = new Array(name, skill, level, message);
        skilldata.push(e);
        localStorage.setItem(Skill_KEY, JSON.stringify(skilldata));
        updatetable();
    }
    var submit = document.getElementById("submit-btn");
    submit.addEventListener("click", savedata);
}

function updatetable() {
    var Skill_KEY = 'skilldatashrey'
    if (!JSON.parse(localStorage.getItem(Skill_KEY))) localStorage.setItem(Skill_KEY, "[]");
    var skilldata = JSON.parse(localStorage.getItem(Skill_KEY));
    var table = document.getElementById("review-table");
    table.innerHTML = "";
    for (item of skilldata) {
        var markup = `<tr>
        <td data-label="name">${item[0]}</td>
        <td data-label="skill">${item[1]}</td>
        <td data-label="level">${item[2]}</td>
        <td data-label="message">${item[3]}</td>
        </tr>`
        table.insertAdjacentHTML('beforeend', markup);
    }
}

function setupgtotop() {
    mybutton = document.querySelector(".btnScroll");
    var navmob = document.querySelector('.js--nav-icon');
    window.onscroll = function () { scrollFunction() };
    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
            navmob.style.backgroundColor = "white";
            nav.style.backgroundColor = "white";
            for (item of navel)
                item.style.color = "#fc0e41e7"
        } else {
            mybutton.style.display = "none";
            for (item of navel)
                item.style.color = "#000"
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