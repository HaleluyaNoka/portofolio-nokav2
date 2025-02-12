function loadParticles() {
  const isDarkMode = document.documentElement.classList.contains("dark");

  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": isDarkMode ? "#38bdf8" : "#9333ea"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": isDarkMode ? "#38bdf8" : "#9333ea"
        }
      },
      "opacity": {
        "value": 0.5
      },
      "size": {
        "value": 5,
        "random": true
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": isDarkMode ? "#38bdf8" : "#9333ea",
        "opacity": 0.5,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      }
    },
    "retina_detect": true
  });
}

loadParticles();

const observer = new MutationObserver(() => {
  document.getElementById("particles-js").innerHTML = "";
  loadParticles();
});

observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
