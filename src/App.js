import { useState } from "react";
import "./styles.css";

let travelDB = {
  Beaches: [
    {
      name: "Goa",
      rating: "4/5",
      img:
        "https://img.onmanorama.com/content/dam/mm/en/travel/outside-kerala/images/2021/10/19/andaman-nicobar.jpg.transform/schema-4x3/image.jpg",
      description:
        "This place is situdated on the coast line of India and the best time to visit Goa is during Oct-Dec"
    },
    {
      name: "Andaman and Nicobar Island",
      rating: "5/5",
      img:
        "https://s01.sgp1.cdn.digitaloceanspaces.com/article/157373-zcpsrpnnec-1617976605.jpg",
      description:
        "This place is famous for its rich preserved rich bio-diversity."
    },
    {
      name: "Mumbai",
      rating: "3.5/5",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Mumbai_Aug_2018_%2843397784544%29.jpg/640px-Mumbai_Aug_2018_%2843397784544%29.jpg",
      description: "We all know about the city that never sleeps!!"
    }
  ],
  Mountains: [
    {
      name: "Kashmir",
      rating: "4.5/5",
      img:
        "https://images.thrillophilia.com/image/upload/s--WgP7MnKl--/c_fill,g_center,h_642,q_auto,w_1280/f_auto,fl_strip_profile/v1/images/photos/000/260/247/original/1589379671_shutterstock_394896406.jpg.jpg",
      description: "This place is one of the best place for the nature lovers"
    },
    {
      name: "Switzerland",
      rating: "5/5",
      img:
        "https://www.wanderluststorytellers.com/wp-content/uploads/2017/10/Most-Beautiful-Places-in-Switzerland-1080x720.jpg",
      description: "Switzerland is famous for its best views and food."
    },
    {
      name: "Himachal Pradesh",
      rating: "5/5",
      img:
        "https://static.toiimg.com/photo/msid-81989634,width-96,height-65.cms",
      description: "Favorite go-to travel destination for Indians."
    }
  ],
  Party: [
    {
      name: "Singapore",
      rating: "5/5",
      img:
        "https://www.planetware.com/wpimages/2020/03/singapore-in-pictures-beautiful-places-to-photograph-marina-bay-sands.jpg",
      description: "Lots of Fun activities and Party places to explore."
    },
    {
      name: "Bali",
      rating: "4/5",
      img:
        "https://www.theknot.com/tk-media/images/0108e30b-f23f-4d5b-bacb-c13df8215c94",
      description: "Budget party place in Vietnam"
    },
    {
      name: "Vegas",
      rating: "4.5/5",
      img: "https://static.toiimg.com/photo/81585254.cms",
      description: "Las Vegas is famous for its party culture."
    }
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
                <div>
                  <img
                    className="destination-image"
                    alt=""
                    src={destination.img}
                  />
                  <li key={destination.name}>
                    <div className="destination-name">{destination.name}</div>
                    <div className="destination-rating">
                      {destination.rating}
                    </div>
                  </li>
                </div>
                <p className="destination-description">
                  {destination.description}
                </p>
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
