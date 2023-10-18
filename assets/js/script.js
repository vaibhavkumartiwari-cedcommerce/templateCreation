// Header animaion
const elementToChange = document.getElementById("header");
let lastScrollPosition = 50;
function addOrRemoveClassOnScroll() {
    const currentScrollPosition = window.scrollY;
    if (currentScrollPosition > lastScrollPosition) {
        elementToChange.classList.add("scrolled");
    } else {
        elementToChange.classList.remove("scrolled");
    }
    lastScrollPosition = currentScrollPosition;
}
window.addEventListener("scroll", addOrRemoveClassOnScroll);



// For parallex effect on hero section
const hero = document.getElementById("hero");
function parallax() {
    window.onscroll = function () {
        var speedback = 4.0;
        var backX = -window.pageXOffset / speedback;
        var backY = -window.pageYOffset / speedback;
        hero.style.backgroundPosition = backX + "px " + backY + "px";
    }
}
parallax();


// Theme Swicther
const btnRound = document.getElementById("theme-switcher");
const body = document.body;

// Function to set a cookie
function setCookie(name, value) {
    document.cookie = name + '=' + value;
}

// Function to get a cookie
function getCookie(name) {
    const cookies = document.cookie.split('; ');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].split('=');
        if (cookie[0] === name) {
            return cookie[1];
        }
    }
    return null;
}

const themePreference = getCookie('themePreference');
if (themePreference === 'dark') {
    body.classList.add('mode-dark');
}

// Add a click event listener to the button
btnRound.addEventListener('click', function () {
    body.classList.toggle('mode-dark');
    if (body.classList.contains('mode-dark')) {
        setCookie('themePreference', 'dark');
    } else {
        setCookie('themePreference', 'light');
    }
});

// Sidebar Swicther
const btnHam = document.getElementById("btn-hamburger");
const asideOverlay = document.getElementById("aside-overlay");
btnHam.addEventListener('click', function () {
    const body = document.body;
    body.classList.toggle('sidebar-expnaded');
});
asideOverlay.addEventListener('click', function () {
    const body = document.body;
    body.classList.remove('sidebar-expnaded');
});


// FAQ accordion
const accordionItems = document.querySelectorAll('.accordion__item');
accordionItems.forEach(item => {
    const header = item.querySelector('.accordion__item-header');
    const content = item.querySelector('.accordion__item-content');

    header.addEventListener('click', () => {
        accordionItems.forEach(item => {
            const otherHeader = item.querySelector('.accordion__item-header');
            const otherContent = item.querySelector('.accordion__item-content');
            if (otherContent !== content) {
                otherHeader.classList.remove('active');
                otherContent.style.maxHeight = null;
            }
        });

        header.classList.toggle('active');
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});

// Scroll to Top
const scrollToTopButton = document.getElementById("btn-scrollTop");
scrollToTopButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
window.addEventListener("scroll", function () {
    if (window.pageYOffset < 200) {
        scrollToTopButton.style.opacity = "0";
        scrollToTopButton.style.visibility = "hidden";
    } else {
        scrollToTopButton.style.opacity = "1";
        scrollToTopButton.style.visibility = "visible";
    }
});


// Mouse Follower
const follower = document.querySelector('.follower');
const aTags = document.querySelectorAll('a, button ,.accordion__item-header,#theme-swicther');
document.addEventListener('mousemove', (e) => {
    follower.style.left = e.clientX - 10 + 'px';
    follower.style.top = e.clientY - 10 + 'px';
    const isCursorOverA = Array.from(aTags).some((a) => {
        const aRect = a.getBoundingClientRect();
        return e.clientX >= aRect.left && e.clientX <= aRect.right &&
            e.clientY >= aRect.top && e.clientY <= aRect.bottom;
    });
    isCursorOverA ? follower.classList.add('highlighted') : follower.classList.remove('highlighted');

});


// Tabs
function showTab(tabId, button) {
    const tabContents = document.getElementsByClassName('tab-content');
    const tabButtons = document.getElementsByClassName('tab-button');
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove('active');
        tabButtons[i].classList.remove('active');
    }
    const selectedTab = document.getElementById(tabId);
    selectedTab.classList.add('active');
    button.classList.add('active');
}

const tabButtons = document.getElementsByClassName('tab-button');
for (let i = 0; i < tabButtons.length; i++) {
    tabButtons[i].addEventListener('click', function () {
        showTab('tab' + (i + 1), this);
    });
}
showTab('tab1', tabButtons[0]);

// Theme changer
const colorPicker = document.getElementById('colorPicker');
colorPicker.addEventListener('input', function () {
    const selectedColor = colorPicker.value;
    document.documentElement.style.setProperty('--primary-color', selectedColor);
});


// JQUERY CODE
// Partners slider
$(document).ready(function () {
    $('.partners .owl-carousel').owlCarousel({
        loop: true,
        margin: 120,
        nav: false,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 3,
                margin: 60,
            },
            1000: {
                items: 6
            }
        }
    })

    $('.testimonials .owl-carousel').owlCarousel({
        loop: true,
        margin: 50,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })

    // Aside Menu Toggle
    $(".navigation__item--hasDropdown a").on("click", function () {
        $(".aside .navigation li a").removeClass("active");
        $(this).toggleClass("active");
        $(this).siblings(".dropdown").slideToggle(100);
    })

})
