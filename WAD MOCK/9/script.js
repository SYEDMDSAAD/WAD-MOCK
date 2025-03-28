function getWeather() {
    let city = document.getElementById("cityInput").value.trim();
    let resultDiv = document.getElementById("weatherResult");

    if (city === "") {
        resultDiv.innerHTML = "<p>Please enter a city name.</p>";
        return;
    }

    let xhr = new XMLHttpRequest();
    xhr.open("GET", "weatherData.json", true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            let weatherData = JSON.parse(xhr.responseText);

            if (weatherData[city]) {
                let data = weatherData[city];
                resultDiv.innerHTML = `
                    <h3>Weather in ${city}</h3>
                    <p><strong>Temperature:</strong> ${data.temperature}</p>
                    <p><strong>Humidity:</strong> ${data.humidity}</p>
                    <p><strong>Condition:</strong> ${data.condition}</p>
                `;
            } else {
                resultDiv.innerHTML = "<p>City not found in the repository.</p>";
            }
        } else {
            resultDiv.innerHTML = "<p>Failed to fetch weather data.</p>";
        }
    };

    xhr.send();
}
