var inputCity = "";
var weatherAPI = "";

function displayWeather () {
    $.getJSON(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity},us&units=imperial&appid=a14b5cd39920b60f089d913e4253e5f5`, 
        function(data){
            console.log(data);

            let icon = `https://api.openweathermap.org/img/w/${data.weather[0].icon}.png`;
            $(".icon").attr("src", icon);
            $(".city").html(data.name);
            $(".description").html(data.weather[0].description);
            $(".temp").html(`${Math.floor(data.main.temp)} °F`)
        }
    );
};
// when submit button is pressed
$("#submit").click(function() {
    inputCity = $("#cityInput").val();
    weatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity},us&units=imperial&appid=a14b5cd39920b60f089d913e4253e5f5`;
    displayWeather();
});
// when the enter key is pressed
$('#cityInput').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        inputCity = $("#cityInput").val();
        weatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity},us&units=imperial&appid=a14b5cd39920b60f089d913e4253e5f5`;
        displayWeather();
    }
});

