// customText.js

function displayCustomText() {
    try {
        // const textToShow = "Hello, this is custom text!";
        const textToShow = "Hello, world";
        
        const customTextDiv = document.createElement('div');
        customTextDiv.id = 'customTextDiv';
        customTextDiv.style.position = 'fixed';
        customTextDiv.style.bottom = '10px';
        customTextDiv.style.right = '10px';
        customTextDiv.style.padding = '10px';
        customTextDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        customTextDiv.style.color = 'white';
        customTextDiv.style.zIndex = '1000';
        customTextDiv.style.borderRadius = '5px';
        customTextDiv.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
        customTextDiv.innerText = textToShow;
        
        document.body.appendChild(customTextDiv);
    } catch (error) {
        console.error('Error displaying custom text:', error);
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', displayCustomText);
} else {
    displayCustomText();
}
