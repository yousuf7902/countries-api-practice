const loadApi = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
loadApi();
const displayCountries = countries => {
    //console.log(countries);
    document.getElementById('spinner').classList.add('hidden');
    countries.forEach(country => {
        //console.log(country.name);
        //console.log(country);
        const countryContainar = document.getElementById('countries-containar');
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = ` <h1 class="text-3xl font-semibold pb-2">Name: ${country.name}</h1>
        <p class="text-2xl pb-4">Capital: ${country.capital}</p>
        <button onclick="loadDetails('${country.name}')" class="py-1 px-3 rounded-2xl btn-details">Show Details</button>
        `;
        countryContainar.appendChild(div);
    });
};

const loadDetails = async (name) => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
        
    const res = await fetch(url);
    const data = await res.json();
    showLoadDetail(data[0]);
    console.log(data[0]);
    
};

const showLoadDetail=(country)=>{
    const detailsContainar = document.getElementById('details-containar');
    const div = document.createElement('div');
    detailsContainar.textContent = '';
    div.classList.add('country');
    div.innerHTML = `<h1 class="text-3xl font-semibold pb-2">Country Name: ${country.name}</h1>
    <p>Capital: ${country.capital}</p>
    <p>Region: ${country.region}</p>
    <p>Area: ${country.area} Sq.kilometer</p>
    <p>Population: ${country.population}</p>
    <p>Timezones: ${country.timezones[0]}</p>
    <p>Currency and Symbol: ${country.currencies[0].name}, ${country.currencies[0].symbol}</p>
    <img src="${country.flag}" width="250px" class="m-auto mt-10">
    `;
    detailsContainar.appendChild(div);
    window.scrollTo(0, 50);
}