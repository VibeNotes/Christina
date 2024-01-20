document.addEventListener('DOMContentLoaded', function () {
    const heroSection = document.getElementById('hero-section');

    // Add a fade-in animation to the hero section
    heroSection.style.opacity = 0;
    fadeIn(heroSection);
});

function fadeIn(element) {
    let opacity = 0;
    const interval = setInterval(function () {
        if (opacity < 1) {
            opacity += 0.02;
            element.style.opacity = opacity;
        } else {
            clearInterval(interval);
        }
    }, 20);
}
document.addEventListener('DOMContentLoaded', function () {
    // Select the header element
    const header = document.querySelector('header');

    // Add a slide-in animation to the header
    slideIn(header);

    // Add a fade-in animation to the hero section
    const heroSection = document.getElementById('hero-section');
    heroSection.style.opacity = 0;
    fadeIn(heroSection);
});

function fadeIn(element) {
    let opacity = 0;
    const interval = setInterval(function () {
        if (opacity < 1) {
            opacity += 0.02;
            element.style.opacity = opacity;
        } else {
            clearInterval(interval);
        }
    }, 20);
}

function slideIn(element) {
    element.style.transform = 'translateY(-100%)';
    element.style.opacity = 0;

    setTimeout(function () {
        element.style.transition = 'transform 0.8s ease, opacity 0.8s ease';
        element.style.transform = 'translateY(0)';
        element.style.opacity = 1;
    }, 500);
}
document.addEventListener('DOMContentLoaded', function () {
    // Select the header element
    const header = document.querySelector('h2');

    // Add a slide-in animation to the header
    slideInFromLeft(header);

    // Add a fade-in animation to the hero section
    const heroSection = document.getElementById('hero-section');
    heroSection.style.opacity = 0;
    fadeIn(heroSection);
});

function fadeIn(element) {
    let opacity = 0;
    const interval = setInterval(function () {
        if (opacity < 1) {
            opacity += 0.02;
            element.style.opacity = opacity;
        } else {
            clearInterval(interval);
        }
    }, 20);
}

function slideInFromLeft(element) {
    element.style.transform = 'translateX(-100%)';
    element.style.opacity = 0;

    setTimeout(function () {
        element.style.transition = 'transform 0.8s ease, opacity 0.8s ease';
        element.style.transform = 'translateX(0)';
        element.style.opacity = 1;
    }, 500);
}

document.addEventListener('DOMContentLoaded', function () {
    // Select the header element
    const header = document.querySelector('h2');

    // Add a slide-in animation to the header
    slideInFromLeft(header);

    // Add a fade-in animation to the hero section
    const heroSection = document.getElementById('hero-section');
    heroSection.style.opacity = 0;
    fadeIn(heroSection);

    // Select the paragraph element in the about-section
    const aboutParagraph = document.querySelector('#h2 p');

    // Add a slide-in animation to the paragraph
    slideInFromLeft(aboutParagraph);
});

function fadeIn(element) {
    let opacity = 0;
    const interval = setInterval(function () {
        if (opacity < 1) {
            opacity += 0.02;
            element.style.opacity = opacity;
        } else {
            clearInterval(interval);
        }
    }, 20);
}

function slideInFromLeft(element) {
    element.style.transform = 'translateX(-100%)';
    element.style.opacity = 0;

    setTimeout(function () {
        element.style.transition = 'transform 0.8s ease, opacity 0.8s ease';
        element.style.transform = 'translateX(0)';
        element.style.opacity = 1;
    }, 500);
}

