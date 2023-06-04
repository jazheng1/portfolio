let imgArea = document.querySelector('#img-area')
let cropped = document.querySelector('#hero-img-cropped')
let img = document.getElementById('hero-img')

// make hero image pop
function dissapear(el) {
    el.style.visibility = 'hidden'
}

function appear(el) {
    el.style.visibility = "visible"
}

imgArea.addEventListener("mouseover", () => {
    cropped.style.visibility = "visible"
});

imgArea.addEventListener("mouseleave", () => {
    dissapear(cropped)
});

// make hero image jitter
window.addEventListener('mousemove', (e) => {
    x = e.clientX - window.innerWidth / 2
    y = e.clientY - window.innerHeight / 2

    if (x < 0) {
        x = x / window.innerWidth * 20
    } else {
        x = x / window.innerWidth * 20
    }

    if (y > 0) {
        y = y / window.innerHeight * 20
    } else {
        y = y / window.innerHeight * 20
    }

    img.style.setProperty('--mouse-x', `${x}px`)
    img.style.setProperty('--mouse-y', `${y}px`)
});

// highlight part of page you are on with navbar
var btns = document.getElementsByClassName("navbar-item");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";
    });
}

// fade and unfade effect
function fade(element) {
    var op = 1;
    var timer = setInterval(function () {
        if (op <= 0.1) {
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}

function unfade(element) {
    var op = 0.1;
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1) {
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}

//page load effect
function reveal() {
    var reveals = document.querySelectorAll(".reveal")

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("visible");
          } else {
            reveals[i].classList.remove("visible");
          }
      }

      
}

window.addEventListener("scroll", reveal);

reveal()