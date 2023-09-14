# React Weather

Write a basic React App that calls OpenWeather's API and displays the current weather in a specific city or cities which we get from user input.

For example:

- If a user enters: `Paris` as input, we display the current weather in `Paris`
- If a user enters: `Paris, London, Berlin` as input, we should display the weather in all three cities at the same time. Exclude duplicates.

Each city's card should contain: The city's name, A weather icon image, temperature, and humidity.

## API call to get the current weather

`https://api.openweathermap.org/data/2.5/weather?units=metric&appid={API key}={city name}`

The API key is already in the `.env`

## Usefull links

- Open Weather's current weather API: https://openweathermap.org/current#geo
- Open Weather's weather icons: https://openweathermap.org/weather-conditions#How-to-get-icon-URL
