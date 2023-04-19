export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    // defensivamente criamos uma referencia de data baseada na propriedade _data e assim,
    // o método get retorna a variável e não a propriedade para assim defendermos nossa propriedade _data
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    // todo método static pode ser chamado diretamente pela própria classe | invocando a classe. Exemplo: Classe.metodo()
    static criaDe(dataString, quantidadeString, valorString) {
        const expRegEx = /-/g;
        const date = new Date(dataString.replace(expRegEx, ","));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }
}
