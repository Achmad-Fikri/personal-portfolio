// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // active sections for animation on scroll
            sec.classList.add('show-animate');
        }
        // if want to use animation that repeats on scroll use this
        else {
            sec.classList.remove('show-animate');
        }

    })

    // sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animation footer on scroll
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.
        scrollHeight
    );
}


const form = document.querySelector('form');
const nameInput = document.querySelector('.firstName');
const emailInput = document.querySelector('.email');
const mobileInput = document.querySelector('.mobileNumber');
const subjectInput = document.querySelector('.subject');
const messageInput = document.querySelector('.message');

const serviceID = 'service_sofcnhi';
const templateID = 'template_ed43l8j';
const publicKey = 'IrlB1MwpLkLSN5Qei';

emailjs.init(publicKey);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputData = {
        form_name: nameInput.value,
        user_email: emailInput.value,
        mobile_number: mobileInput.value,
        subject: subjectInput.value,
        message: messageInput.value
    };
    emailjs.send(serviceID, templateID, inputData).then(
        () => {
            nameInput.value = '';
            emailInput.value = '';
            mobileInput.value = '';
            subjectInput.value = '';
            messageInput.value = '';

            alert('Your message has been sent!');
        },
        (error) => {
            console.log(error);
        }
    );
})