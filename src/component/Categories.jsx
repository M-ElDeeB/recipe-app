import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Categories = () => {
  return (
    <List>
      <SLink to="/cuisine/italian">
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SLink>
      <SLink to="/cuisine/american">
        <FaHamburger />
        <h4>American</h4>
      </SLink>
      <SLink to="/cuisine/thai">
        <GiNoodles />
        <h4>Thai</h4>
      </SLink>
      <SLink to="/cuisine/japanese">
        <GiChopsticks />
        <h4>Japanease</h4>
      </SLink>
    </List>
  );
};

const List = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
  margin: 2rem 0;
`;

const SLink = styled(NavLink)`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);
  h4 {
    color: #fff;
  }
  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
  }
  svg {
    color: #fff;
    margin-bottom: .5rem;
  }
  h4 {
    color: #fff;
  }
`;

export default Categories;
