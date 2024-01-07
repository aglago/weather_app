/* fetching cities */

export const fetchCities = async () => {
    try {
        const response = await fetch(cities);
        const data = await response.json();
        return data;
    } catch (error) {
        
    }
}

/* printing data to see */
fetchCities().then((data) => {
    console.log(data);
});