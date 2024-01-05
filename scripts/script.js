const search_country = document.getElementById('search_country')
const search_city = document.getElementById('search cities');

/* getting the weather conidions */
// const apiurl = 'https://api.openweathermap.org/data/2.5/weather?appid=d6e130c594758759a8a7966d8b2dbff2';
/* retuns the longitude and latitude */

const countries = 'https://countriesnow.space/api/v0.1/countries/positions';

var latitude;
var longitude;
var country = null;
var city = null;
var country;
var city;

/* fetching the data from the the whether api */
const fetchData = async () => {
    try {
        const response = await fetch(countries);
        const data = await response.json();
        return data;       
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

/* getting information from documentor.getpostman */

data = fetchData();
console.log(data)
