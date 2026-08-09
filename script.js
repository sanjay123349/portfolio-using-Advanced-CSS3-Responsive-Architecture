/*=========================================
        script.js
 Advanced Portfolio Website
==========================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=========================
        MOBILE MENU
    =========================*/

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if(menuToggle){

        menuToggle.addEventListener("click",()=>{

            navLinks.classList.toggle("active");

            menuToggle.classList.toggle("active");

        });

    }

    /*=========================
      CLOSE MENU AFTER CLICK
    =========================*/

    document.querySelectorAll(".nav-links a").forEach(link=>{

        link.addEventListener("click",()=>{

            navLinks.classList.remove("active");

            if(menuToggle){

                menuToggle.classList.remove("active");

            }

        });

    });

    /*=========================
        STICKY HEADER
    =========================*/

    const header = document.querySelector("header");

    window.addEventListener("scroll",()=>{

        if(window.scrollY>50){

            header.classList.add("sticky");

        }else{

            header.classList.remove("sticky");

        }

    });

    /*=========================
        ACTIVE NAV LINK
    =========================*/

    const sections=document.querySelectorAll("section");
    const navItems=document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll",()=>{

        let current="";

        sections.forEach(section=>{

            const sectionTop=section.offsetTop-120;

            if(window.pageYOffset>=sectionTop){

                current=section.getAttribute("id");

            }

        });

        navItems.forEach(link=>{

            link.classList.remove("active");

            if(link.getAttribute("href").includes(current)){

                link.classList.add("active");

            }

        });

    });

    /*=========================
        SMOOTH SCROLL
    =========================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

        anchor.addEventListener("click",function(e){

            e.preventDefault();

            const target=document.querySelector(this.getAttribute("href"));

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });

    /*=========================
      BACK TO TOP BUTTON
    =========================*/

    const backTop=document.querySelector(".back-to-top");

    window.addEventListener("scroll",()=>{

        if(window.scrollY>400){

            backTop.classList.add("active");

        }else{

            backTop.classList.remove("active");

        }

    });

    /*=========================
        CONTACT FORM
    =========================*/

    const form=document.querySelector("form");

    if(form){

        form.addEventListener("submit",(e)=>{

            e.preventDefault();

            const name=document.getElementById("name");
            const email=document.getElementById("email");
            const message=document.getElementById("message");

            if(
                name.value.trim()==="" ||
                email.value.trim()==="" ||
                message.value.trim()===""
            ){

                alert("Please fill all fields.");

                return;

            }

            alert("Message Sent Successfully!");

            form.reset();

        });

    }

    /*=========================
      FOOTER CURRENT YEAR
    =========================*/

    const year=document.querySelector("#year");

    if(year){

        year.textContent=new Date().getFullYear();

    }

    /*=========================
        LOADER
    =========================*/

    window.addEventListener("load",()=>{

        const loader=document.querySelector(".loader");

        if(loader){

            loader.style.opacity="0";

            setTimeout(()=>{

                loader.style.display="none";

            },500);

        }

    });

});