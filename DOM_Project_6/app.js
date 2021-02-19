const navToggle = document.querySelector('.nav-toggle');

const links = document.querySelector('.links');
const socialLinks = document.querySelector('.social-links');

navToggle.addEventListener('click', showToggle);

function showToggle() {
    console.log(links.classList);
    if(links.classList.contains('show-links')){
        links.classList.remove('show-links');
        socialLinks.classList.remove('show-social-links');
    }
    else {
        links.classList.add('show-links');
        socialLinks.classList.add('show-social-links');
    }
}