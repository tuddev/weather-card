let apiKey = "";
let cityStr = 'New York';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityStr}&lang=en&units=metric&appid=${apiKey}`;
let iconUrl = 'http://openweathermap.org/img/wn/';

const city = document.querySelector('#city');
const temperature = document.querySelector('#temp');
const humidity = document.querySelector('#humidity');
const wind = document.querySelector('#wind');
const cityBack = document.querySelector('#city-back');
const card = document.querySelector('#weather');
const cardFront = card.querySelector('#card-front');
const cardBack = card.querySelector('#card-back');
const weatherType = card.querySelector('#weather-type');
const weatherTypeIcon = card.querySelector('#weather-type-icon');

axios.get(url)
    .then((res) => {
        city.innerHTML = res.data.name;
        cityBack.innerHTML = res.data.name;
        console.log(city.innerHTML);
        temperature.innerHTML = res.data.main.temp;
        humidity.innerHTML = res.data.main.humidity;
        wind.innerHTML = res.data.wind.speed;
        weatherType.innerHTML = res.data.weather[0].main;
        weatherTypeIcon.src = iconUrl + res.data.weather[0].icon + '.png';
});

let flip = () => {
    let timer;
    card.classList.toggle('is-flipped');
    card.classList.toggle('animation-on');
    timer = setTimeout(() => {
        cardFront.classList.toggle('card__side--active');
        cardBack.classList.toggle('card__side--active');
        card.classList.toggle('animation-on');
    }, 500)};

card.addEventListener('click', flip);

