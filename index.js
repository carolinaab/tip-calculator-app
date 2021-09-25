const reset = document.getElementById('reset')
const bill = document.getElementById('bill')
const people = document.getElementById('people-number')
const empty = document.getElementById('empty')
const custom = document.getElementById('custom')
const customText = document.getElementById('custom-text')
const label = document.getElementById('label')
const options = document.querySelectorAll('.options')
const content = document.getElementById('content')
const fields = document.querySelectorAll('.fields')

const getBill = () => {
  let selectedVal;
  for(let i = 0; i<= options.length -1; i++) {
    if(options[i].name && options[i].checked) {
      selectedVal = options[i].value
    }
}
if(selectedVal === 'on') {
  return ((bill.value * (customText.value/ 100))/ people.value).toFixed(2).toLocaleString()
} else {
  return ((bill.value * selectedVal)/ people.value).toFixed(2).toLocaleString()
}
}

const getResultTotal = () => {
  let selectedVal;
  for(let i = 0; i<= options.length -1; i++) {
    if(options[i].name && options[i].checked) {
      selectedVal = options[i].value
    }
}
const resultBillText = (( bill.value * (customText.value / 100)) / people.value)
const resultBill = (( bill.value * selectedVal) / people.value)
const resultTotal = bill.value / people.value
console.log(new Intl.NumberFormat().format(resultTotal))

if(selectedVal === 'on') {
  return  (resultBillText + resultTotal).toFixed(2)
} else {
  return (resultBill + resultTotal).toFixed(2)

}
}

content.addEventListener('keydown', (e) => {

 if(e.keyCode === 13) {
  if(people.value === '' || (customText.value === '' && custom.checked)) {
    people.style.border = '1px solid red'
    empty.style.display= 'block'

  } else {
    document.getElementById("result-bill").innerHTML = `$ ${getBill()}`;
    document.getElementById("result-total").innerHTML = `$ ${getResultTotal()}`;

    people.style.border = '1px solid #1EC2AA'
    empty.style.display = 'none'

  }
  }

})

options.forEach(item => {
  item.addEventListener('click', event => {
    if(item.value === 'on') {
      customText.style.display = 'block'
      label.style.display = 'none'
    } else {
      customText.style.display = 'none'
      label.style.display = 'block'
    }
  })
})


reset.addEventListener('click', () => {
  document.getElementById("result-bill").innerHTML = '$0,0'
  document.getElementById("result-total").innerHTML = '$0,0'
  customText.style.display = 'none'
  label.style.display ='block'
  bill.value = ''
  people.value = ''

})