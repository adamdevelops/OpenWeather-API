

function initWeatherAPI() {
  console.log("Entering initWeatherAPI");

  $(document).ready(function() {

    //var $currentWeather = $('#weather');

    $.ajax({
      url: "http://api.openweathermap.org/data/2.5/weather?q=NewYork&appid=5a27d887bbdde6caf751f24ec02c5a1b&units=metric",
      type: "GET",
      dataType: "jsonp",
      success: function(data) {
        console.log(data);
        console.log(data.weather[0].main);
        console.log(data.weather[0].main);
        temp = Math.trunc(((data.main.temp * 9)/5) + 32);

        $( "#forecast" ).html( "<div id='title'>"+data.name+"<p>"+data.weather[0].main
        +"</p></div><div id='temp_display'>"
        +"<img id='icon' src ='http://openweathermap.org/img/w/"+data.weather[0].icon+".png'><div id='temp'>"+temp+"&deg;</div></div><div id='temp-details'><p id='temp-description'>"
        +data.weather[0].description+"</p>"
        +"<p>Humidity:"+data.main.humidity+"%</p></div>");

      },
      error: function() {

        console.log("Error accessing API");
        $( "#forecast" ).html("Error accessing API");

      }

      });
  });
}
