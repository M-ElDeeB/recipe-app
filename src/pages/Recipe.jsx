import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Recipe = () => {
  const [details, setDetails] = useState([]);
  const [activeTab, setActiveTab] = useState("instructions");
  let params = useParams();

  useEffect(() => {
    fetchDetails(params.name);
  }, [params.name]);

  const fetchDetails = async (name) => {
    const { data } = await axios.get(
      `https://api.spoonacular.com/recipes/${name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    setDetails(data);
  };

  return (
    <DetailWrapper>
      <Img>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
      </Img>
      <Info>
        <Button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingrediants
        </Button>
        {activeTab === "instructions" && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
          </div>
        )}
        {activeTab === "ingredients" && (
          <ul>
            {details.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
};

const DetailWrapper = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 767px) {
    flex-direction: column;
  }
  gap: 2rem;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: #fff;
  }
  h2 {
    margin-bottom: 2rem;
  }
  ul {
    margin-top: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
    color: rgb(56, 56, 56);
    font-weight: 500;
  }
`;
const Img = styled.div`
  flex: 1;
  img {
    width: 100%;
    margin: 2rem 0;
    border-radius: 2rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: #fff;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
  cursor: pointer;
`;

const Info = styled.div`
  flex: 2;
`;
export default Recipe;
