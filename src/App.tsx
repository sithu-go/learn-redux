import { useSelector, useDispatch } from 'react-redux'
import { RootState } from "./store"
import './App.css'

function App() {

  const counter = useSelector((state: RootState) => state.counter);

  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: "INCREMENT" })
  }

  const decrement = () => {
    dispatch({ type: "DECREMENT" })
  }
  const addBy = () => {
    dispatch({ type: "ADD", payload: 10 })
  }

  return (
    <>
      <div>
        <h1>Counter</h1>
        <p>Count: {counter}</p>

        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={addBy}>Add By 10</button>
      </div>
    </>
  )
}

export default App
