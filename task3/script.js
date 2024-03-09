const clock = document.querySelector('#clock');
const currDate = document.querySelector('#date');

setInterval(function () {
  const currentDate = new Date();
  const time = currentDate.toLocaleTimeString();
  const date = currentDate.toDateString();
  clock.innerHTML = time;
  currDate.innerHTML = date;
}, 1000);
