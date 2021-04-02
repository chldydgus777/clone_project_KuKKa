import "./App.css";
import Header from "../components/Header";
import styled from "styled-components";
import PostList from "../components/PostList";
function App() {
  return (
    <div className="App">
      <Header />
      <PostList />
      <Main />
    </div>
  );
}

const Main = styled.div`
  background: green;
  width: 100%;
  height: 800px;
`;

export default App;
