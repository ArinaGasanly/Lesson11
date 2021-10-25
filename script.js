const btn = document.getElementById('btn');
const btnNone = document.getElementById('e_btn');
const square = document.getElementById('square');
const circle = document.getElementById('circle');
const text = document.getElementById('text');
const range = document.getElementById('range');
const span = document.getElementById('range-span');

btn.addEventListener('click', function () {
  if (document.getElementById('text').value === 'red') {
    btnNone.style.backgroundColor = style = "display: none;"
    return square.style.backgroundColor = 'red'
  }
  if (document.getElementById('text').value === 'yellow') {
    btnNone.style.backgroundColor = style = "display: none;"
    return square.style.backgroundColor = 'yellow'
  }
  if (document.getElementById('text').value === 'green') {
    btnNone.style.backgroundColor = style = "display: none;"
    return square.style.backgroundColor = 'green'

  } else {
    console.log(false);
  }
})

btn.addEventListener('click', function () {
  if (document.getElementById('text').value === 'red') {
    return circle.style.backgroundColor = 'red'
  }
  if (document.getElementById('text').value === 'yellow') {
    return circle.style.backgroundColor = 'yellow'
  }
  if (document.getElementById('text').value === 'green') {
    return circle.style.backgroundColor = 'green'

  } else {
    console.log(false);
  }
})

let percent = 0;
range.addEventListener('input', function (event) {
 percent++
 if(percent <= 100) {
 }
  circle.textContent = event.target.value
})

