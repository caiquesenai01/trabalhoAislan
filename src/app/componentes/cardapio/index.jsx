import styles from "./cardapio.module.css";
import Image from 'next/image';

export default function Cardapio (props){
    return (
        <div className={styles.tudo}>
            <Image width={199} height={130} src={props.imagem}/>
            <h3>{props.nome}</h3>
            <h6>{props.tipo}</h6>
            <p>{props.info}</p>
            <h4>{props.preco}</h4>
        </div>
    );
 }