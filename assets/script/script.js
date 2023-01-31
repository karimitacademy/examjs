const inpTag = document.querySelector('.inp__title')
const svapTag = document.querySelector('.svap')
const saveBtnTag = document.querySelector('.save')
const NamesTag = document.querySelector('.names')

let arrName = JSON.parse(localStorage.getItem('localList')) 

const showNames = () => {
if (arrName) {
  arrName.forEach(({ name }, i) => {
      NamesTag.innerHTML += `${i + 1} : ${name}<br>`
  })
}
}

function byField(field) {
return(a, b) => a[field] > b[field] ? 1 : -1;
}

function byFieldRev(field) {
return(a, b) => b[field] > a[field] ? 1 : -1;
}

svapTag.addEventListener('click', (event) => {
event.preventDefault()
if (event.target.dataset.id == 1) {
  arrName.sort(byField('name'))
  event.target.dataset.id = 2
} else {
  arrName.sort(byFieldRev('name'))
  event.target.dataset.id = 1
}

NamesTag.innerHTML = ''
arrName.forEach(({ name }, i) => {
  NamesTag.innerHTML += `${i + 1} : ${name}<br>`
}) 
})

saveBtnTag.addEventListener('click', (event) => {

event.preventDefault()
let nameValue = inpTag.value.toLowerCase().trim()

if (nameValue) {

  if (!arrName) {
      arrName = []
  }

  let obj = { name:nameValue }
  const { name } = obj 
  arrName.push(obj)
  localStorage.setItem('localList', JSON.stringify(arrName))
  inpTag.value = ''
  NamesTag.innerHTML = ''
  showNames()

} else {
  alert('Заполни поле ввода')
}
})

showNames()





