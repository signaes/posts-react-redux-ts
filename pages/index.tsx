import * as React from 'react'
import { connect } from 'react-redux'
import Head from 'next/head'
import { fetchPosts } from '../redux/actions/posts'
import { fetchUsers } from '../redux/actions/users'
import { Post as PostType } from '../redux/reducers/posts'
import { User as UserType } from '../redux/reducers/users'
import Post from '../components/Post'

interface PostsProps {
    posts?: [],
    postsError?: any,
    isFetchingPosts: boolean,
    hasFetchedPosts: boolean,
    fetchPosts: any,
    users?: [],
    usersError?: any,
    isFetchingUsers: boolean,
    hasFetchedUsers: boolean,
    fetchUsers: any
}

class PostsPage extends React.Component<PostsProps> {
    async componentDidMount() {
      await this.props.fetchUsers()
      this.props.fetchPosts()
    }

    findUserName(userId) {
      this.props.users.find((user: UserType) => user.id === userId)
    } 

    render() {
        console.log('props', this.props)

        if (this.props.isFetchingPosts || this.props.isFetchingUsers) {
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
                    this.props.hasFetchedPosts && this.props.hasFetchedUsers
                    ? (this.props.posts.map((post: PostType) => (
                      <Post
                        key={post.id}
                        title={post.title}
                        authorName={this.findUserName(post.userId)}
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

const mapStateToProps = ({
  posts: { posts = [], error: postsError, isFetching: isFetchingPosts, hasFetched: hasFetchedPosts },
  users: { users = [], error: usersError, isFetching: isFetchingUsers, hasFetched: hasFetchedUsers }
}) => ({
    posts,
    postsError,
    isFetchingPosts,
    hasFetchedPosts,
    users,
    usersError,
    isFetchingUsers,
    hasFetchedUsers
})

const mapDispatchToProps = {
    fetchPosts,
    fetchUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsPage)