window.addEventListener('load', () => {
    const API_keyrole = "ffa2be6009e82c49c1b6e5f5f2e041dc";
    let lon;
    let lat;
    let tempValue = document.getElementById('temp-value');
    let tempDescrip = document.getElementById('temp-desc');
    let location = document.getElementById('ubicacion');
    let iconoAnimado = document.getElementById('icono-animado');
    let windSpeed = document.getElementById('wind-speed');

    document.getElementById('temp-value');
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition( position => {
            //console.log(position);
            lon = position.coords.longitude;
            lat = position.coords.latitude;
            
            // Ubicación Por Latitud y Lon
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=es&units=metric&appid=${API_keyrole}`
            
            //Ubicación de Cuidad
            //const url = `https://api.openweathermap.org/data/2.5/weather?q=Chiapas&lang=es&&units=metric&appid=${API_keyrole}`

            console.log(url);
            fetch(url)
                .then(response => {return response.json() } )
                .then(data =>{
                    let temp = Math.round(data.main.temp);
                    tempValue.textContent = `${temp}°C`;
                    
                    let desc = data.weather[0].description;
                    tempDescrip.textContent = desc.toUpperCase();
                    
                    
                    location.textContent = data.name;

                    windSpeed.textContent = `${data.wind.speed} m/s`
                    console.log(data);
                    switch(data.weather[0].main){
                        case  'Clouds':
                            iconoAnimado.src = 'icons/animated/cloudy.svg'
                            console.log('Clouds');
                        break;
                        case  'Clear':
                            iconoAnimado.src = 'icons/animated/day.svg'
                            console.log('Clear');
                        break;
                        case  'Thunderstorm':
                            iconoAnimado.src = 'icons/animated/thunder.svg'
                            console.log('Thunderstorm');
                        break;
                        case  'Drizzle':
                            iconoAnimado.src = 'icons/animated/rainy-4.svg'
                            console.log('Drizzle');
                        break;
                        case  'Rain':
                            iconoAnimado.src = 'icons/animated/rainy-7.svg'
                            console.log('Rain');
                        break;
                        case  'Snow':
                            iconoAnimado.src = 'icons/animated/snowy-5.svg'
                            console.log('Snow');
                        break;
                        case  'Atmosphere':
                            iconoAnimado.src = 'icons/animated/weather.svg'
                            console.log('Atmosphere');
                        break;                        
                    }
                    
                })
                .catch(error =>{
                    console.log(error);
                })

        }

        )
    }
})