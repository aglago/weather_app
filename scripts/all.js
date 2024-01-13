var latitude;
var longitude;
const apikey = 'd6e130c594758759a8a7966d8b2dbff2';
const base_url = 'https://countriesnow.space/api/v0.1/countries/'

const countries = `${base_url}`;
const cities = `${base_url}` + 'cities';
const countries_api = `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&appid={apikey}`;
const select_country = document.getElementById('countries');
const select_city = document.getElementById('cities');
var country;

/* fetching countries */

const fetchCountries = async () => {
    try {
        const response = await fetch(countries);
        const data = await response.json();
        return data;       
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}


/* printing data to see */

fetchCountries().then((data) => {
    console.log(data);
});

/* fetching cities */

const fetchCities = async () => {
    try {
        const response = await fetch(cities);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error: ', error);
        throw error;
    }
}

/* printing cities to see */

fetchCities().then((data) => {
    console.log(data);
})


/* function to create option element in select */
 
const create_countries = async () => {
    try {
        const data = await fetchCountries();
        let r_data = data.data;
        for (let country of r_data) {
            let op = document.createElement('option');
            op.innerHTML = country.country;
            select_country.appendChild(op);

            for (let city of r_data) {
                let opC = document.createElement('option');
                opC.innerHTML = city.city;
                select_city.append(opC)
            }
        }
        country  = select_country.value;
    } catch (error) {
        console.error('Error:', error)
    }
}

const create_cities = async () => {
    try {
        const data = await fetchCities();
    } catch (error) {
        
    }
}

/* fetching cities of selected country */

// const options = {method: 'GET'};

// fetch('https://backstage.taboola.com/backstage/api/1.0/resources/countries/us/cities', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));


create_countries();
console.log(country);
console.log('after country');
