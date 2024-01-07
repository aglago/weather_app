/* fetching countries api */

export const fetchCountries = async () => {
    try {
        const response = await fetch(countries);
        const data = await response.json();
        return data;       
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}
