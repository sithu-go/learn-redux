import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import { RootState, actions } from './store';

function App() {

  const counter = useSelector((state: RootState) => state.counter);

  const dispatch = useDispatch();

  const increment = () => {
    dispatch(actions.increment())
  }

  const decrement = () => {
    dispatch(actions.decrement())
  }

  // const addBy = () => {
  //   dispatch(actions.addBy(10))
  // }

  return (
    <>
      <div>
        <h1>Counter</h1>
        <p>Count: {counter}</p>

        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={() => dispatch(actions.addBy(10))}>Add By 10</button>
      </div>
    </>
  )
}

export default App
