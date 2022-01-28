let name = prompt("What is your name?");
let textInfo = document.querySelector("#myName").append(name);

let showTime = () => {
let time = new Date().toLocaleTimeString();
let dayName = new Date().toLocaleDateString("tr-TR", {weekday: "long"})

document.querySelector("#myClock").innerHTML = time + " " + dayName;

setTimeout(showTime, 1000)

}

showTime();