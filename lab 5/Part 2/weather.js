function getWeather(){
    $'.weatherResponse').html('');
    var cityName = $('#cityName').val();
    var apiCall =
        'http://api.openweathermanp.org/data/2.5/weather?q=' + cityName + 
        '&appid=b1b15e88fa797225412429c1c50c122a1';
    
    $.getJSON(apiCall, weatherCallback);
    
    function weatherCallback(weatherData){
        var cityName = weatherData.name;
        var country = weatherData.sys.country;
        var description = weatherData.weather[0].description;
        
        $('.weatherResponse').append("Weather in " + cityName + " " + country + " is " + description);
    }
}