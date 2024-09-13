import Cliente from './cliente.js';  // Importando la clase Cliente
import Impuesto from './impuesto.js'; // Importando la clase Impuesto

// Función para agregar puntos a los números
function formatNumber(value) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// Función para formatear la entrada de un input
function formatInput(input) {
  let value = input.value.replace(/\./g, ""); // Elimina los puntos
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
  let partes = numero.toFixed(2).split(".");

  // Formatea la parte entera con puntos de miles
  partes[0] = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  // Une la parte entera y los decimales con una coma
  return partes.join(",");
}


document.getElementById('taxForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const montoBrutoAnual = parseFloat(document.getElementById('montoBruto').value.replace(/\./g, ''));
  const deducciones = parseFloat(document.getElementById('deducciones').value.replace(/\./g, ''));

  if (isNaN(montoBrutoAnual) || isNaN(deducciones)) {
    alert('Por favor, ingresa valores válidos.');
    return;
  }

  // Creando el objeto impuesto
  const impuesto = new Impuesto(montoBrutoAnual, deducciones);
  // Creando el objeto cliente
  const cliente = new Cliente(nombre, impuesto);

  const resultado_titulo = `<i class="fas fa-check-circle emoji"></i>Cálculo realizado con éxito`;
  const resultado_cliente = `${cliente.nombre}`;
  const resultado_monto_bruto = `$${impuesto.montoBrutoAnual}`;
  const resultado_deducciones = `$${impuesto.deducciones}`;
  const resultado_impuesto_calculado = `$${formatearNumero(cliente.calcularImpuesto())}`;

  document.getElementById('resultado_titulo').innerHTML = resultado_titulo;
  document.getElementById('resultado_cliente').textContent = resultado_cliente;
  document.getElementById('resultado_monto_bruto').textContent = resultado_monto_bruto;
  document.getElementById('resultado_deducciones').textContent = resultado_deducciones;
  document.getElementById('resultado_impuesto_calculado').textContent = resultado_impuesto_calculado;


});
