// pressure-runner.js — Universal Pressure Headless Runner
const tokens = {
  greet: () => "Hello from token!",
  time: () => "Current time: " + new Date().toLocaleTimeString(),
  random: () => "Random #: " + Math.floor(Math.random() * 1000),
  echo: (msg = "pressure") => "Echo: " + msg,
  task: () => "Job complete ✅",
};

const fields = ["main", "sidebar", "widget-1", "footer"];
let pressure = 70;

function broadcast() {
  console.log("--- broadcast (pressure=" + pressure + ") ---");
  fields.forEach((f) => {
    const fnNames = Object.keys(tokens);
    const chosen = fnNames[Math.floor(Math.random() * fnNames.length)];
    const result = tokens[chosen]();
    console.log("[" + chosen + "] -> " + f + " => " + result);
  });
}

broadcast();
