import { create_countries } from './create_countries';
import { fetchCities } from './fetch_cities';
import { fetchCountries } from './fetch_countries';

var latitude;
var longitude;
const apikey = 'd6e130c594758759a8a7966d8b2dbff2';
const base_url = 'https://countriesnow.space/api/v0.1/countries/'

const countries = `${base_url} + positions`;
const cities = `${base_url} + cities`;
const countries_api = `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&appid={apikey}`;
const select_country = document.getElementById('countries');
const select_city = document.getElementById('cities');
