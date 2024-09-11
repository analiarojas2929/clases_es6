import Cliente from './cliente.js';  // Importando la clase Cliente
import Impuesto from './impuesto.js'; // Importando la clase Impuesto

document.getElementById('tax-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const montoBrutoAnual = parseFloat(document.getElementById('montoBruto').value);
  const deducciones = parseFloat(document.getElementById('deducciones').value);

  if (isNaN(montoBrutoAnual) || isNaN(deducciones)) {
    alert('Por favor, ingresa valores válidos.');
    return;
  }

  // Creando el objeto impuesto
  const impuesto = new Impuesto(montoBrutoAnual, deducciones);
  // Creando el objeto cliente
  const cliente = new Cliente(nombre, impuesto);

  const resultado = `El impuesto a pagar por ${cliente.nombre} es: $${cliente.calcularImpuesto().toFixed(2)}`;

  document.getElementById('resultado').textContent = resultado;
});
