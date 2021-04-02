import "./App.css";
import Header from "../components/Header";
import styled from "styled-components"

function App() {
  return (
    <div className="App">
      <Header />
      <Main/>      
    </div>
  );
}

const Main = styled.div`
  background : green;
  width : 100%;
  height : 800px;
`;

export default App;


