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

// slider effect to image track 
const track = document.getElementById("image-track");

const handleOnDown = e => track.dataset.mouseDownAt = e.clientX

const handleOnUp = () => {
    track.dataset.mouseDownAt = "50";
    track.dataset.prevPercentage = track.dataset.percentage
}

const handleOnMove = e => {
    if (track.dataset.mouseDownAt === "50") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2
    let nextPercentage = 0;
    const percentage = (mouseDelta / maxDelta) * 100
    const nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) - percentage

    // scroll left
    if(mouseDelta < 0) {
        nextPercentage = Math.min(Math.max(nextPercentageUnconstrained, 0), 50);

        for (const image of track.getElementsByClassName("image")) {
            image.animate({
                objectPosition: `${100 + (nextPercentage - 50)}% center`
            }, { duration: 1200, fill: "forwards" });
            console.log(image.style.objectPosition)
        }
    // scroll right
    } else {
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -50);

        for (const image of track.getElementsByClassName("image")) {
            image.animate({
                objectPosition: `${100 + (nextPercentage - 50)}% center`
            }, { duration: 1200, fill: "forwards" });
        }
    }

    track.dataset.percentage = nextPercentage;
    track.animate({
        transform: `translate(${nextPercentage}%, -50%)`
    }, { duration: 1200, fill: "forwards" });

}

window.onmousedown = e => handleOnDown(e);

window.ontouchstart = e => handleOnDown(e.touches[0]);

window.onmouseup = e => handleOnUp(e);

window.ontouchend = e => handleOnUp(e.touches[0]);

window.onmousemove = e => handleOnMove(e);

window.ontouchmove = e => handleOnMove(e.touches[0]);

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
