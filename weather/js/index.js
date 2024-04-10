//f6dc17c8de2b363cd44c695ac7fb0df4
/*https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
*/
class Weather{

    apiKey='f6dc17c8de2b363cd44c695ac7fb0df4'
    url='https://api.openweathermap.org/data/2.5/weather'

    getData(){
        fetch(this.url+'?q=Tallinn&appid='+this.apiKey,[]).then(response=>{
            return response.json()
        }).then(data=>{
            console.log(data);
        })
    }

}
let weather_data = new Weather()
weather_data.getData()