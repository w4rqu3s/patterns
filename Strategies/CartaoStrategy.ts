// Algoritmo para pagar com Cartão

import PagamentoStrategy from "../PagamentoStrategy";

export default class CartaoStrategy implements PagamentoStrategy{

    public pagar(valor: Number): string {
    
        // lógica de pagamento

        return('Pagamento efetuado com Cartão: ' + valor);

    }

}