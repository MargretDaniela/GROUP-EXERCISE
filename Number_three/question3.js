    // Function to get the maximum of three numbers
    function getMaxOfThree(num1, num2, num3) {
        return Math.max(num1, num2, num3);
      }
  
      // Handle form submission
      document.getElementById('maxForm').addEventListener('submit', function(event) {
        event.preventDefault(); // And the addEventListener attaches as the event listener to the form element.
  
        // Getting the input values
        let num1 = parseFloat(document.getElementById('num1').value);
        let num2 = parseFloat(document.getElementById('num2').value);
        let num3 = parseFloat(document.getElementById('num3').value);
  
        // Check if the inputs are valid numbers to find the maximum
        if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) 
        {
          // Finding the maximum number
          let maxNum = getMaxOfThree(num1, num2, num3);
  
          // Displaying the maximum
          document.getElementById('maxn').textContent = `The maximum number is: ${maxNum}`;
        } else {
          document.getElementById('maxn').textContent = 'Please enter valid numbers in all inputs.';
        }
      });