import styles from "./Sidebar.module.css";
import { PencilLine} from "phosphor-react"

export default function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img 
            className={styles.cover}
            src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" alt="" />
        <div className={styles.profile}>
        <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/42099466?v=4" alt="" />

            <strong>Rômulo Valentim</strong>
            <span>Web Developer</span>
        </div>

        <footer>
            <a href="#">
                <PencilLine size={20}/>
                Editar seu Perfil
            </a>
        </footer>
        </aside>
    )
}