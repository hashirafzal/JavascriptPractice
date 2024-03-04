const button = document.querySelectorAll('.button');

const body = document.querySelector('body');

button.forEach(function (e) {
  e.addEventListener('click', () => {
    body.style.backgroundColor = e.id;
  });
});
