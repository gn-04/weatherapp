//init storage
const storage = new Storage();
//Get stored location data
const weatherLocation = storage.getLocationData();

//init weather obj
const weather = new Weather(weatherLocation.city);

//init ui
const ui = new UI();


//Get weather on DOM Load
document.addEventListener('DOMContentLoaded', getWeather);

//Change location event 
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  
  weather.changeLocation(city);

  storage.setLocationData(city);

  getWeather();

  //Close Modal
  $('#locModal').modal('hide');
});


function getWeather() {
  weather.getWeather()
  .then(results => {
    //Display results in UI
    ui.paint(results);
  })
  .catch(err => console.log(err));
}
