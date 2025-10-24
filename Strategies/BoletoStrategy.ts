// Algoritmo para pagar com boleto

import PagamentoStrategy from "../PagamentoStrategy";

export default class BoletoStrategy implements PagamentoStrategy{

    public pagar(valor: Number): string {
    
        // lógica de pagamento

        return('Pagamento a efetuar com Boleto: ' + valor);

    }

}