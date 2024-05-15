function toggleMenu() {
    const menuLinks = document.querySelector('.menu-links');
    menuLinks.classList.toggle('open');
    const icon = document.querySelector('.hamburger-icon');
    icon.classList.toggle('open');
}