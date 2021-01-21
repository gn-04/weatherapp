class Weather {
  constructor(city, unit) {
    this.apiKey = '9d835a8c6424ebce6490d7581e8e1931';
    this.city = city;
  }

  //Fetch Weather from API
  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=imperial`);

    const responseData = await response.json();

    return responseData;
  }

  //Change Weather location
  changeLocation(city) {
    this.city = city;
  }
}