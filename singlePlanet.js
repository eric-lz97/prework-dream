const  params = window.location.search

const url = new URLSearchParams(params).get('url')

console.log(params)
console.log(url)


const fetchSinglePlanet = ()=>{
    fetch(url).then((response)=>{
        return response.json()
    }).then((data) => {
        console.log(data)
        document.getElementById("all_planet_description").innerHTML = `
        <h1>${data.name}:<h1/>
        <h1>Created: ${data.created}<h1/>
        <h1>Diameter: ${data.diameter}<h1/>
        <h1>Gravity: ${data.gravity}<h1/>
        <h1>Population: ${data.population}<h1/>
        <h1> Terrain: ${data.terrain}<h1/>
        
        `


    }).catch((err) => {
        console.log(err);
    });
}

fetchSinglePlanet();