let imgArea = document.querySelector('#img-area')
let cropped = document.querySelector('#hero-img-cropped')
let img = document.querySelector('#hero-img')

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

    if(x < 0) {
        x = x / window.innerWidth * 20
    } else {
        x = x / window.innerWidth * 20
    }

    if(y > 0) {
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
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
  });
}