let navbar = document.querySelector('.header .navbar')

document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.toggle('active')
}

window.onscroll = () => {
  navbar.classList.remove('active')
}

document
  .querySelectorAll('.about .video-container .controls .controls-btn')
  .forEach(btn => {
    btn.onclick = () => {
      let src = btn.getAttribute('data-src')
      document.querySelector('.about .video-container .video').src = src
    }
  })

AOS.init({
  duration: 800,
  offset: 150
})
