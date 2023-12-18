function temp(){
    var x = document.getElementById('cityname').value;

    if(x==''){
        alert("Please Enter City Name");
    }else{
        try {
            const http = new XMLHttpRequest();
            http.open('GET',`https://api.openweathermap.org/data/2.5/weather?q=${x}&appid=c31cb11a7a84143a2474ce12a3807a63`,false);
            http.send();
            var resText = http.responseText;
            var obj = JSON.parse(resText);
            document.getElementById('loc').innerHTML = obj.name;
            document.getElementById('cou').innerHTML = obj.sys.country;
            document.getElementById('currTemp').innerHTML = Math.round(obj.main.temp - 273.15);
            document.getElementById('hum').innerHTML = obj.main.humidity;
            document.getElementById('windSpeed').innerHTML = obj.wind.speed;
        } catch (error) {
            alert("Enter Valid Location");
        }
    }       
}

