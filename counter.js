
import Worker from "./worker?worker";
const w = new Worker();
w.postMessage(1);


export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${w}`
  }
  element.addEventListener('click', () => setCounter(++counter))
  setCounter(0)
}
