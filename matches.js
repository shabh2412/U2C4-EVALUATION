// write js code here corresponding to matches.html
let schedule = JSON.parse(localStorage.getItem('schedule')) || [];
let tBody = document.querySelector('tbody');

let filterVenue = document.querySelector('#filterVenue');
filterVenue.addEventListener('change', filterByVenue);

function filterByVenue () {
    venue = filterVenue.value;
    // console.log(venue);
    if(venue=="none") display(schedule);
    else {
        filterData = schedule.filter(function (el) {
            // console.log(el.venue,venue);
            return el.venue === venue;
        })
        // console.log(filterData);
        display(filterData);
    }
}

display(schedule);

function display(data) {
    tBody.innerHTML = null;
    data.forEach(function (el) {
        let  row = document.createElement('tr');
        let td = [];
        for(i = 0; i < 6; i++) {
            td.push(document.createElement('td'));
        }
    
        td[0].innerText = el.matchNumber;
        td[1].innerText = el.teamA;
        td[2].innerText = el.teamB;
        td[3].innerText = el.date;
        td[4].innerText = el.venue;
        td[5].innerText = 'Favourites';
    
        td[5].style.color = 'green';
        td[5].style.cursor = 'pointer';
        td[5].addEventListener('click', function(){
            addToFavourite(el);
        });
    
        row.append(...td);
        tBody.append(row);
    });
}

function addToFavourite(el) {
    favourites = JSON.parse(localStorage.getItem('favourites')) || [];
    added = false;
    favourites.forEach(function(elem) {
        if(elem.id == el.id) {
            added = true;
        }
    })
    if(!added) {
        favourites.push(el);
        localStorage.setItem('favourites', JSON.stringify(favourites));
    }
    else {
        alert('Match already added to favourites');
    }
}