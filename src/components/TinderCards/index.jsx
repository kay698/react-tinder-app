import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./styles.css"


function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Elon Musk",
      url: require("../../assets/kids.jpg"),
    },
    {
      name: "Jeff Bezos",
      url: require("../../assets/backImg.jpg"),
    },
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log("removing" + nameToDelete);
    // setLastDirection(direction)
  };

  const outOfFrame = (name) => {
    console.log(name + "left the screen");
  };
  return (
    <div className="tinder__cards">
      <div className="tindercard__container">
        {people.map((person, index) => (
          <TinderCard
            className="swipe"
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            key={person.name}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}
export default TinderCards;
