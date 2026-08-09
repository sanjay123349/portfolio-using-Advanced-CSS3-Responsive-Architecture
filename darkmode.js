/*=========================================
        darkmode.js
     Theme Toggle System
==========================================*/

document.addEventListener("DOMContentLoaded", () => {

    const themeButton = document.getElementById("theme-toggle");
    const body = document.body;
    const icon = themeButton ? themeButton.querySelector("i") : null;

    /*=========================
        LOAD SAVED THEME
    =========================*/

    const savedTheme = localStorage.getItem("portfolio-theme");

    if(savedTheme === "dark"){

        body.classList.add("dark-theme");

        if(icon){

            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");

        }

    }

    /*=========================
        TOGGLE THEME
    =========================*/

    if(themeButton){

        themeButton.addEventListener("click",()=>{

            body.classList.toggle("dark-theme");

            if(body.classList.contains("dark-theme")){

                localStorage.setItem("portfolio-theme","dark");

                if(icon){

                    icon.classList.remove("fa-moon");
                    icon.classList.add("fa-sun");

                }

            }else{

                localStorage.setItem("portfolio-theme","light");

                if(icon){

                    icon.classList.remove("fa-sun");
                    icon.classList.add("fa-moon");

                }

            }

        });

    }

});