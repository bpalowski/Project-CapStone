import React from 'react';
import { Link } from 'react-router-dom';


function Header(){
  return (
    <div>
      <Link to="/">Home</Link>|
      <Link to="/test">Test</Link>
      <Link to="/textConvert">TextConvert</Link>
    </div>
  );
}

export default Header;
