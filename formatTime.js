function formatDuration(seconds) {
  if (seconds === 0) return "now";
  let time = [365 * 24 * 60 * 60, 24 * 60 * 60, 60 * 60, 60, 1];
  let year =
    seconds % time[0] !== seconds ? Math.floor(seconds / time[0]) : null;
  let day =
    seconds % time[0] !== seconds ? Math.floor(seconds / time[1]) : null;
  let hour =
    seconds % time[1] !== seconds ? Math.floor(seconds / time[2]) : null;
  let min =
    seconds % time[2] !== seconds ? Math.floor(seconds / time[3]) : null;
  let second =
    seconds % time[3] !== seconds ? Math.floor(seconds / time[4]) : null;
  console.log(year, day, hour, min, second);
}

console.log(formatDuration(3662));
