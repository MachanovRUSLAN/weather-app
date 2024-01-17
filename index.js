const apiKey = "960ae55dd4e5e1b4b427129edd20e62d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn= document.querySelector(".search button");
const weatherBox = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none"
    }else{
          var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =Math.round(data.main.temp)  + "°C";
    document.querySelector(".humidity").innerHTML= data.main.humidity;
    document.querySelector(".windy").innerHTML = data.wind.speed + "km/h";
    
    if(data.weather[0].main == "Clouds"){
        weatherBox.src = "./img/cloud.png"
    }else if(data.weather[0].main == "Clear"){
        weatherBox.src = "./img/clear.png"
    }else if(data.weather[0].main == "Rain"){
        weatherBox.src = "./img/rain.webp"
    }else if(data.weather[0].main == "Snow"){
        weatherBox.src = "./img/snow.jpg"
    }else if(data.weather[0].main == "Drizzle"){
        weatherBox.src = "./img/drizzle.jpg"
    }else if(data.weather[0].main == "Mist"){
        weatherBox.src = "./img/mix.png"
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

    }

  
}
  searchBtn.addEventListener("click", ()=>{
        checkWeather(searchBox.value);
    })

