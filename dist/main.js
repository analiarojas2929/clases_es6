"use strict";

var _cliente = _interopRequireDefault(require("./cliente.js"));
var _impuesto = _interopRequireDefault(require("./impuesto.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// Importando la clase Cliente
// Importando la clase Impuesto

// Función para agregar puntos a los números
function formatNumber(value) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// Función para formatear la entrada de un input
function formatInput(input) {
  var value = input.value.replace(/\./g, ""); // Elimina los puntos
  if (!isNaN(value) && value !== "") {
    input.value = formatNumber(value); // Agrega los puntos
  }
}

// Agrega el evento 'input' a los campos para agregarle puntos en los miles
document.getElementById("montoBruto").addEventListener("input", function () {
  formatInput(this);
});
document.getElementById("deducciones").addEventListener("input", function () {
  formatInput(this);
});
function formatearNumero(numero) {
  // Redondea a dos decimales
  var partes = numero.toFixed(2).split(".");

  // Formatea la parte entera con puntos de miles
  partes[0] = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  // Une la parte entera y los decimales con una coma
  return partes.join(",");
}
document.getElementById('taxForm').addEventListener('submit', function (e) {
  e.preventDefault();
  var nombre = document.getElementById('nombre').value;
  var montoBrutoAnual = parseFloat(document.getElementById('montoBruto').value.replace(/\./g, ''));
  var deducciones = parseFloat(document.getElementById('deducciones').value.replace(/\./g, ''));
  if (isNaN(montoBrutoAnual) || isNaN(deducciones)) {
    alert('Por favor, ingresa valores válidos.');
    return;
  }

  // Creando el objeto impuesto
  var impuesto = new _impuesto["default"](montoBrutoAnual, deducciones);
  // Creando el objeto cliente
  var cliente = new _cliente["default"](nombre, impuesto);
  var resultado_titulo = "<i class=\"fas fa-check-circle emoji\"></i>C\xE1lculo realizado con \xE9xito";
  var resultado_cliente = "".concat(cliente.nombre);
  var resultado_monto_bruto = "$".concat(impuesto.montoBrutoAnual);
  var resultado_deducciones = "$".concat(impuesto.deducciones);
  var resultado_impuesto_calculado = "$".concat(formatearNumero(cliente.calcularImpuesto()));
  document.getElementById('resultado_titulo').innerHTML = resultado_titulo;
  document.getElementById('resultado_cliente').textContent = resultado_cliente;
  document.getElementById('resultado_monto_bruto').textContent = resultado_monto_bruto;
  document.getElementById('resultado_deducciones').textContent = resultado_deducciones;
  document.getElementById('resultado_impuesto_calculado').textContent = resultado_impuesto_calculado;
});