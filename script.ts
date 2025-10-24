import Pagamento from "./Pagamento";
import CartaoStrategy from "./Strategies/CartaoStrategy";

import PixStrategy from "./Strategies/PixStrategy";

// *lógica da aplicação*

// Cliente vai efetuar um pagamento com pix
const pagamento = new Pagamento(new PixStrategy(), 200);
const resposta = pagamento.logic();
console.log(resposta)

// Cliente quer mudar a forma de pagamento
pagamento.setStrategy(new CartaoStrategy());