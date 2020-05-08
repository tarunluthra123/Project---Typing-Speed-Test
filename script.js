let readBox = $('#readText')
let inputBox = $('#inputBox')
let btnStart = $('#btnStartTest')
let clock = $('#clock')[0]


// Clock code
function clockStopWatch() {
    let countDownDate = 60;
    let distance = 0;
    let now = 0;
    console.log('crate-', countDownDate);

    clock.innerText = 'Time Starts Now'

    // Update the count down every 1 second
    var x = setInterval(function () {

        // console.log('in function');
        console.log('now - ', now);

        // Find the distance between now and the count down date
        distance = countDownDate - now;
        now++;

        // Time calculations for days, hours, minutes and seconds
        var seconds = distance

        // Display the result in the element with id="clock"
        clock.innerText = seconds + "s ";
        // console.log(clock.innerHTML);

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            clock.innerHTML = "EXPIRED";
        }
    }, 1000);


    //End clock code
}


btnStart.click(() => {
    btnStart.prop('hidden', true)
    clockStopWatch()
})

