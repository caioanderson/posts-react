import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/caioanderson.png" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>

                        <div className={styles.authorAndTime}>
                            <strong>Caio Anderson</strong>
                            <time title="11 de Maio as 8 horas" dateTime="2002-05-11 08:00:00">
                                Cerca de 1h atras
                            </time>
                        </div>
                        <button title="Deletar comentario">
                            <Trash size={24} />
                        </button>

                    </header>
                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp size={20}/>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}