function getSolution() {
  const problem = document.getElementById("problem").value.toLowerCase();
  const output = document.getElementById("solution");

  let solution = "";

  if (problem.includes("slow")) {
    solution = "Clear storage & restart device.";
  } else if (problem.includes("battery")) {
    solution = "خفض brightness & close background apps.";
  } else if (problem.includes("heat")) {
    solution = "Remove case & avoid heavy apps.";
  } else {
    solution = "Try restarting or seek IT help.";
  }

  output.textContent = solution;
}