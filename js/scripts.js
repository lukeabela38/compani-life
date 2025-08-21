/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("compani-form");
    const message = document.getElementById("form-message");
  
    if (!form) return; // safety check
  
    const fadeOut = (el, seconds = 5) => {
      setTimeout(() => {
        el.style.transition = "opacity 1s ease";
        el.style.opacity = 0;
        setTimeout(() => {
          el.innerHTML = "";
          el.style.opacity = 1; // reset for future messages
        }, 1000);
      }, seconds * 1000);
    };
  
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const data = new FormData(form);
  
      try {
        const response = await fetch(form.action, {
          method: form.method,
          body: data,
          headers: { Accept: "application/json" },
        });
  
        if (response.ok) {
          message.innerHTML =
            '<div class="alert alert-success">✅ Thanks for joining Compani™! You’re now part of the disruption.</div>';
          form.reset();
        } else {
          message.innerHTML =
            '<div class="alert alert-danger">❌ Oops! Something went wrong. Please try again.</div>';
        }
      } catch (error) {
        message.innerHTML =
          '<div class="alert alert-danger">⚠️ Network error. Please check your connection.</div>';
      }
  
      fadeOut(message, 6); // message disappears after 6 seconds
    });
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const counterElement = document.getElementById("signupCount");
  
    // starting fake count
    let count = 527;  
  
    // animate initial increase (simulate recent growth)
    let target = count + Math.floor(Math.random() * 20) + 5; // +5 to +25
    let current = count;
  
    function animateCounter() {
      if (current < target) {
        current++;
        counterElement.textContent = current;
        setTimeout(animateCounter, 50);
      }
    }
    animateCounter();
  
    // keep it growing slowly over time (fake "live signups")
    setInterval(() => {
      current++;
      counterElement.textContent = current;
    }, 10000); // every 10s
  });
  