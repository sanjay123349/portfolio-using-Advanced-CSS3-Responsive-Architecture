/*=========================================
        animation.js
 Advanced Portfolio Animations
==========================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=================================
            TYPING EFFECT
    =================================*/

    const typingElement = document.querySelector(".typing");

    if (typingElement) {

        const words = [
            "Web Developer",
            "Java Developer",
            "Frontend Developer",
            "AI & ML Student",
            "Programmer"
        ];

        let wordIndex = 0;
        let charIndex = 0;
        let deleting = false;

        function typeEffect() {

            const currentWord = words[wordIndex];

            if (!deleting) {

                typingElement.textContent =
                    currentWord.substring(0, charIndex++);

                if (charIndex > currentWord.length) {

                    deleting = true;

                    setTimeout(typeEffect, 1200);

                    return;
                }

            } else {

                typingElement.textContent =
                    currentWord.substring(0, charIndex--);

                if (charIndex < 0) {

                    deleting = false;

                    wordIndex++;

                    if (wordIndex >= words.length)
                        wordIndex = 0;
                }
            }

            setTimeout(typeEffect, deleting ? 50 : 120);

        }

        typeEffect();

    }

    /*=================================
        SCROLL REVEAL
    =================================*/

    const revealElements = document.querySelectorAll(
        ".service-card,.project-card,.certificate-card,.achievement-card,.testimonial-card,.contact-card,.experience-card,.info-card"
    );

    function reveal() {

        revealElements.forEach((element) => {

            const top = element.getBoundingClientRect().top;

            const windowHeight = window.innerHeight;

            if (top < windowHeight - 100) {

                element.classList.add("show");

            }

        });

    }

    window.addEventListener("scroll", reveal);

    reveal();

    /*=================================
        COUNTER ANIMATION
    =================================*/

    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {

        counter.innerText = "0";

        const updateCounter = () => {

            const target = +counter.getAttribute("data-target");

            const count = +counter.innerText;

            const increment = target / 100;

            if (count < target) {

                counter.innerText =
                    `${Math.ceil(count + increment)}`;

                setTimeout(updateCounter, 20);

            } else {

                counter.innerText = target;

            }

        };

        updateCounter();

    });

    /*=================================
      SKILL BAR ANIMATION
    =================================*/

    const progressBars =
        document.querySelectorAll(".progress span");

    function animateSkills() {

        progressBars.forEach(bar => {

            const width = bar.style.width;

            bar.style.width = "0";

            setTimeout(() => {

                bar.style.width = width;

            }, 300);

        });

    }

    animateSkills();

    /*=================================
        HERO ANIMATION
    =================================*/

    const heroText =
        document.querySelector(".hero-text");

    const heroImage =
        document.querySelector(".hero-image");

    if (heroText) {

        heroText.style.opacity = "0";
        heroText.style.transform = "translateY(50px)";

        setTimeout(() => {

            heroText.style.transition = "1s";

            heroText.style.opacity = "1";

            heroText.style.transform = "translateY(0)";

        }, 300);

    }

    if (heroImage) {

        heroImage.style.opacity = "0";
        heroImage.style.transform = "translateX(60px)";

        setTimeout(() => {

            heroImage.style.transition = "1.2s";

            heroImage.style.opacity = "1";

            heroImage.style.transform = "translateX(0)";

        }, 600);

    }

    /*=================================
        FLOATING ANIMATION
    =================================*/

    const floating =
        document.querySelector(".hero-image img");

    if (floating) {

        setInterval(() => {

            floating.classList.toggle("float");

        }, 2000);

    }

});