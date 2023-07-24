const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

const startbtn = document.querySelector('#btn');
const eventInput = document.querySelector('#eventInput');
const eventDate = document.querySelector('#inputDate');

/*const eventname = document.querySelector('#eventname');*/

function checkInput() {
    const eventInputvalue = eventInput.value.trim();
    const eventDatevalue = inputDate.value;

    if (eventInputvalue == '' || eventDatevalue === '') {
        alert("Please enter the event name and select date")
    } else {
        setSucc(eventInputvalue);
        startcountdown();
    }
}
startbtn.addEventListener('click', e => {
    checkInput();
})



function setSucc(input) {
    const h2 = document.querySelector("h2");
    h2.innerText = input
}






function setdate() {
    const evenDatevalue = document.getElementById("inputDate");
    const eventDate = new Date(evenDatevalue.value);
    return eventDate;

}

function startcountdown() {
    setInterval(UpdateTime, 1000);
}


function UpdateTime() {
    const Eventtime = setdate();
    const currentdate = new Date();
    const diff = Eventtime - currentdate;
    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;
    days.innerHTML = d < 10 ? "0" + d : d;
    hours.innerHTML = h < 10 ? "0" + h : h;
    minutes.innerHTML = m < 10 ? "0" + m : m;
    seconds.innerHTML = s < 10 ? "0" + s : s;
}

/*
setInterval(UpdateTime, 1000); */