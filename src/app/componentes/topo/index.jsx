import styles from "./topo.module.css";
import Image from "next/image";
import restaurante from "@/../../public/banner.png";

export default function Topo(){
    return(
        <div>
            <div className={styles.imagem}>
                <div className={styles.topo}>
                    <h1>Restaurant</h1>
                    <p>De pratos classicos a criacoes surpreendentes,</p>
                    <p>nosso cardapio é um requinte de sabores</p>
                    <p>refinados</p>
                </div>
            </div>
        </div>
    );
}