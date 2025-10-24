// Algoritmo para pagar com pix

import PagamentoStrategy from "../PagamentoStrategy";

export default class PixStrategy implements PagamentoStrategy{

    public pagar(valor: Number): string {

        // lógica de pagamento

        return('Pagamento efetuado com Pix: ' + valor);

    }

}