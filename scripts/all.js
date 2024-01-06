@

var latitude;
var longitude;
const apikey = 'd6e130c594758759a8a7966d8b2dbff2';

const countries = 'https://countriesnow.space/api/v0.1/countries/positions';
const cities = 'https://countriesnow.space/api/v0.1/countries/cities';
const countries_api = `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&appid={apikey}`;
const select_country = document.getElementById('countries');
const select_city = document.getElementById('cities');


/* getting the weather conidions */
// const apiurl = 'https://api.openweathermap.org/data/2.5/weather?appid=';
/* retuns the longitude and latitude */

/* getting information from documentor.getpostman */