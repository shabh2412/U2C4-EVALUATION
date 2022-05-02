// write js code here corresponding to favourites.html
favourites = JSON.parse(localStorage.getItem('favourites')) || [];
let tBody = document.querySelector('tbody');

display(favourites);

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
        td[5].innerText = 'Delete';
    
        td[5].style.color = 'red';
        td[5].style.cursor = 'pointer';
        td[5].addEventListener('click', function(){
            deleteFavourite(el);
        });
    
        row.append(...td);
        tBody.append(row);
    });
}

function deleteFavourite(elem) {
    // console.log(elem.id);
    favourites = favourites.filter(function(el) {
        return el.id != elem.id;
    })
    // console.log(favourites);
    display(favourites);
    localStorage.setItem('favourites', JSON.stringify(favourites));
    if(favourites.length == 0) {
        localStorage.removeItem('favourites');
    }
}
// localStorage.setItem('favourites', JSON.stringify(favourites));