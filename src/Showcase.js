import bulbasaur from "./images/bulbasaur.jpg";
import "./Showcase.css";

function Showcase() {
  const favPokemon = "Bulbasaur";
  const pokeCharacteristics = {
    type: "Grass",
    move: "Vine Whip"
  };

  return (
    <div>
      <h1>{favPokemon}'s Showcase Component</h1>
      <img
        src={bulbasaur}
        alt={favPokemon}
        style={{ borderRadius: "50%", height: "25rem", width: "25rem" }}
      ></img>
      <h2>
        {favPokemon}'s type is{" "}
        <span className="green">{pokeCharacteristics.type}</span> and one of
        their moves is <span className="white">{pokeCharacteristics.move}</span>
      </h2>
    </div>
  );
}

export default Showcase;
