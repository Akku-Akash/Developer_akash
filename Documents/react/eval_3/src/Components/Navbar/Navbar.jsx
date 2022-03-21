import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Link to = {'/'}><button className="Home">Home</button></Link>
        <Link to = {'/Mistry'}><button className="Mistry">Mistry</button></Link>
        <Link to = {'/Technology'}><button className="Technology">Technology</button></Link>
        <Link to = {'/Mythology'}><button className="Mythology">Mythology</button></Link>
        <Link to = {'/history'}><button className="history">history</button></Link>
        {/* Populate 5 buttons with EXACT same classnames as of their routes name */}
        {/* Example: 
            <button className="history"> Link to history here  </button>  */}
        {/* Home component will have `/` route and classname as `home`  */}
      </div>
    </>
  );
};
