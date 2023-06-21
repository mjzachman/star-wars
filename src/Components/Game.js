
import '../Styles/Game.css';
import picture from '../Images/starwars.jpg';

function Game() {
  return (
    <div className="Game">
      <header className="Game-header">

        <img src= {picture} alt="starwars characters" id="characters" />
       
      </header>
    </div>
  );
}

export default Game;