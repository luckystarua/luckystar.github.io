var ourElement = document.getElementById("BoX");
var btn = document.querySelector('.myFloatBtn');
function handleButtonClick() {
    ourElement.scrollIntoView({block: "center", behavior: "smooth"});
    
 }
 
 btn.addEventListener('click', handleButtonClick);