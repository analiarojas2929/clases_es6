"use strict";

var _cliente = _interopRequireDefault(require("./cliente.js"));
var _impuesto = _interopRequireDefault(require("./impuesto.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// Importando la clase Cliente
// Importando la clase Impuesto

document.getElementById('tax-form').addEventListener('submit', function (e) {
  e.preventDefault();
  var nombre = document.getElementById('nombre').value;
  var montoBrutoAnual = parseFloat(document.getElementById('montoBruto').value);
  var deducciones = parseFloat(document.getElementById('deducciones').value);
  if (isNaN(montoBrutoAnual) || isNaN(deducciones)) {
    alert('Por favor, ingresa valores válidos.');
    return;
  }

  // Creando el objeto impuesto
  var impuesto = new _impuesto["default"](montoBrutoAnual, deducciones);
  // Creando el objeto cliente
  var cliente = new _cliente["default"](nombre, impuesto);
  var resultado = "El impuesto a pagar por ".concat(cliente.nombre, " es: $").concat(cliente.calcularImpuesto().toFixed(2));
  document.getElementById('resultado').textContent = resultado;
});