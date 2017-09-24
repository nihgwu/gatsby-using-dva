import React from 'react'
import Link from 'gatsby-link'
import { connect } from 'react-redux'

const SecondPage = ({ count, increment, decrement }) => (
  <div>
    <h1>Dva page</h1>
    <p>Count: {count}</p>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <br/>
    <br/>
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SecondPage)
