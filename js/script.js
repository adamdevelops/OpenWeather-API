

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
        temp = ((data.main.temp * 9)/5) + 32 ;
        $( "#forcast" ).html( "<p>Main:"+data.weather[0].main+"</p><p>Description:"
        +"<img src ='http://openweathermap.org/img/w/"+data.weather[0].icon+".png'>"
        +data.weather[0].description+
        "</p>"+"<p>Temperature:"+temp+"</p>");

      },
      error: function() {

        console.log("Error accessing API");

      }

      });

  });

}
