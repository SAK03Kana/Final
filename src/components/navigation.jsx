import { Link } from "react-router-dom";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <Link to="/" className="navbar-brand page-scroll"></Link>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/">Басты бет</Link>
            </li>
            <li>
              <Link to="/services">Алаш арыстары</Link>
            </li>
            <li>
              <Link to="/benefits">Жеті қазына</Link>
            </li>
            <li>
              <Link to="/gallery">Галерея</Link>
            </li>
            <li>
              <Link to="/contact">Бізбен байланыс</Link>
            </li>
           
            <li>
              <Link to="/testimonials">Пікірлер</Link>
            </li>
            <li>
              <Link to="/country">Мемлекеттер</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
