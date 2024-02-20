document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    const copyrightLine = document.getElementById('copyright');
    copyrightLine.innerHTML = `© ${currentYear} 😎Emmanuel Ologe😎, Nigeria 🇳🇬`;
  
    const lastModifiedParagraph = document.getElementById('lastModified');
    const lastModified = new Date(document.lastModified);
    lastModifiedParagraph.textContent = `Last modified: ${lastModified.toLocaleString()}`;

    const menuToggle = document.getElementById('menu');
    const nav = document.querySelector('nav');
  
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('show');
    });

    const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#description');
const more = document.querySelector('#moreinfo');

const url = "https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=9.0563&lon=7.4985&appid=0dd9b87bfa600aa69c5edb317fbe74fe";

async function apiFetch(){
    try{
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        }
        else {
            throw Error (await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data){
    currentTemp.innerHTML =`${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = `${data.weather[0].description}`;
    weatherIcon.setAttribute('src',iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `Condition: ${data.weather[0].description}`; 
    more.innerHTML = `<p>Humidity: ${data.main.humidity}%</p>
                    <p>Feels Like: ${data.main.feels_like}&deg;F</p>
                    <p>Wind Speed: ${data.wind.speed} mph</p>`
}

    const modeButton = document.querySelector("#mode");
    const main = document.querySelector("main");
    
    modeButton.addEventListener("click", () => {
    	if (modeButton.textContent.includes("🕶️")) {
    		main.style.background = "#000";
    		main.style.color = "#fff";
    		modeButton.textContent = "🔆";
    	} else {
    		main.style.background = "#eee";
    		main.style.color = "#000";
    		modeButton.textContent = "🕶️";
    	}
    });

});