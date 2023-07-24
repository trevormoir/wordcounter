import { useNavigate } from 'react-router-dom';
import PageNotFoundImage from "../assets/page-not-found.jpg";

export const PageNotFound = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  return (
    <main>
      <section className="pnf">
        <div className="oops">
          <p data-textid="pnfText">Oops - Page Not Found!</p>
          <img src={PageNotFoundImage} alt="Page Not Found"/>
          <button onClick={handleClick} className="btn btn-primary">Go Back To Word Counter</button>
          </div>
      </section>
    </main>
  )
}
