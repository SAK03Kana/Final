import { useEffect, useState } from "react";
import Countries from "./Countries/Countries";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      {/* <LoadCountries></LoadCountries> */}
      <Countries></Countries>
      <Footer></Footer>
    </div>
  );
}

// function LoadCountries() {
//     const [countries, setCountries] = useState([])
//     useEffect(() => {

//         fetch('https://restcountries.com/v3.1/all')
//             .then(res => res.json())
//             .then(data => setCountries(data))
//     }, [])
//     return (
//         <div>
//             <h1>Visiting every country of the world!!!</h1>
//             <p>Avaliable countries: {countries.length}</p>
//             {
//                 countries.map(country => <Country name={country.name.common} population={country.population}></Country>)
//                 // countries.map(country => console.log(country))
//             }
//         </div>
//     )
// }

// function Country(props) {
//     return (
//         <div>
//             <h2>Name: {props.name}</h2>
//             <h4>Population: {props.population}</h4>
//         </div>
//     )
// }

export default App;