particlesJS('particles-js', {
    particles: {
        "background": {
      "image": "url('./imagenes/Background.webp')",
      "position": "50% 50%",
      "size": "cover",
      "repeat": "no-repeat",
    },
      number: {
        value: 1500,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#9f6f96"  // Asegúrate de agregar el signo # para el color
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.5,
        random: true
      },
      size: {
        value: 1.2,
        random: false
      },
      line_linked: {
        enable: true,
        distance: 10,
        color: "#472252",
        opacity: 0.8,
        width: 0.8
      }
    },
    interactivity: {
      events: {
        onhover: {
          enable: false,
          mode: "repulse"
        },
        onscroll: {
          enable: true,
          mode: 'bounce'  // Efecto de rebote al hacer scroll
        }
      }
    },
    move: {
      direction: 'top',
      speed: 2
    },
    
  });
  