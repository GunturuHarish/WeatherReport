 function getWeather() {
    var city = document.getElementById("cityInput").value;
    var apiKey = '60ec616238174614f08c1df661bb64d1'; // You need to replace this with your actual API key

    var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            var weatherInfo = `City: ${data.name}<br>
                               Temperature: ${data.main.temp}°C<br>
                               Description: ${data.weather[0].description}`;
            document.getElementById("weatherInfo").innerHTML = weatherInfo;
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById("weatherInfo").innerHTML = "Error fetching weather data";
        });
}
