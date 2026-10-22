let form = document.getElementById("bookingForm");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    let guests = document.getElementById("guests").value;
    let selectedDate = new Date(date);
    let today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selectedDate < today) {
        document.getElementById("message").style.color = "red";
        document.getElementById("message").innerText =
            "Please select today or a future date.";
        return;
    }
    document.getElementById("message").style.color = "green";
    document.getElementById("message").innerText =
        "Thank you, " + name + "! Your table request for " +
        guests + " guest(s) on " + date + " at " + time +
        " has been received.";
    form.reset();
});
