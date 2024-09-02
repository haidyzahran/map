
// geolocation


// navigator.geolocation.getCurrentPosition(success, error);

// function success (pos){
//    console.log(pos.coords.longitude);
//    console.log(pos.coords.latitude);
// }

// function error (e){
//   alert(e.message);
   
    
// }


function getPosition(countryName){
    const request = new XMLHttpRequest();

    request.open("get",`https://nominatim.openstreetmap.org/search?format=json&q=${countryName}`);
    request.send();

    request.addEventListener("load", function() {
        const data = JSON.parse(request.responseText)[0];
        const lat = data.lat;
        const lon = data.lon;

        document.getElementById('map').src = `https://www.openstreetmap.org/export/embed.html?bbox=${lon-1},${lat-1},${lon+1},${lat+1}&layer=mapnik`;
    });
}


// getPosition("Egypt")
// getPosition("Canda")
// getPosition("usa")



      


document.getElementById("country").addEventListener("change", function() {
const countryName = this.options[this.selectedIndex].text;
    getPosition(countryName);
});


getPosition(document.getElementById("country").options[document.getElementById("country").selectedIndex].text);

