export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes; // Esse 'ReadonlyArray' não permite o uso de um método que modifica a lista (deleção de itens)
    }
}
