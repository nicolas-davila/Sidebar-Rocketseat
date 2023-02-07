function clicou() {
  const titulo = document.querySelector('.titulo')
  const menu = document.querySelector('nav');
  const logoImg = document.querySelector('.logo-img')
  const infoUser = document.querySelector('.info-user');
  const footerNav = document.querySelector('.footer-nav');

  titulo.classList.toggle('titulo-mover')
  logoImg.classList.toggle('logo-appear')
  menu.classList.toggle('add-nav')
  infoUser.classList.toggle('add-flex')
  footerNav.classList.toggle('padding')
}