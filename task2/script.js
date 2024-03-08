const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');
  
  if (weight > 0 && height > 0 && !isNaN(height) && !isNaN(weight) ) {
    result.innerHTML = (weight / ((height * height) / 10000)).toFixed(2);
  }
  else{
    result.innerHTML="Please Enter Valid Values"
  }
});
