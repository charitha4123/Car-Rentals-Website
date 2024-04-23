menubar.onclick=() => {
    menubar.classlist.toggle('bx-x');
    navbar.classlist.toggle('active');
}
window.onscroll = () => { 
    menubar.classlist.remove('bx-x');
    navbar.classlist.remove('active');
}
const sr=ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true}
)
sr.reveal('.text', { delay: 100, origin: 'top' });
sr.reveal('.form-container form', { delay: 400, origin: 'left' });
sr.reveal('.heading', { delay: 400, origin: 'top' });
sr.reveal('.service-container .box', { delay: 300, origin: 'top' });
sr.reveal('.availableOnRent .box', { delay: 300, origin: 'top' });
sr.reveal('.available-container .box', { delay: 100, origin: 'top' });
sr.reveal('.reviews .box', { delay: 200, origin: 'top' });
sr.reveal('.newsletter .box', { delay: 200, origin: 'bottom' });