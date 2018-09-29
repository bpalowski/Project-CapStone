import React from 'react';
import { Link } from 'react-router-dom';


function Header(){
  return (
    <div>
      <Link to="/">Home</Link>|<Link to="/newRec">NewRec</Link>|<Link to="/changeImg">change</Link>


    </div>
  );
}

export default Header;
