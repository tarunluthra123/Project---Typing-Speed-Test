let readBox = $('#readText')[0]
let inputBox = $('#inputText')
let btnStart = $('#btnStartTest')
let clock = $('#clock')[0]
let resultBlock = $('#resultBlock')[0]
let endTestBtn = $('#endTestBtn')

// Clock code
let id = 0;
function clockStopWatch() {
    let totalTime = 60;
    let distance = 0;
    let now = 0;
    console.log('totalTime-', totalTime);

    clock.innerText = 'Time Starts Now'

    // Update the count down every 1 second
    id = setInterval(function () {

        // console.log('in function');
        // console.log('now - ', now);

        // Find the distance between now and the count down date
        distance = totalTime - now;
        now++;

        // Time calculations for days, hours, minutes and seconds
        var seconds = distance

        // Display the result in the element with id="clock"
        clock.innerText = seconds + "s ";
        // console.log(clock.innerHTML);

        // If the count down is finished, write some text
        if (distance < 0) {
            timeUp(id);
        }
    }, 1000);


    //End clock code

}

function timeUp(id) {
    clearInterval(id);
    clock.innerHTML = "TIME UP";
    endTest();
}


btnStart.click(() => {
    btnStart.prop('hidden', true)
    endTestBtn.prop('hidden', false)


    getReadText()
    clockStopWatch()
})


function getReadText() {
    let loremipsum = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";
    readBox.innerText = loremipsum
}


function endTest() {
    let originalText = readBox.innerText;
    let inputText = inputBox.val();

    let origArr = originalText.split(' ')
    console.log('ok');
    let inputArr = inputText.split(' ')

    let correctWords = 0;
    for (let i = 0; i < inputArr.length; i++) {
        if (inputArr[i] == origArr[i]) {
            correctWords++;
        }
    }

    let finalResult = correctWords + ' words/min'
    console.log(finalResult);
    console.log(resultBlock);

    resultBlock.innerText = finalResult
}

endTestBtn.click(() => {
    timeUp(id)
})