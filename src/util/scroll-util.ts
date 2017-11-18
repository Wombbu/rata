// Robert Penner's easeInOutQuad
const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
  t /= d / 2
  if (t < 1) return c / 2 * t * t + b
  t--
  return -c / 2 * (t * (t - 2) - 1) + b
}

const scrollToBottom = () => {
  let timeStart: number;
  let duration: number;
  let distance: number;
  let start: number;

  const scrollLoop = (resolve: () => void) => (timeCurrent: number) => {
    const timeElapsed = timeCurrent - timeStart;
    const nextScrollPos = easeInOutQuad(timeElapsed, start, distance, duration);

    window.scrollTo(0, nextScrollPos)

    if (timeElapsed < duration) {
      window.requestAnimationFrame(scrollLoop(resolve))
    } else {
      window.scrollTo(0, start + distance);
      resolve();
    }
  }

  return (dur: number) => {
    duration = dur;
    timeStart = performance.now();
    start = window.scrollY || window.pageYOffset;
    const stop = document.body.scrollHeight - window.innerHeight;

    distance = stop - start;

    return new Promise((resolve, reject) => {
      window.requestAnimationFrame(scrollLoop(resolve));
    });
  }
}

// Export a singleton
export default scrollToBottom();