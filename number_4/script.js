function convertTo24Hour() {
    let time12hr = document.getElementById("timeInput").value;
    
    // Check if the input is empty
    if (time12hr === "") {
        document.getElementById("result").textContent = "Please enter a time.";
        return;
    }

    // Regular expression to extract time and period (AM/PM)
    let regex = /(\d{1,2}):(\d{2})\s*(AM|PM)/i;
    let match = time12hr.match(regex);

    if (match) {
        let hours = parseInt(match[1]);
        let minutes = match[2];
        let period = match[3].toUpperCase();

        // Convert to 24-hour format
        if (period === "AM" && hours === 12) {
            hours = 0; // Handle midnight case
        } else if (period === "PM" && hours !== 12) {
            hours += 12; // Convert PM to 24-hour format
        }

        // Format the result
        let time24hr = hours.toString().padStart(2, '0') + ":" + minutes;
        document.getElementById("result").textContent = time24hr;
    } else {
        document.getElementById("result").textContent = "Invalid time format. Please enter in 12-hour format (e.g., 02:30 PM).";
    }
}
