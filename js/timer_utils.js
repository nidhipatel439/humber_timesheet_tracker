//create a function for convert seconds to HH:MM:SS
// https://stackoverflow.com/a/1322771/17977703
const secondsToHHMMSS = (seconds) => {
  return new Date(seconds * 1000).toISOString().substring(11, 19);
};

//create a function for convert HH:MM:SS to seconds
// https://stackoverflow.com/a/9640384/17977703
const hhmmssToSeconds = (timeString) => {
  let a = timeString.split(":");
  return +a[0] * 60 * 60 + +a[1] * 60 + +a[2];
};
