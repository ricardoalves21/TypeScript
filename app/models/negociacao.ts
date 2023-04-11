export class Negociacao {

  constructor(
    private _data: Date, 
    public readonly quantidade: number, 
    public readonly valor: number
  ) {}

  get data(): Date {
    // defensivamente criamos uma referencia de data baseada na propriedade _data e assim, 
    // o método get retorna a variável e não a propriedade para assim defendermos nossa propriedade _data
    const data = new Date(this._data.getTime()); 
    
    return data;
  }

  get volume(): number {
    return this.quantidade * this.valor;
  }

}