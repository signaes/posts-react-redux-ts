import * as React from 'react'
import styles from './styles.module.scss'

const Post: React.SFC<{[key: string]: any}> = ({ title, authorName, body }) => {
    return (
        <article className={styles.post}>
            <header className={styles.postHeader}>
                <h2 className={styles.postTitle}>{ title }</h2>
                <h3>by { authorName}</h3>
            </header>
            <div className={styles.postBody}>
                { body }
            </div>
        </article>
    )
}

export default Post