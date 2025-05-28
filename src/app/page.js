import Image from "next/image";
import styles from "./page.module.css";
import Topo from "./componentes/topo";
import bru from "/public/bruschetta.jpg";
import Cardapio  from "./componentes/cardapio";
import entradas from "../../public/entrada.png";
import massas from "../../public/massa.png";
import lupa from "../../public/lupa.png"

export default function Home() {
  return (
    <div className={styles.tudo}>
      <div className={styles.topo}>
        <Topo/>
      </div>

      <div className={styles.botao}>
        <button><Image width={20} height={20} src={entradas}/>Entradas</button>
        <button><Image width={20} height={20} src={entradas}/>Massas</button>
        <button><Image width={20} height={20} src={entradas}/>Carnes</button>
        <button><Image width={20} height={20} src={entradas}/>Bebidas</button>
        <button><Image width={20} height={20} src={entradas}/>Saladas</button>
        <button><Image width={20} height={20} src={entradas}/>Sobremesas</button>
      </div>

      <div className={styles.pesquisa}>
        <Image className={styles.imagempesq} width={20} height={20} src={lupa}></Image>
        <input placeholder="Pesquise aqui um dos pratos do nosso cardapio"></input>
      </div>

      <div className={styles.cardapio}>
        <h1>Cardapio</h1>
        <div className={styles.cardapiotudo}>
          <div className={styles.cardapiotudo2}>
            <div className={styles.linha}>
              <div>
                <Cardapio imagem ={bru} nome ={"Bruschetta"} tipo ={"Entrada"} preco ={"R$ 9,20"}
                info={"Prato original da itália, que leva fatias de pão italiano torrado, tomate picado, alho, manjericão e azeite."}          
                />
              </div>
              <div>
              <Cardapio imagem ={bru} nome ={"Bruschetta"} tipo ={"Entrada"} preco ={"R$ 9,20"}
              info={"Prato original da itália, que leva fatias de pão italiano torrado, tomate picado, alho, manjericão e azeite."}          
              />
              </div>
              <div>
              <Cardapio imagem ={bru} nome ={"Bruschetta"} tipo ={"Entrada"} preco ={"R$ 9,20"}
              info={"Prato original da itália, que leva fatias de pão italiano torrado, tomate picado, alho, manjericão e azeite."}          
              />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
