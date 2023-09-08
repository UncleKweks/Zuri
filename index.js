function setup() {
  const date = new Date();
  const currentUTC = document.getElementById("currentUTC");
  const currentDay = document.getElementById("currentDay");

  let daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let currentDayinUTC = date.getTime();
  const todayIndex = new Date().getDay(); // 0 for Sunday, 1 for Monday, etc.
  const displayCurrentDay = daysOfWeek[todayIndex];

  currentUTC.textContent = currentDayinUTC;
  currentDay.textContent = displayCurrentDay;
  console.log("THis is working", currentDayinUTC);
}

setup();
