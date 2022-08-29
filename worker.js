
import wasm from './sample.wasm?url';



self.addEventListener("message", () => {
  console.log(wasm);
});
