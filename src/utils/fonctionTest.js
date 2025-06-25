export function startCounting(setSeconds) {
  let seconds = 0;
  return setInterval(() => {
    seconds += 1;
    setSeconds(seconds);
  }, 1000);
}