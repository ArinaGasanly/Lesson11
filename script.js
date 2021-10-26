const btn = document.getElementById('btn');
const btnNone = document.getElementById('e_btn');
const square = document.getElementById('square');
const circle = document.getElementById('circle');
const text = document.getElementById('text');
const range = document.getElementById('range');
const span = document.getElementById('range-span');

btn.addEventListener('click', function () {
  if (document.getElementById('text').value === 'red') {
    return square.style.backgroundColor = 'red'
  }
  if (document.getElementById('text').value === 'yellow') {
    return square.style.backgroundColor = 'yellow'
  }
  if (document.getElementById('text').value === 'green') {
    return square.style.backgroundColor = 'green'

  } else {
    console.log(false);
  }
})

const circleParameterChange = function (event) {
  span.textContent = event.target.value;
  let circleParameter = event.target.value;
  circle.style.height = circleParameter + '%';
  circle.style.width = circleParameter + '%';
};

range.addEventListener('input', circleParameterChange);
btnNone.style.display = "none";

