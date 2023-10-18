//toggle icon bar

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//scroll section

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {

        navLinks.forEach(links => 
            {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });

            // ACTIVATE SECTION FOR ANIMATION ON SCROLL

            sec.classList.add('show-animate'); 
        }

        // IF WANT TO USE ANIMATION THAT REPARTS ON SCROLL USE THIS
        else{
            sec.classList.remove('show-animate');
        }
    });
//sticky header

let header = document.querySelector('header');

header.classList.toggle('sticky', window.scrollY > 100);

// remove toggle icon and navbar when click navbar links (scroll)
let sections = document.remove('section');
let navLinks = document.remove('header nav a');
}

