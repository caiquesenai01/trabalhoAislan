import {CardapioLista} from "../componentes/cardapio";

export const retornarCardapio = () =>{
    return CardapioLista;
};

export const buscarCardapio = (textoDigitado) =>{
    return CardapioLista.filter((cardapio)=>
        cardapio.nome.toLocaleLowerCase().includes(textoDigitado.toLocaleLowerCase()) ||
        cardapio.descricao.toLocaleLowerCase().includes(textoDigitado.toLocaleLowerCase())
    );
};

export	const filtrarCardapio = (categoria) =>{
    return CardapioLista.filter((cardapio) => cardapio.categoria === categoria);
};