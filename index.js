
let data_Url = 'https://swapi.dev/api/people/1';
let person = document.getElementById('luke_info');

let planet_Url = 'https://swapi.dev/api/planets/1';
let planet_tato = document.getElementById('planet_info');

let allPlanet_Url = 'https://swapi.dev/api/planets/';
let allPlanets = document.getElementById('all_planet_info');
let Planets_list = document.getElementById('planets_list');


function data_Star() {
    fetch(data_Url).then(response => response.json())
        .then(json => {
            console.log(json)

            person.innerHTML = `<h3>${json.name}</h3>
                    <h3>Height: ${json.height}</h3>  
                    <h3>Weight: ${json.mass}</h3>
                    <h3>Hair Color: ${json.hair_color}</h3>
                    <h3>Eye Color: ${json.eye_color}</h3>`
        })
}

const planet_data = document.getElementById('luke_home');
// planet_data.addEventListener('click', data_Star);
data_Star();


function allPlanets_Star() {
    fetch(allPlanet_Url).then(response => response.json())
        .then(json => {
            console.log(json)
            allPlanets.innerHTML =
                json.results.map((item) => {
                    let plntName = item.name;
                    let url = item.url
                    console.log(url)
                    return `<p id="planets_list" href="planets_description.html"> <a href="planets_description.html?url=${url}" > ${plntName} </a></p>`
                    // return `<p id="planets_list" href="planets_description.html"> <a href="planets_description.html?id"> ${plntName} </a></p>`
                })

            console.log(json);

        }).catch((err) => {
            console.log(err);
        });
};

allPlanets_Star();


// function someThinglol() {
//     fetch(allPlanet_Url).then((data) => {
//         return data.json();
//     }).then((objectData) => {
//         console.log(objectData.results[0].climate);
//         let tableData = "";
//         objectData.results.map((values) => {
//             tableData += `
//         <h1>${values.name}</h1>
//         <h1>${values.terrain}</h1>
//         <h1>${values.diameter}</h1>
//         <h1>${values.orbital_period}</h1>
//         <h1>${values.population}</h1>
//         <h1>${values.gravity}</h1>
//         <h1>${values.surface_water}</h1>
//         `
//         });
//         document.getElementById("all_planet_description").
//             innerHTML = tableData;
//     }).catch((err) => {
//         console.log(err);
//     });
// };

// someThinglol();


planet_data.onclick = () => {
    console.log("checking")
    fetch(planet_Url).then(response => response.json())
        .then(home_content => {
            console.log(home_content)
            planet_tato.innerHTML =
                `<p> Climate: ${home_content.climate}<p>
                 <p> Created: ${home_content.created}</p>
                 <p>Population: ${home_content.population}</p>
                 <p> Terrian: ${home_content.terrain}</p>
            `;
            document.querySelector('.planet-summ').classList.add('box');
        });
}






