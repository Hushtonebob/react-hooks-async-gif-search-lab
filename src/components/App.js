import React,{useState} from "react";
import GifListContainer from "./GifListContainer";
import NavBar from "./NavBar";
import GifSearch from "./GifSearch";

// the App component should render out the GifListContainer component

function App() {

  const [search, setSearch] = useState(" ");
  const [render, setRender] = useState(true);
  const [text, setText] = useState("");
  
  function handleClick(e){
    setSearch(e);
    setText("");
    setRender(!render);
  }

  return (
    <div>
      <NavBar color="black" title="Giphy Search" setSearch={setSearch} />
      <GifSearch handleClick={handleClick} text={text} setText={setText} />
      <GifListContainer key={""} search={search} render={render} />
    </div>
  );
}

export default App;
