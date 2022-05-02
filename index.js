// write js code here corresponding to index.html
// You should add submit event on the form
let form = document.querySelector('#masaiForm');
console.log(form);

let schedule = JSON.parse(localStorage.getItem('schedule')) || [];

form.addEventListener('submit', addMatch);
function addMatch () {
    event.preventDefault();
    // console.log('Match Added');
    let obj = {
        id: schedule.length,
        matchNumber: form.matchNum.value,
        teamA: form.teamA.value,
        teamB: form.teamB.value,
        date: form.date.value,
        venue: form.venue.value
    }
    form.matchNum.value = "";
    form.teamA.value = "none";
    form.teamB.value = "none";
    form.date.value = "";
    form.venue.value = "none";

    if (obj.matchNumber=="" || obj.teamA=="none" || obj.teamB =="none" || obj.date == "" || obj.venue == "none") {
        alert('Please fill all required fields!');
        return;
    }
    console.log('Match added');
    // console.log(obj);
    schedule.push(obj);
    localStorage.setItem('schedule',JSON.stringify(schedule));
}