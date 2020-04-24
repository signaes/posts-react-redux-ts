import '../assets/styles/app.scss'
import App, { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import store from '../redux/store'

class MyApp extends App<{ store: { [key:string]: any }}> {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    return { pageProps }
  }

  render() {
    const { Component, pageProps, store } = this.props

    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    )
  }
}

export default withRedux(() => store)(MyApp)
