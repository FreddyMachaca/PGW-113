urlBase = "https://api.openweathermap.org/data/2.5/weather";
let api_key = "API_KEY";
let difKelvin = 273.15;

document.getElementById("btnBuscar").addEventListener("click", () => {
    const ciudad = document.getElementById("ciudadEntrada").value;
    if(ciudad){
        fetchDatosClima(ciudad);
    }
});

function fetchDatosClima(ciudad){
    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
    .then(response => response.json())
    .then(response => mostrarDatosClima(response))
}

function mostrarDatosClima(data){
    console.log(data);
    const divDatosClima = document.getElementById("datosClima");
    divDatosClima.innerHTML = "";

    const ciudadNombre = data.name;
    const paisNombre = data.sys.country;
    const temperatura = data.main.temp - difKelvin;
    const humedad = data.main.humidity;
    const descripcion = data.weather[0].description;
    const icono = data.weather[0].icon;

    const ciudadTitulo = document.createElement("h2");
    ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre}`

    const temperaturaInfo = document.createElement("p");
    temperaturaInfo.textContent = `Temperatura: ${Math.floor(temperatura)}°C`;

    const descripcionInfo = document.createElement("p");
    descripcionInfo.textContent = `Descripción meteorológica: ${descripcion}`;

    const iconInfo = document.createElement("img");
    iconInfo.src = `http://openweathermap.org/img/w/${icono}.png`;

    const humedadInfo = document.createElement("p");
    humedadInfo.textContent = `La humedad es: ${humedad}%`;

    divDatosClima.appendChild(ciudadTitulo);
    divDatosClima.appendChild(temperaturaInfo);
    divDatosClima.appendChild(humedadInfo);
    divDatosClima.appendChild(iconInfo);
    divDatosClima.appendChild(descripcionInfo);
}

