


//const apiKey = "8e25fa3799a5c32a667931f03c486da1";
//const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=London&appid={apiKey}";


const apiKey = "8e25fa3799a5c32a667931f03c486da1";

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searhBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status == 404){
       document.querySelector(".error").style.display = 'block';
       document.querySelector(".weather").style.display = "none";
    }else{
        const data = await response.json();

    document.querySelector(".city-name").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =Math.round(data.main.temp)  + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png";
        } else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png";
        } else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.png";
        } else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png";
        } else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.png";
        }
    
        document.querySelector(".weather").style.display = "block";
         
    
    }
    
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searhBox.value);
})


