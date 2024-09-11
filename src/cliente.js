import Impuesto from './impuesto.js';  // Asegúrate de que se esté importando correctamente

class Cliente {
  constructor(nombre, impuesto) {
    this._nombre = nombre;
    this._impuesto = impuesto;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nuevoNombre) {
    this._nombre = nuevoNombre;
  }

  calcularImpuesto() {
    return this._impuesto.calcular();
  }
}

export default Cliente;
