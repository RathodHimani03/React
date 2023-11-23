import { Link, useNavigate } from "react-router-dom";

function HomePage() {

  const navigate = useNavigate();

  function navigateHandler() {
    navigate('product')
  }

  return (
    <>
      <h1>This is HomePage...</h1>
      <p>Go to the <Link to="product">Products</Link> page..</p>
      <p>
        <button onClick={navigateHandler }>Navigate</button>
      </p>
    </>
  )
};


export default HomePage;