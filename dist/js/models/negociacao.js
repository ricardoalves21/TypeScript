export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get data() {
        // defensivamente criamos uma referencia de data baseada na propriedade _data e assim, 
        // o método get retorna a variável e não a propriedade para assim defendermos nossa propriedade _data
        const data = new Date(this._data.getTime());
        return data;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
}
