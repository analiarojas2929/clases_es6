class Impuesto {
    constructor(montoBrutoAnual, deducciones) {
      this._montoBrutoAnual = montoBrutoAnual;
      this._deducciones = deducciones;
    }
  
    get montoBrutoAnual() {
      return this._montoBrutoAnual;
    }
  
    set montoBrutoAnual(valor) {
      this._montoBrutoAnual = valor;
    }
  
    get deducciones() {
      return this._deducciones;
    }
  
    set deducciones(valor) {
      this._deducciones = valor;
    }
  
    calcular() {
      return (this._montoBrutoAnual - this._deducciones) * 0.21;
    }
  }
  
  export default Impuesto;
  