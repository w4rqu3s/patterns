// Classe contexto

import PagamentoStrategy from "./PagamentoStrategy";

export default class Pagamento {
    private strategy: PagamentoStrategy;
    private valor: Number;

    constructor(strategy: PagamentoStrategy, valor: Number) {
        this.strategy = strategy;
        this.valor = valor;
    }

    public setStrategy(strategy: PagamentoStrategy) {
        this.strategy = strategy;
    }

    public logic() {
        const response = this.strategy.pagar(this.valor);
        return response;
    }
}