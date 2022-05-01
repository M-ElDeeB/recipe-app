import { BrowserRouter, Link } from "react-router-dom";
import Categories from "./component/Categories";
import Search from "./component/Search";
import Pages from "./pages/Pages";
import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi";
function App() {
  return (
    <>
      <BrowserRouter>
        <Nav>
          <GiKnifeFork/>
          <Logo to="/">deliciousness</Logo>
        </Nav>
        <Search />
        <Categories />
        <Pages />
      </BrowserRouter>
    </>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
`;

const Nav = styled.div`
  padding: 2rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`;

export default App;
