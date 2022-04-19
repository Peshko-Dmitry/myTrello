import React, {useEffect, useState} from "react";
import List from './components/list/List'
import AddBackground from "./components/addBackground/AddBackground";

function App() {
  const [activeBackground, setActiveBackground] = useState()
  const [background, setBackground] = useState(

    JSON.parse(localStorage.getItem('background')) || []
    
)


  return (
    <div className="App" >
      <div className="wrapper" style={{backgroundImage: `url(${background})`}}></div>
      {/* шапка */}
      <header className="header">
        <p>
          My Trello
        </p>
        </header>
      {/* меню */}
      <AddBackground background={background} setBackground={setBackground} activeBackground={activeBackground} setActiveBackground={setActiveBackground}/>
      {/* тело */}
      <List />


      


    </div>
  );
}

export default App;
