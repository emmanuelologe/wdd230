const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const visitmsg1 = document.querySelector('#visitmsg');
 
hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});



document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    const copyrightLine = document.getElementById('copyright');
    copyrightLine.innerHTML = `© ${currentYear} 😎Emmanuel Ologe😎, Nigeria 🇳🇬`;

    
  
    // const lastModifiedParagraph = document.getElementById('lastModified');
    // const lastModified = new Date(document.lastModified);
    // lastModifiedParagraph.textContent = `Last modified: ${lastModified.toLocaleString()}`;

  

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