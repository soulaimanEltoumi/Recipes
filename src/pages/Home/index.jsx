import Carousel from "../../components/Carousel";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/FoodList");
  };
  return (
    <>
      <h1>Welcome to the home page</h1>
      <Carousel />
      <div>
        <button onClick={handleButtonClick}> Recipes </button>
      </div>
    </>
  );
}
