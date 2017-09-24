import React from 'react'
import Link from 'gatsby-link'
import { connect } from 'react-redux'

const SecondPage = ({ count, increment, decrement, delayed }) => (
  <div>
    <h1>Dva page</h1>
    <p>Count: {count}</p>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <br />
    <button onClick={() => delayed(1000)}>Delayed 1000ms</button>
    <button onClick={() => delayed(3000)}>Delayed 3000ms</button>
    <br />
    <br />
    <Link to="/">Go back to the homepage</Link>
  </div>
)

const mapStateToProps = ({ app: { count } }) => {
  return { count }
}

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({ type: 'app/increment' }),
    decrement: () => dispatch({ type: 'app/decrement' }),
    delayed: timeout => dispatch({ type: 'app/delayed', payload: { timeout } }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SecondPage)
