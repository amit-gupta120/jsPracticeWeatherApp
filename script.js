const apiKey = "67416cbf78459d480973cd3e92caa2d3";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const serachBox = document.querySelector(".search input")
const searchButton = document.querySelector(".search button")
const WeatherImage = document.querySelector(".weatherIcon")



async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var tempData = await response.json()

    console.log("Temp Data", tempData);

    document.querySelector('.cityName').innerHTML = tempData.name;
    document.querySelector('.temp').innerHTML = Math.round(tempData.main.temp) + "°C";
    document.querySelector('.humidity').innerHTML = tempData.main.humidity + "%";
    document.querySelector('.wind').innerHTML = tempData.wind.speed + "km/h";

    if (tempData.weather[0].main == "Clouds") {
        WeatherImage.src = "images/clouds.png"

    } else if (tempData.weather[0].main == "Rain") {
        WeatherImage.src = 'images/rain.png'

    } else if (tempData.weather[0].main == "Clear") {
        WeatherImage.src = 'images/clear.png'

    } else if (tempData.weather[0].main == "Drizzle") {
        WeatherImage.src = 'images/drizzle.png'

    } else if (tempData.weather[0].main == "Mist") {
        WeatherImage.src = 'images/mist.png'

    }

    document.querySelector('.weather').style.display = "block"




}


searchButton.addEventListener("click", () => {
    checkWeather(serachBox.value)
})






