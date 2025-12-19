// CLOCK

function showTime() {
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();

  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  let currentTime = hour + ":" + min + ":" + sec;

  document.getElementById("clockP").innerHTML = currentTime;
}

// GREETING

function greetUser() {
  let userName = "Pedro";
  let time = new Date();
  let hour = time.getHours();
  let greeting;

  if (hour >= 0 && hour < 12) {
    greeting = "Good Morning";
  } else if (hour >= 12 && hour < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  let greetingName = greeting + ", " + userName;

  document.getElementById("greetingP").innerHTML = greetingName;
}

setInterval(showTime, 1000);
showTime();
greetUser();
