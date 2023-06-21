
import '../Styles/Header.css';
import Menu from './Menu.js';
import Timer from './Timer.js';

function Header() {
  return (
    <div className="Header">
      
        
        <Timer />

        <p id="title">
          Star Wars
        </p>
       
       <Menu />
      
    </div>
  );
}

export default Header;