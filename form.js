const input = document.getElementById('check-pw');
const original = document.getElementById('pw');
const change = document.getElementById('pw-check-label');

input.addEventListener('click', function(event) {
  // Your code to be executed when the input is clicked
  const clickedElement = event.target;
  if(clickedElement!=input){
    clickedElement.classList.add('blue');
  }
  
});

input.addEventListener('input', function() {
  // Your code to be executed when the input is clicked


  if(original.value!=input.value){
    input.style.borderColor = 'red';
  } else{
    input.style.borderColor = 'lime';
  }
  
});
