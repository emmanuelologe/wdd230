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