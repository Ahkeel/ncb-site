$(document).ready(function()
{
    function showPosition()
    {
      var base_url = 'https://api.openweathermap.org/data/2.5/weather?';
      var api_key = 'a0643d6acb0d74413996f18b52b58360';
      if(navigator.geolocation)
      {
          navigator.geolocation.getCurrentPosition(function(position)
          {
              var latitude = position.coords.latitude;
              var longitude = position.coords.longitude;
              get_http_request(base_url, latitude, longitude, api_key);
          });
      } else{
          alert("Sorry, your browser does not support HTML5 geolocation.");
      }

      function get_http_request(base_url,latitude,longitude, api_key){
        var xhttp = new XMLHttpRequest();
        var url_request = base_url+'lat='+latitude+'&lon='+longitude+'&units=metric'+'&APPID='+api_key;
        var base_icon_url="http://openweathermap.org/img/w/";
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            // document.getElementById("user_location").innerHTML = this.responseText;

            let response=JSON.parse(xhttp.responseText);
            let user_location=response.name;
            let temp = response.main.temp;
            let icon_code = response.weather[0].icon;
            base_icon_url = base_icon_url+icon_code+".png";

            var icon = document.getElementById('weather-icon');
            icon.src = base_icon_url;

            let location_div = document.getElementById('user_location');
            location_div.innerHTML= user_location;

            let temp_div = document.getElementById('temperature');
            temp_div.innerHTML= temp+'°C';

            get_current_day_time();
            setInterval(get_current_day_time, 60000);
          }
        };
        xhttp.open("GET", url_request, true);
        xhttp.send();
      }

      function get_current_day_time()
      {
          var d = new Date();
          var weekday = new Array(7);
          weekday[0] = "Sunday";
          weekday[1] = "Monday";
          weekday[2] = "Tuesday";
          weekday[3] = "Wednesday";
          weekday[4] = "Thursday";
          weekday[5] = "Friday";
          weekday[6] = "Saturday";

          var n = weekday[d.getDay()];
          var date_time = new Date();
          //document.getElementById("demo").innerHTML = n;
          var day_and_time=n+',  '+get_current_time();
          let current_day_time = document.getElementById('date_time');
          current_day_time.innerHTML= day_and_time;
          //console.log(day_and_time);
      }
      function get_current_time()
      {
        var time = new Date();
        return(time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }))
      }
    }
  showPosition();
});
