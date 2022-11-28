const clock = document.querySelector('.clock');
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const lap = document.querySelector('.lap');
const reset = document.querySelector('.reset');

let timer = 0;
let minute = 0;
let hour = 0;



let interval
start.addEventListener('click', function (e) {
    e.preventDefault();
    interval = setInterval(() => {

        if (timer >= 60) {
            timer = timer % 60;
            /* minute = Math.floor(timer / 60); */
        }
        clock.innerHTML = `
        <span>${hour > 9 ? hour : '0' + hour}:</span>
		<span>${minute > 9 ? minute : '0' + minute}:</span>
		<span>${timer > 9 ? timer : '0' + timer}</span>
    `;
        timer++;
    }, 1000);
});
stop.addEventListener('click', function () {
    clearInterval(interval);
    clock.innerHTML = `
        <span>${hour > 9 ? hour : '0' + hour}:</span>
		<span>${minute > 9 ? minute : '0' + minute}:</span>
		<span>${timer > 9 ? timer : '0' + timer}</span>
    `
})
reset.addEventListener('click', function () {
    timer = 00;
    minute = 00;
    hour = 00;
    clearInterval(interval);
    clock.innerHTML = `
             <span>${hour > 9 ? hour : '0' + hour}:</span>
		<span>${minute > 9 ? minute : '0' + minute}:</span>
		<span>${timer > 9 ? timer : '0' + timer}</span>
    `;
})