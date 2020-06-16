const chk = document.getElementById('chk')

const monthPrice = document.querySelectorAll('.price span:first-child')
const yearPrice = document.querySelectorAll('.price span:last-child')

chk.addEventListener('change', () => {
  for (let i = 0; i < 3; i++) {
    monthPrice[i].classList.toggle('hidden')
    yearPrice[i].classList.toggle('hidden')
  }
})
