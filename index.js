const $name = document.querySelector('.info__name')
const $nameInput = document.querySelector('.form__name')

$nameInput.addEventListener('change', (event) => {
  $name.innerHTML = event.target.value
})
