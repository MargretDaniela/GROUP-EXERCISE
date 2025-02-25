function convertTo24HourFormat(time12hr) {
    let [time, period] = time12hr.split(' ');
    let [hours, minutes] = time.split(':'); 

    if (period === "PM" && hours !== "12") {
      hours = (parseInt(hours) + 12).toString();
    } else if (period === "AM" && hours === "12") {
      hours = "00"; 
    }

    return `${hours}:${minutes}`; 
  }


  document.getElementById('timeForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let time12hr = document.getElementById('timeInput').value.trim();

    let time24hr = convertTo24HourFormat(time12hr);

    document.getElementById('result').textContent = `24-hour format: ${time24hr}`;
  });