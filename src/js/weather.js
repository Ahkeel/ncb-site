$(document).ready(function() {

  var api_key = 'a0643d6acb0d74413996f18b52b58360';
  var api_url = 'https://api.openweathermap.org/data/2.5/weather?';
  var weather_icon_url = "/images/weather-icons/";

  function getLocation() {
    var deferred = jQuery.Deferred();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var location = {
          lat: position.coords.latitude,
          long: position.coords.longitude
        }        
        console.log("location: ", location);
        deferred.resolve(location);
      });
    } else {
      deferred.reject(false);
    }
    return deferred.promise();
  }

  function getWeatherData(lat, long) {
    var url_request = api_url+'lat='+lat+'&lon='+long+'&units=metric'+'&APPID='+api_key;
    console.log("url: ", url_request);

    $.get(url_request)
    .done(function(data) {
      console.log(data);
      $("#user_location").text(data.name);
      $("#user_temperature").text(data.main.temp + '°C');
      $("#weather-icon").attr("src", weather_icon_url + data.weather[0].icon + ".png");
      console.log(weather_icon_url + data.weather[0].icon + ".png");
      $(".greeting-widget-header").removeAttr('hidden');
      $("#user_day").text(getDay());
      $("#user_time").text(getCurrentTime());
      setInterval(function() {
        $("#user_time").text(getCurrentTime());
      }, 30000);
    })
    .fail(function(error) {
      console.log("error getting weather data:", error);
    });
  }

  function getDay() {
    var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var date = new Date();
    return weekday[date.getDay()];
  }

  function getCurrentTime() {
    var time = new Date();
    return time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
  }

  if ($(".greeting-widget").length) {
    console.log("weather widget");
    $.when(getLocation())
    .done(function(data) {
      console.log("run location: ", data);
      getWeatherData(data.lat, data.long);
    });
  }
});
