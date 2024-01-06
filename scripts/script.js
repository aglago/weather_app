

var latitude;
var longitude;
var country = document.getElementById('country').value;
var city = document.getElementById('city').value;;
const apikey = 'd6e130c594758759a8a7966d8b2dbff2';
const search_country = document.getElementById('search_country');
const search_city = document.getElementById('search cities');
const countries = 'https://countriesnow.space/api/v0.1/countries/positions';
const countries_api = `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&appid={apikey}`;

/* getting the weather conidions */
// const apiurl = 'https://api.openweathermap.org/data/2.5/weather?appid=';
/* retuns the longitude and latitude */





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

/* calling the fetchData function */

fetchData().then((data) => {
    console.log(data)
});


/* function to create option element in select */

const create_option = async () => {
    try {
        const data = fetchData();
        for (country of data.data);
            console.log(country);
    } catch (error) {
        console.error('Error:', error)
    }
}

create_option();



/* getting information from documentor.getpostman */



