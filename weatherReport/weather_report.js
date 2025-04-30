function showweatherDetails(event) {
  event.preventDefault();
  const city = document.getElementById('city').value;
  const apiKey = 'ac81c7ea47a247be6a9e0100a9999443'; // Replace <YOUR API KEY> with your actual API key for openweathermap.org
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const weatherInfo = document.getElementById('weatherInfo');
      weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                               <p>Temperature: ${data.main.temp} &#8451;</p>
                               <p>Weather: ${data.weather[0].description}</p>`;
    })
}

document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );