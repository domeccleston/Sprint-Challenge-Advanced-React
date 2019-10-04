import React from 'react';
import { useDarkMode } from '../hooks/hooks.jsx';
import { Segment, Checkbox } from 'semantic-ui-react';

const Navbar = () => {
    const [darkModeNew, setDarkModeNew] = useDarkMode(true)
    console.log(darkModeNew)
  
    return (
      <nav className="navbar">
        <h1>Women's World Cup players</h1>
         <Checkbox toggle data-testid="darkmode-toggle" className="toggle"
            onClick={setDarkModeNew}
          />
      </nav>
    );
  };

export default Navbar;