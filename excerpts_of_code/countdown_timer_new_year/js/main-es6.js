const datePlace = document.querySelector(".countdown__timer");
const yearPlace = document.querySelector(".countdown__next-year");


const updateDate = function() {
    const todayDate = new Date();
    const nextYear = (todayDate.getFullYear()) + 1;

    const newYearDate = new Date(nextYear, 0, 1);

    const monthsLeft = 11 - newYearDate.getMonth() - todayDate.getMonth();
    const dayLeft = (new Date(todayDate.getFullYear(), todayDate.getMonth() + 1, 0)).getDate() - todayDate.getDate();
    const hoursLeft = 23 - todayDate.getHours();
    const minutesLeft = 59 - todayDate.getMinutes();
    const secondsLeft = 59 - todayDate.getSeconds();

    datePlace.innerHTML = `
        <div>
            <h2>${monthsLeft}</h2>
            <p>Months</p>
        </div>
        <div>
            <h2>${dayLeft}</h2>
            <p>Days</p>
        </div>
        <div>
            <h2>${hoursLeft}</h2>
            <p>Hours</p>
        </div>
        <div>
            <h2>${minutesLeft}</h2>
            <p>Minutes</p>
        </div>
        <div>
            <h2>${secondsLeft}</h2>
            <p>Seconds</p>
        </div>
    `

    yearPlace.innerHTML = nextYear;
}

setInterval(updateDate, 1000);




