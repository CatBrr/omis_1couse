//f6dc17c8de2b363cd44c695ac7fb0df4
/*https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
*/
class Weather{

    apiKey='f6dc17c8de2b363cd44c695ac7fb0df4'
    url='https://api.openweathermap.org/data/2.5/weather'
    options = {}

    getData(){
        fetch(this.generate_url()).then(response=>{
            return response.json()
        }).then(data=>{
            let city =document.getElementById('city')
            let temp =document.getElementById('temp')
            let desc = document.getElementById('desc')
            let label = document.querySelector('label[for="flexSwitchCheckChecked"]')
            if (this.options.hasOwnProperty('units')) {
                if (this.options.units == 'metric') {
                    label.innerText='Cel'
                    temp.innerText=Math.round(data.main.temp)+ '°C'
                }
                else if(this.options.units == 'standart'){
                    label.innerText='Kel'
                    temp.innerText=Math.round(data.main.temp)+ '°K'
                }
            }
            city.innerText=data.name
            if (data.weather.length>0) {
                desc.innerText = ''
                data.weather.forEach(desc_ => {
                    desc.innerText += desc_.description+'\n';
                });
            }
            console.log(data);
        })
    }
//key: value 
    generate_url(){
        if (this.options.hasOwnProperty('appid') == false) {
            this.options.appid= this.apiKey
        }
        let params = []
        if (typeof this.options == 'object') {
            Object.entries(this.options).forEach(option =>{
                //console.log(option)
                //if (option[0]=='appid') this.apiKey=option[1]
                
                params.push(option[0]+'='+option[1])
            })
        }
        if (params.length!=0) {
            return this.url + '?' + params.join('&')
        }
        return this.url
    }

}
//metric= standart || metric
let weather_data = new Weather()
weather_data.options = {q: 'Tallinn',"units":"standart"}
weather_data.getData()
let my_switch = document.getElementById('flexSwitchCheckChecked')
my_switch.addEventListener('change', event=>{
    console.log(event.target.checked);
    if (event.target.checked) {
        weather_data.options={q:"Tallinn", "units":"metric"}
    } else {
        weather_data.options={q:"Tallinn", "units":"standart"}
    }
    weather_data.getData()
})
