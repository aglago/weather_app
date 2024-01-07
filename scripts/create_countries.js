/* function to create option element in select */
 
export const create_countries = async () => {
    try {
        const data = await fetchCountries();
        let r_data = data.data;
        for (country of r_data) {
            let op = document.createElement('option');
            op.innerHTML = country.name;
            select_country.appendChild(op);
        }
    } catch (error) {
        console.error('Error:', error)
    }
}

create_countries();