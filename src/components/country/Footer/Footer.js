import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
     
      <footer>
        <div className="container padding">
          <div className="box logo">
            <h1>Alem.kz</h1>
            <span>ӘЛЕМНІҢ БАРЛЫҚ ЕЛДЕРІ ТУРАЛЫ АҚПАРАТ</span>

          </div>
          <div className="box link">
            <h3>                </h3>
            <ul>
              <li>Біз туралы</li>
              <li>Қызметтер</li>
              <li></li>
              <li>Блог</li>
              <li>Бізбен байланыс</li>
            </ul>
          </div>

          <div className="box last">
            <h3>Сұрақтарыңыз бар ма?</h3>
            <ul>
              <li>
                <i className="fa fa-map"></i>
                Алматы қаласы, Жұбанов көшесі, 9 үй
              </li>
              <li>
                <i className="fa fa-phone-alt"></i>
                +7 747 212 7004
              </li>
              <li>
                <i className="fa fa-paper-plane"></i>
                kanat.amirzhan2003@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;