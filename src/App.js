import "./App.css";

import Header from "./components/Header";
import SearchForm from "./components/SearchForm";

const App = () => {
  return (
    <div className="app">
      <Header/>
      <div className="content">
        <SearchForm />
      </div>
    </div>
  );
}

export default App;
