import * as React from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from '../redux/actions/counter'
import { ActionFunc } from '../redux/actions/counter';
import Head from 'next/head'

const Home: React.FC<{ counter: number, increment: ActionFunc, decrement: ActionFunc }> = ({ counter, increment, decrement }) => {
  return (
    <div className="container">
      <Head>
        <title>Next.js Typescript starter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>{ counter }</h1>
        <div>
          <button onClick={() => increment()}>Increment</button>
          <button onClick={() => decrement()}>Decrement</button>
        </div>
        <div>
          <button onClick={() => increment(10)}>+ 10</button>
          <button onClick={() => decrement(10)}>- 10</button>
        </div>
      </main>

      <footer>
      </footer>

    </div>
  )
}

const mapStateToProps = state => ({
  counter: state.counter.value
})

const mapDispatchToProps = {
  increment,
  decrement
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)