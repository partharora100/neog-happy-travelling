import { useState } from "react";
import "./styles.css";

let travelDB = {
  Beaches: [
    { name: "Goa", rating: "4/5" },
    { name: "Andaman and Nicobar Island", rating: "5/5" },
    { name: "Mumbai", rating: "3.5/5" }
  ],
  Mountains: [
    { name: "Kashmir", rating: "4.5/5" },
    { name: "Switzerland", rating: "5/5" },
    { name: "Himachal Pradesh", rating: "5/5" }
  ],
  Party: [
    { name: "Singapore", rating: "5/5" },
    { name: "Bali", rating: "4/5" },
    { name: "Vegas", rating: "4.5/5" }
  ]
};

const travelDBkeys = Object.keys(travelDB);
// console.log(travelDBkeys);

// console.log(musicDB["bollywood"]);
export default function App() {
  let [selectedPlace, setPlace] = useState("Beaches");
  const travelDBValues = travelDB[selectedPlace];

  const onClickHandler = function (keys) {
    setPlace(keys);
  };

  return (
    <div className="App">
      <h1>Happy Travelling</h1>
      <p>
        Select where you want to travel and I will suggest my favorite
        destinations with you!!
      </p>
      <hr />
      <div className="button-list">
        {travelDBkeys.map(function (keys) {
          return (
            <button key={keys} onClick={() => onClickHandler(keys)}>
              {keys}
            </button>
          );
        })}
      </div>
      <div style={{ textAlign: "left" }}>
        <ul>
          {travelDBValues.map(function (destination) {
            return (
              <div className="destination-box">
                <li key={destination.name}>
                  <div className="destination-name">{destination.name}</div>
                  <div className="destination-rating">{destination.rating}</div>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

// thinsg I learned in this project
// map function
// useState
