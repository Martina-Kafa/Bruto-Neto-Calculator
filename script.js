function calculateBruto() {
  var amount = parseFloat(document.getElementById("amount").value);
  var percent = parseFloat(document.getElementById("percent").value);
  var bruto = amount * (1 + percent / 100);
  document.getElementById("bruto").innerHTML = bruto.toFixed(2);
}

function calculateNeto() {
  var amount = parseFloat(document.getElementById("amount").value);
  var percent = parseFloat(document.getElementById("percent").value);
  var neto = amount / (1 + percent / 100);
  document.getElementById("neto").innerHTML = neto.toFixed(2);
}
