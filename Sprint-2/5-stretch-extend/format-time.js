// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  let [hours, minutes] = time.split(":").map(Number);

  let period = "am";

  if (hours === 0) {
    hours = 12; // 00:xx → 12:xx am
  } else if (hours === 12) {
    period = "pm"; // 12:xx → 12:xx pm
  } else if (hours > 12) {
    hours -= 12;
    period = "pm";
  }
  const hoursStr = hours.toString().padStart(2, "0");
  const minutesStr = minutes.toString().padStart(2, "0");

  return `${hoursStr}:${minutesStr} ${period}`;
}
console.assert(
  formatAs12HourClock("00:00") === "12:00 am",
  "Test 00:00 failed"
);
console.assert(
  formatAs12HourClock("08:00") === "08:00 am",
  "Test 08:00 failed"
);
console.assert(
  formatAs12HourClock("12:00") === "12:00 pm",
  "Test 12:00 failed"
);
console.assert(
  formatAs12HourClock("15:30") === "03:30 pm",
  "Test 15:30 failed"
);
console.assert(
  formatAs12HourClock("23:45") === "11:45 pm",
  "Test 23:45 failed"
);
console.assert(
  formatAs12HourClock("01:05") === "01:05 am",
  "Test 01:05 failed"
);