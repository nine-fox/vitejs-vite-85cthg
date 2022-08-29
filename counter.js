import wasm from './sample.wasm?url';

// console.log(wasm);

export function setupCounter(element) {
  let counter = 0;
  const setCounter = (count) => {
    counter = count;
    element.innerHTML = `${wasm}`;
  };
  element.addEventListener('click', () => setCounter(++counter));
  setCounter(0);
}
