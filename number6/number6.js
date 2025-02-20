// Function to convert Celsius to Fahrenheit
function convertToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32; // Formula to convert Celsius to Fahrenheit
  }

  // Event listener for form submission
  document.getElementById('tempForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get the input value (Celsius temperature) from the user
    let celsius = parseFloat(document.getElementById('celsiusInput').value);


    // Convert the temperature to Fahrenheit
    let fahrenheit = convertToFahrenheit(celsius);

    // Display the result
    document.getElementById('convert').textContent = `${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F`;
  });