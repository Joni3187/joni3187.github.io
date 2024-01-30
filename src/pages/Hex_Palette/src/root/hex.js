// CHAT GPT - JS CODE FUNCTION 

function copyHex(element) {
  var hexText = element.querySelector('h4').textContent;
  
  var tempInput = document.createElement('input');
  tempInput.value = hexText;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);
  
  var popup = document.createElement('div');
  popup.textContent = 'Copied ' + hexText;
  popup.className = 'popup';
  document.body.appendChild(popup);
  
  const rect = element.getBoundingClientRect();
  const mouseX = rect.left + rect.width / 2;
  const mouseY = rect.top - 20;
  
  popup.style.left = mouseX + 'px';
  popup.style.top = mouseY + 'px';
  
  setTimeout(function() {
    document.body.removeChild(popup);
  }, 1500);
}

