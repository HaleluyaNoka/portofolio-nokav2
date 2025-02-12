// Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');
const navLinks = document.querySelectorAll("#nav-menu a");
const body = document.body;
const header = document.querySelector('header');
const overlay = document.querySelector('#belakang');


hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
    overlay.classList.toggle('hidden');


    if (!navMenu.classList.contains("hidden")) {
        header.classList.add('navbar-fixed');
        body.classList.add("overflow-hidden");
    } else {
        body.classList.remove("overflow-hidden");
    }
});

navLinks.forEach(link => {
        link.addEventListener("click", function () {
        hamburger.classList.remove("hamburger-active");
        navMenu.classList.add("hidden");

        if (!navMenu.classList.contains("hidden")) {
            body.classList.add("overflow-hidden");
        } else {
            body.classList.remove("overflow-hidden");
        }
    });
});

// Outside SideBar Closed
document.addEventListener('click', e => {
    if(!hamburger.contains(e.target) && e.target !== navMenu) {
        navMenu.classList.add('hidden')
        overlay.classList.add("hidden");
        hamburger.classList.remove('hamburger-active');
        body.classList.remove('overflow-hidden');
    }
})

// Side Animation Muncul 3
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll('.muncul3');
    let lastScrollY = window.pageYOffset;

    const observer = new IntersectionObserver((entries) => {
        const currentScrollY = window.pageYOffset;
        const scrollingDown = currentScrollY > lastScrollY;

        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else if (!scrollingDown) {
                entry.target.classList.remove("show");
            }
        });

        lastScrollY = currentScrollY;
    }, { threshold: 0.5 });

    elements.forEach((element) => {
        observer.observe(element);
    });
});

// Side Animation Muncul 4
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll('.muncul4');
    let lastScrollY = window.pageYOffset;

    const observer = new IntersectionObserver((entries) => {
        const currentScrollY = window.pageYOffset;
        const scrollingDown = currentScrollY > lastScrollY;

        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else if (!scrollingDown) {
                entry.target.classList.remove("show");
            }
        });

        lastScrollY = currentScrollY;
    }, { threshold: 0.5 });

    elements.forEach((element) => {
        observer.observe(element);
    });
});

// Pop Up Image
const certificates = [
    { button: "#sertif1", popup: "#popup1", close: "#close1" },
    { button: "#sertif2", popup: "#popup2", close: "#close2" },
    { button: "#sertif3", popup: "#popup3", close: "#close3" },
    { button: "#sertif4", popup: "#popup4", close: "#close4" },
    { button: "#sertif5", popup: "#popup5", close: "#close5" }
  ];
  
  certificates.forEach(({ button, popup, close }) => {
    const btn = document.querySelector(button);
    const pop = document.querySelector(popup);
    const closeBtn = document.querySelector(close);
  
    btn.addEventListener("click", function () {
      pop.classList.remove("hidden");
      body.classList.add("tidak-scroll");
    });
  
    closeBtn.addEventListener("click", function () {
      pop.classList.add("hidden");
      
      const anyPopupOpen = certificates.some(({ popup }) => 
        !document.querySelector(popup).classList.contains("hidden")
      );
  
      if (!anyPopupOpen) {
        body.classList.remove("tidak-scroll");
      }
    });
});

// Preloader
const loader = document.getElementById("preloader");
setTimeout(() => {
    loader.style.display = "none";
}, 3000);

// Dark Mode
const html = document.querySelector('html');
const swicth = document.querySelector('#theme-switch');

swicth.addEventListener('click', function() {
    html.classList.toggle('dark');
});

// Change Icon Dark Mode
function toggleFavicon() {
    const favicon = document.getElementById("favicon-icon");
    const isDarkMode = document.documentElement.classList.contains("dark");
    favicon.href = isDarkMode ? "../img/Icon2.png" : "../img/Icon.png";
}

new MutationObserver(toggleFavicon).observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
