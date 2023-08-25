import styles from './Colored.style.css'

export function Colored({color}){
    return(
        <div className={styles.card}> 
            
        <h1>Minha Aplicação de Cores</h1>
        <ColorList /> {/* Renderize o novo componente aqui */}

        </div>
    )
}