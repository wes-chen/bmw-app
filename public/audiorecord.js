import { record } from "./vmsg.js";

let recordHello = document.getElementById("recordButtonHello");
recordHello.onclick = function() {
  record({wasmURL: "vmsg.wasm", urgent: false}).then(blob => {
    console.log("Recorded MP3 for Hello", blob);
    var url = URL.createObjectURL(blob);
    window.localStorage.setItem('helloURL', url);
  });
};

let recordUrgent = document.getElementById("recordButtonUrgent");
recordUrgent.onclick = function() {
  record({wasmURL: "vmsg.wasm", urgent: true}).then(blob => {
    console.log("Recorded MP3 for Urgent", blob);
    var url = URL.createObjectURL(blob);
    window.localStorage.setItem('urgentURL', url);
  });
};
