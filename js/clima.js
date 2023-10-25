document.addEventListener("DOMContentLoaded", function () {

    let iconoAnimado = document.getElementById('icono-animado') 

    let weather = {
        apiKey: "edd2b2a885bc54d183dfa1cd596f3e4e",
        fetchWeather: function (city) {
            fetch(
                "https://api.openweathermap.org/data/2.5/weather?q=" +
                city +
                ",AR&units=metric&appid=" +
                this.apiKey +
                "&lang=es"
            )
                .then((response) => {
                    if (!response.ok) {
                        alert("Clima no encontrado.");
                        throw new Error("Clima no encontrado.");
                    }
                    return response.json();
                })
                .then((data) => this.displayWeather(data));
        },
        displayWeather: function (data) {
            const { name } = data;
            const { icon, description } = data.weather[0];
            const { temp, humidity } = data.main;
            const { speed } = data.wind;
            document.querySelector(".city").innerText = "Clima en " + name;
            console.log(data.weather[0].main)
            switch (data.weather[0].main) {
                case 'Thunderstorm':
                    iconoAnimado.src = 'img/thunder.svg'
                    console.log('TORMENTA');
                    break;
                case 'Drizzle':
                    iconoAnimado.src = 'img/rainy-2.svg'
                    console.log('LLOVIZNA');
                    break;
                case 'Rain':
                    iconoAnimado.src = 'img/rainy-7.svg'
                    console.log('LLUVIA');
                    break;
                case 'Snow':
                    iconoAnimado.src = 'img/snowy-6.svg'
                    console.log('NIEVE');
                    break;
                case 'Clear':
                    iconoAnimado.src = 'img/day.svg'
                    console.log('LIMPIO');
                    break;
                case 'Atmosphere':
                    iconoAnimado.src = 'img/weather.svg'
                    console.log('ATMOSFERA');
                    break;
                case 'Clouds':
                    iconoAnimado.src = 'img/cloudy-day-1.svg'
                    console.log('NUBES');
                    break;
                default:
                    iconoAnimado.src = 'img/cloudy-day-1.svg'
                    console.log('por defecto');
                    
            }

            //document.querySelector(".icon").src =
            //"https://openweathermap.org/img/wn/" + icon + ".png";
            document.querySelector(".description").innerText = description;
            document.querySelector(".temp").innerText = temp + "°C";
            document.querySelector(".humidity").innerText =
                "Humedad: " + humidity + "%";
            document.querySelector(".wind").innerText =
                "Velocidad del viento: " + speed + " km/h";
            document.querySelector(".weather").classList.remove("loading");

        },
        search: function () {
            this.fetchWeather(document.querySelector(".search-bar").value);
        },
    };

    document.querySelector(".search button").addEventListener("click", function () {
        weather.search();
    });

    document
        .querySelector(".search-bar")
        .addEventListener("keyup", function (event) {
            if (event.key == "Enter") {
                weather.search();
            }
        });

    weather.fetchWeather("Buenos Aires");

    document.querySelector(".search button").addEventListener("click", function () {
        weather.search();
    });

    document.querySelector(".search-bar").addEventListener("keyup", function (event) {
        if (event.key == "Enter") {
            weather.search();
        }
    });

});











