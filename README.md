# FORESCAST
web application built in Angular 8 and .net Core 2.2. application based on API that allows users to activate their geolocation as well as select their location and show weather details

AccuWeather APIS was used to get the actual forecast data.

# Section 'Home' (Menu).

Entering the home section, the user must activate the geolocation through the browser's request. In the Home, an input search and a map will be displayed, Google Api was used for the map (google.maps.Map).
Local Storage was used to store data such as altitude and longitude as well as the type of degrees (°F or °C) that the user has chosen.

# Section 'Forecast'(Menu)

In the Forecast section 3 areas are shown:
 -> Now: Shows the forecast at the current time,
 -> Hourly: Shows the 12 hrs forecast of the day
 -> Daily: Shows the forecast for the next 5 days

- Http://dataservice.accuweather.com/locations/v1/cities/geoposition/... was used for latitude and altitude geolocation.
- http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/... was used to getthe actual data forecast data by hours.
- http://dataservice.accuweather.com/forecasts/v1/daily/5day/... was used to get the actual data forecast data by 5 days.
- http://dataservice.accuweather.com/forecasts/v1/daily/1day/ ... was used to get the actual data forecast data by 1 day.

# Section 'Historial'(Menu)

In the history section it shows some forecasts from the server (backend) controller: WeatherForecastController








