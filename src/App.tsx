import { useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { RootState } from "./store";

function App() {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn)
  return (
    <div className="App">
      { isLoggedIn ? <Layout /> : <Auth />}
    </div>
  );
}

export default App;
