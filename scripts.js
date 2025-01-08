var getyear = document.getElementById('getyear');
var day = new Date();
var year = day.getFullYear()
getyear.innerHTML=year



function view(){
    const view = document.getElementById('skill');
    view.style.visibility="visible"
}