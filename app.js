$(document).ready(function(){
    $("#getWeather").click(function(){
        console.log('clicked');
        var city = $("#city").val();
        var key = "29036b946412164b4dabd64d342879a8";
        if(city){
            $.ajax({
                url:"https://api.openweathermap.org/data/2.5/weather",
                dataType: 'json',
                type: 'GET',
                data: {q:city, appid:key,units:'metric'},
                success: function(data){
                    var wf = '';
                    $.each(data.weather, function(index,value){
                        wf += '<br><h1><b>' + data.name + "</b></h1>";
                        wf += "<img src='https://openweathermap.org/img/w/" + value.icon+ ".png'>" ;
                        wf += "<p>Temperature: "+data.main.temp + '&deg;C<br>';
                        wf += "Forecast: "   + value.main + " , " + value.description + "</p><br>" ;

                    });
                    $("#showWeather").html(wf);
                }
        });
        }else{
            $("#error").html("<br>This field cannot be empty");
        }
    });
});

$(document).ready(function(){
    $("#getweather7").click(function(){
        console.log('clicked');
        var key = "29036b946412164b4dabd64d342879a8";
        var city = $("#city").val();
        if(city){
            $.ajax({
                url: "https://api.openweathermap.org/data/2.5/forecast",
                dataType: "json",
                type: "GET",
                data: {q:city,appid:key,units:"metric",cnt:"7"
            },
            success: function(data) {
                var wf = "";
                wf += "<br>";
                wf += "<h1>" + data.city.name + "</h1>";
                $.each(data.list, function(index, value) {
                    wf += "<p>" ;
                    wf += "<b>Day " + index + "</b>: " ;
                    wf += "Temperature: " + value.main.temp + "&degC" ;
                    wf += "<span> | " + value.weather[0].description + "</span>"; 
                    wf += "<img src='https://openweathermap.org/img/w/" + value.weather[0].icon + ".png'>" ;
                    wf += "</p>" ;
                });
                $("#showWeather").html(wf);
            }
        });
        }else{
            $("#error").html("<br>This field cannot be empty");
        }
    });
});



