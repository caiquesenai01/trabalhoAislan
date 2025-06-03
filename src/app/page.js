'use client';
import { use, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Topo from "./componentes/topo";
import entradas from "../../public/entrada.png";
import massas from "../../public/massa.png";
import lupa from "../../public/lupa.png";
import carne from "../../public/carne.png";
import bebida from "../../public/bebidas.png";
import salada from "../../public/salada.png";
import sobre from "../../public/sobremesa.png";
import { retornarCardapio, filtrarCardapio, buscarCardapio } from "./servicos";
import ItemCardapio from "./componentes/cardapio";

export const handleTextoPesquisa = () => {
  const [TextoPesquisa, setTextoPesquisa] = useState("");
  return { TextoPesquisa, setTextoPesquisa };
};

export default function Home() {
    const [listaCardapio, setListaCardapio] = useState(retornarCardapio());
    const [textoDigitado, setTextoDigitado] = useState("");

    const handleFiltrarCategoria = (categoria) =>{
      setListaCardapio(filtrarCardapio(categoria));
      setTextoDigitado("");
    };

    const handlelimpafiltro = ()=>{
      setListaCardapio(retornarCardapio());
      setTextoDigitado("");
    };

    const handlebuscarCardapio =(texto)=>{
    setTextoDigitado(texto);
    setListaCardapio(buscarCardapio(texto));
    setTextoPesquisa(texto);
    };

  return (
    <div className={styles.tudo}>

      <div className={styles.topo}>
        <Topo/>
      </div>

      <div className={styles.botao}>
        <button onClick={()=>handleFiltrarCategoria("Entradas")}><Image width={20} height={20} src={entradas}/>Entradas</button>
        <button onClick={()=>handleFiltrarCategoria("Massas")}><Image width={20} height={20} src={massas}/>Massas</button>
        <button onClick={()=>handleFiltrarCategoria("Carnes")}><Image width={20} height={20} src={carne}/>Carnes</button>
        <button onClick={()=>handleFiltrarCategoria("Bebidas")}><Image width={20} height={20} src={bebida}/>Bebidas</button>
        <button onClick={()=>handleFiltrarCategoria("Saladas")}><Image width={20} height={20} src={salada}/>Saladas</button>
        <button onClick={()=>handleFiltrarCategoria("Sobremesas")}><Image  width={20} height={17} src={sobre}/>Sobremesas</button>
      </div>

      <div className={styles.limpafiltro}>
        <button onClick={handlelimpafiltro}>Limpar Filtro</button>
      </div>

      <div className={styles.pesquisa}>
        <Image className={styles.imagempesq} width={20} height={20} src={lupa}></Image>
        <input 
        type="text" 
        value={textoDigitado} 
        onChange={(event)=> handlebuscarCardapio(event.target.value)}
        placeholder="Pesquise aqui um dos pratos do nosso cardapio"/>
      </div>

      <div className={styles.cardapio_titulo}>
        <h1>Cardapio</h1>
      </div>

      <div className={styles.cardapio}>
        {listaCardapio.map((cardapiovar)=>(
          <ItemCardapio key={cardapiovar.id} nome={cardapiovar.nome} categoria={cardapiovar.categoria} preco={cardapiovar.preco} descricao={cardapiovar.descricao} content={cardapiovar.content} className="cardapiovar"/>
        ))

        //  (content == 4 || content ==  5) && (
        //   // <ItemCardapio aqui se funcionar poderia, chamar outro componente para o card 4 e 5 que são os dois que tem que ficar maior/>
        //  ) 
        }
      </div>
    </div>
  );
}
