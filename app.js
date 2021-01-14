//Mostrando la lista de paises//
const element = document.getElementById('countries');

function createCountry(country) {

    let div = document.createElement('div');
    div.classList.add('col-4')
    div.classList.add('colum')
    div.innerHTML= 
    `<p><a href="#">${country.name}</a></p>
    <img class="image" src='${country.flag}'/>
    ` 
    element.appendChild(div)
    
}

//Consumiendo el Servicio//
const url = 'https://restcountries.eu/rest/v2/lang/es';
fetch(url)
.then(response => response.json())
.then(data=>{
    console.log(data);

    data.forEach(element => {
        createCountry(element)
    });
})
.catch(err=>console.log(err))
