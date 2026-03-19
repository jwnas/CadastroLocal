import Produto from "./Produto";

export default class GestorDados {
  constructor() {
    this.produtos = [
      new Produto(1, "Banana", 1000),
      new Produto(2, "Morango", 300),
    ];
  }

  async listar() {
    return this.produtos;
  }

  async salvar(produto) {
    this.produtos.push(produto);
    return true;
  }

  async remover(codigo) {
    this.produtos = this.produtos.filter((p) => p.codigo !== codigo);
    return true;
  }
}
