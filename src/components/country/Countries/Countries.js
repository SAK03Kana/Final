import React, { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";
const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div>
      <h1 className="h111">Әлемдерден Сәлем</h1>
      <h1>БАРЛЫҚ МЕМЛЕКЕТТЕРДІ АРАЛА!!!</h1>
      <p>Барлық мемлекеттер: {countries.length}</p>
      <div className="countries-container">
        {countries.map((country) => (
          <Country
            country={country}
            key={country.cca3}
      name={country.name.common}
             population={country.population}
             region={country.region}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
