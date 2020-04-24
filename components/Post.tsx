import * as React from 'react'

const Post: React.SFC<{[key: string]: any}> = ({ title, authorName, body }) => {
    return (
        <article>
            <header>
                <h2>{ title }</h2>
                <h3>by { authorName}</h3>
            </header>
            <div>
                { body }
            </div>
        </article>
    )
}

export default Post