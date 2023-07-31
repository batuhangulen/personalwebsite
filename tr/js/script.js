/* Sticky Navbar */
{
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);
}
/* Sections Active Link */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
      if(top >= offset && top < offset+height){
        navLinks.forEach(links => {
          links.classList.remove('active');
          document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        })
      }
  })
}
/* Swiper */
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grapCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
      /* ------------- EMAIL JS ------------*/
const contactForm = document.getElementById('contact-form'),
contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
e.preventDefault()
emailjs.sendForm('service_015pju8', 'template_k6hb32n', '#contact-form', '6f7yEBWQbvnnmcngS')
    .then(() => {
        //Show sent message
        contactMessage.textContent = 'Message sent succesfully!'
            //Remove Message 5 Sec
        setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000)
            //Clear Input Fields
        contactForm.reset()
    }, () => {
        //Show error message
        contactMessage.textContent = 'Message not sent! (service error)'
    })
}
contactForm.addEventListener('submit', sendEmail)