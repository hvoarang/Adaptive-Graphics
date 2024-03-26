const rangeInput = document.querySelector('input[type="range"]');
const output = document.querySelector('.js-selected-value');
rangeInput.addEventListener(
  'input',
  e => (output.textContent = e.target.value)
);

let x = true === [];
let y = true === ![];
console.log(x + y);

let x = +'5';
let y = -'5';
let z = +'5';
console.log(x + y * z);

let a = 0;
let b = [];
console.log(a == b);
