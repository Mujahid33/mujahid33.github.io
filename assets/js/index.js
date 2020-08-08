window.addEventListener('scroll', () => {
  let scroll = document.querySelector('.scrollTop');
  scroll.classList.toggle('active', window.scrollY > 200)
})

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}