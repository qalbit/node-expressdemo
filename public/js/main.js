// const submitBtn = document.getElementById('submitBtn');

// const getInfo = (event) =>{
//     event.preventDefault();
//     alert("Hello");
// }

// submitBtn.addEventListener('click', getInfo);
require("dotenv").config()
const cityName = document.getElementById('cityName')
const submitbtn = document.getElementById('submitbtn');
const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');
const data_hide = document.querySelector('middle_layer');
const getInfo = async(event) =>{
    event.preventDefault();
    let cityVal = cityName.value;
    // alert("hie")
  
   if(cityVal === ""){
    city_name.innerText = 'Plz Enter City name before you search';
    data_hide.classList.add('data_hide');
   }else{
    try{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=${process.env.api_key}`;
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data);
        const arrdata = [data];
        console.log(arrdata)

        city_name.innerText = `${arrdata[0].name}, ${arrdata[0].sys.country}`;
        temp.innerText = arrdata[0].main.temp + " °C";
        // temp_status.innerText = arrdata[0].weather[0].main;

        const tempStatus = arrdata[0].weather[0].main;

        if(tempStatus == "Clear"){
            temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>";
        }else if(tempStatus == "Clouds"){
            temp_status.innerHTML =  "<i class='fas fa-cloud' style='color: #dfe4ea;'></i>";
        }else if(tempStatus == "Rain"){
            temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>";
        }else{
            temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #44c3de;'></i>";
        }
        data_hide.classList.remove('data_hide');

    }catch{
        // city_name.innerText = 'Plz Enter City name properly';
        data_hide.classList.add('data_hide');
        }
    } 
}
submitbtn.addEventListener('click', getInfo);

