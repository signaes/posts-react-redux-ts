import * as React from 'react'
import { connect } from 'react-redux'
import Head from 'next/head'
import { fetchPosts } from '../redux/actions/posts'
import { Post as PostType } from '../redux/reducers/posts'
import Post from '../components/Post'

interface PostsProps {
    posts?: [],
    error?: any,
    isFetching: boolean,
    hasFetched: boolean,
    fetchPosts: any
}

class PostsPage extends React.Component<PostsProps> {
    componentDidMount() {
      this.props.fetchPosts()
    }

    render() {
        if (this.props.isFetching) {
            return 'Loading'
        }

        return (
            <div className="container">
            <Head>
                <title>Posts</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                { 
                    this.props.hasFetched
                    ? (this.props.posts.map((post: PostType) => (
                      <Post
                        title={post.title}
                        authorName={post.author}
                        content={post.body}
                      />
                    )))
                    : null
                }
            </main>

            <footer>
            </footer>

            </div>
        )
    }
}

const mapStateToProps = ({ posts: { posts, error, isFetching, hasFetched } }) => ({
    posts,
    error,
    isFetching,
    hasFetched
})

const mapDispatchToProps = {
    fetchPosts
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsPage)