import React from "react";
import List from './components/list/List'

function App() {
  return (
    <div className="App">
      {/* шапка */}
      <header className="header">
        <p>
          My Trello
        </p>
        </header>
      {/* меню */}
      <nav className="nav">
        <button className="btn">Меню</button>

      </nav>
      {/* тело */}
      <List />


      


    </div>
  );
}

export default App;
