const search_country = document.getElementById('search_country')
const search_city = document.getElementById('search cities');

var latitude;
var longitude;
var country = null;
var city = null;

var country = search_country.value;
var city = search_city.value;

// function check_notnull (country, city) {
//     if (country != null && city != null) {
//         var country = search_country.value;
//         var city = search_city.value;
//     }
// }


/* getting the weather conidions */
const apiurl = 'https://api.openweathermap.org/data/2.5/weather?appid=d6e130c594758759a8a7966d8b2dbff2';
/* retuns the longitude and latitude */
var location = `https://api.api-ninjas.com/v1/geocoding?city={city}&country={country}'`;

/* calling longlat */
// fetchlonglat = (city, country) {

// }

/* fetching the data from the the whether api */
const fetchData = async () => {
    try {
        const response = await fetch(apiurl);
        const data = await response.json();
        return data;       
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

/* calling the fetchData function */
fetchData().then((data) => {
    console.log(data);
});
