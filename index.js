document.getElementById("btn").addEventListener("click", function () {
    const temperatureInput = document.getElementById("temperature").value;
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
  
   
    if (isNaN(temperatureInput)) {
      alert("Please enter a valid number.");
      return;
    }
  
    const temperature = parseFloat(temperatureInput);
    let convertedTemperature;
  
    
    if (from === "celsius") {
      if (to === "fahrenheit") {
        convertedTemperature = (temperature * 9 / 5) + 32;
      } else if (to === "kelvin") {
        convertedTemperature = temperature + 273.15;
      } else {
        convertedTemperature = temperature;
      }
    }
  
 
    else if (from === "fahrenheit") {
      if (to === "celsius") {
        convertedTemperature = (temperature - 32) * 5 / 9;
      } else if (to === "kelvin") {
        convertedTemperature = (temperature - 32) * 5 / 9 + 273.15;
      } else {
        convertedTemperature = temperature;
      }
    }
  
   
    else if (from === "kelvin") {
      if (to === "celsius") {
        convertedTemperature = temperature - 273.15;
      } else if (to === "fahrenheit") {
        convertedTemperature = (temperature - 273.15) * 9 / 5 + 32;
      } else {
        convertedTemperature = temperature; 
      }
    }
  
    const resultElement = document.getElementById("converted-temperature");
    resultElement.textContent = `${convertedTemperature.toFixed(2)} ${to === "celsius" ? "°C" : to === "fahrenheit" ? "°F" : "K"}`;

  });
