import { record } from "./vmsg.js";

let recordHello = document.getElementById("recordButtonHello");
recordHello.onclick = function() {
  record({wasmURL: "vmsg.wasm", urgent: false}).then(blob => {
    console.log("Recorded MP3 for Hello", blob);
    var url = URL.createObjectURL(blob);
    window.localStorage.setItem('helloURL', url);
    window.localStorage.setItem('helloSet', "SET");
    $("#recordButtonHello").css("background-color", "#CDFFB6");
    $("#recordButtonHello").text("Recorded");
    $(".defaultrecord").css("color","white")
    $(".defaultrecord").css("border-color","white")
    if (window.localStorage.getItem('urgentSet') === "SET"
      && window.localStorage.getItem('fbSet') === "SET"){
        $("#enter").css("background-color","white")
    }
  });
};

let recordUrgent = document.getElementById("recordButtonUrgent");
recordUrgent.onclick = function() {
  record({wasmURL: "vmsg.wasm", urgent: true}).then(blob => {
    console.log("Recorded MP3 for Urgent", blob);
    var url = URL.createObjectURL(blob);
    window.localStorage.setItem('urgentURL', url);
    window.localStorage.setItem('urgentSet', "SET");
    $("#recordButtonUrgent").css("background-color", "#CDFFB6");
    $("#recordButtonUrgent").text("Recorded");
    $(".urgentrecord").css("color","white")
    $(".urgentrecord").css("border-color","white")
    if (window.localStorage.getItem('helloSet') === "SET"
      && window.localStorage.getItem('fbSet') === "SET"){
        $("#enter").css("background-color","white")
    }
  });
};
