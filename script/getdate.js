document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    const copyrightLine = document.getElementById('copyright');
    copyrightLine.innerHTML = `© ${currentYear} 😎Emmanuel Ologe😎, Nigeria 🇳🇬`;
  
    const lastModifiedParagraph = document.getElementById('lastModified');
    const lastModified = new Date(document.lastModified);
    lastModifiedParagraph.textContent = `Last modified: ${lastModified.toLocaleString()}`;
});