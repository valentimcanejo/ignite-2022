import { Header } from "./components/Header";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <aside>sidebar</aside>
      </div>
    </div>
  );
}

export default App;
