export class NegociacoesView { // o 'export' é utilizado porque depois precisaremos importar esta classe em outros locais

  template() : string {
    return `
      <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th>DATA</th>
            <th>QUANTIDADE</th>
            <th>VALOR</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    `;
  }
}